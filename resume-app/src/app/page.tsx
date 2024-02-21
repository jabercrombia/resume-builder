"use client"

import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';


import Layout from "./components/form/layout";
import {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import Button from '@mui/material/Button';
import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';

import ReactGA from 'react-ga';
import Contact from "./components/form/contact";
import AddCompany from "./components/form/addCompany";
import AddPortfolio from "./components/form/addPortfolio";
import AddSkills from "./components/form/addSkills";
import AddSoftware from "./components/form/addSoftware";
import Education from "./components/form/education";
import { initGA, logPageView } from "./components/analytics";

import MyPdf from "./components/pdf/myPdf";


import FormProgress from "./components/form/formProgress";

import { sendGTMEvent } from '@next/third-parties/google'

import { Open_Sans } from 'next/font/google';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#000'
    }
  },
});

const openSans = Open_Sans({
    weight: ['300','400','500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  });

export default function Page() {

  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    initGA(); // Initialize Google Analytics
    logPageView(); // Log the initial page view
  }, []);



  const [cookies, setCookie] = useCookies(['resume']);

  const resumeCookies = new Cookies(null, {path: '/', maxAge: 5*60*1000});
  let formData = resumeCookies.get("resume");
  //const getCookie = cookies.get("resume");
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
} = useForm({
    defaultValues: {
    firstName: formData?.firstName,
    lastName: formData?.lastName,
    companyList: formData?.companyList,
    portfolio: formData?.portfolio,
    degree: formData?.degree,
    schoolName: formData?.schoolName,
    skills: formData?.skills
}})


  const { fields: companyFields, 
    append: companyAppend, 
    remove: companyRemove 
  } = useFieldArray({control, name: "companyList"});

  const {
    fields: portfolioFields,
    append: portfolioAppend,
    remove: portfolioRemove
  } = useFieldArray({ control, name: "portfolio" });

  const {
    fields: skillsFields,
    append: skillsAppend,
    remove: skillsRemove
  } = useFieldArray({ control, name: "skills" });

  const {
    fields: softwareFields,
    append: softwareAppend,
    remove: softwareRemove
  } = useFieldArray({ control, name: "software" });


    const formArray = ['contact','portfolio','education','company','skills','software'];
    const [counter, setCounter] = useState(0);
    let currentStep = formArray[counter] ? formArray[counter] : 'done';

    const onSubmit = (data : any) => {
      setCookie("resume", data);
      console.log(resumeCookies.get("resume"));
      console.log('----');
      console.log(memberData);
    }
   
    const nextChange = ( data: object) => {
      setCounter(counter + 1);
      //setCookie("resume", data);
      //console.log('remove  cookie');

      //resumeCookies.remove("resume");

      //console.log(resumeCookies.get("resume"));

      resumeCookies.set("resume", data);
      //resumeCookies.addChangeListener("resume");
      console.log('next clicked');
      console.log(resumeCookies.get("resume"));
      console.log('data');
      console.log(data);
    };

    const backChange = () => {
      setCounter(counter - 1);
    };
    return (
      <Layout>
      <FormProgress counter={counter}/>
      <form onSubmit={handleSubmit(onSubmit)} className={openSans.className} id="form">

      {(formArray[counter] == "contact" && isClient) && <Contact formData={formData} register={register} errors={errors} watch={watch} />}
      
      {(formArray[counter] == "portfolio" && isClient) && <AddPortfolio fields={portfolioFields} append={portfolioAppend} remove={portfolioRemove} register={register} />}
  
      {(formArray[counter] == "education" && isClient) && <Education formData={formData} register={register}/>}

      {(formArray[counter] == "company" && isClient) &&  <AddCompany fields={companyFields} append={companyAppend} remove={companyRemove} register={register}/>}

      {(formArray[counter] == "skills" && isClient) &&  <AddSkills fields={skillsFields} append={skillsAppend} remove={skillsRemove} register={register} />}

      {(formArray[counter] == "software" && isClient) &&  <AddSoftware fields={softwareFields} append={softwareAppend} remove={softwareRemove} register={register} />}
     
      <ThemeProvider theme={theme}>
      <div className="flex justify-center">
        <div className={counter == 0 ? "hidden" :"mx-1"}><Button variant="outlined" onClick={backChange}>Back</Button></div>
        <div className={counter > formArray.length -1 ? "hidden" :"mx-1"}><Button variant="contained" onClick={handleSubmit(nextChange)}>Next</Button></div>
      </div>
      </ThemeProvider>
 
      <input type="submit" />
      </form>

      {formArray.length == counter &&
      <div className="my-5">
        <p className="text-lg text-center mb-10">Thank you for filling out the Resume Form click Download PDF to download your resume!</p>
        <div className="flex justify-center">
          <div>
            {isClient && <PDFDownloadLink className="w-1/6 border-black border-solid border-2 px-2 py-2 hover:bg-slate-200 mb-10 rounded" document={<MyPdf formData={formData}/>} fileName={formData?.firstName + "_" + formData?.lastName + ".pdf"}>
              {({blob, url, loading, error}) =>
                loading ? 'Loading document...' : 'Download PDF'
              }</PDFDownloadLink>
            }
          </div>
        </div>
        <PDFViewer width={600} height={900} className="my-10 mx-auto">
          <MyPdf formData={formData}/>
        </PDFViewer>
      </div>
      }
      </Layout>
    );
}