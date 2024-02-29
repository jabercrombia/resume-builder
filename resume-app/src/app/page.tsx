"use client"

import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';


import Layout from "./components/form/layout";
import {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import { useForm, useFieldArray } from "react-hook-form";
import Button from '@mui/material/Button';

import Contact from "./components/form/contact";
import AddCompany from "./components/form/addCompany";
import AddPortfolio from "./components/form/addPortfolio";
import AddSkills from "./components/form/addSkills";
import AddSoftware from "./components/form/addSoftware";
import Education from "./components/form/education";
import { initGA, logPageView, buttonTracking } from "./components/analytics";

import MyPdf from "./components/pdf/myPdf";
import FormProgress from "./components/form/formProgress";

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

let item = "";
  if (typeof localStorage !== 'undefined') {
    item = localStorage.getItem('resume') || "";
  } else if (typeof sessionStorage !== 'undefined') {
    item = sessionStorage.getItem('resume') || "";
  } else {
    console.log('Web Storage is not supported in this environment.');
  }

const formData = item ? JSON.parse(item) : null;

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
   
    const nextChange = ( data: object) => {      
      setCounter(counter + 1);
      
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('resume', JSON.stringify(data));
      } else if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('resume', JSON.stringify(data));
      } else {
        console.log('Web Storage is not supported in this environment.');
      }
      buttonTracking("next");
    };

    const backChange = () => {
      setCounter(counter - 1);
    };
    return (
      <Layout>
      <FormProgress counter={counter}/>
      <form className={openSans.className} id="form">

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