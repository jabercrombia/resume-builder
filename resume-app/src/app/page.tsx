"use client"

import React, {useEffect, useState} from 'react';
import Layout from "./components/form/layout";
import {PDFDownloadLink} from "@react-pdf/renderer";

import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { useCookies } from 'react-cookie';
import ReactGA from 'react-ga';

import Contact from "./components/form/contact";
import AddCompany from "./components/form/addCompany";
import AddPortfolio from "./components/form/addPortfolio";
import AddSkills from "./components/form/addSkills";
import Education from "./components/form/education";
import { initGA, logPageView } from "./components/analytics"; // Import the utility you created

import MyPdf from "./components/pdf/myPdf";


import { sendGTMEvent } from '@next/third-parties/google'

import { Open_Sans } from 'next/font/google';


const openSans = Open_Sans({
    weight: ['300','400','500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  });
export default function Pdf() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    initGA(); // Initialize Google Analytics
    logPageView(); // Log the initial page view
  }, []);


  const [cookies, setCookie] = useCookies(['resume']);

  const formData = cookies.resume;

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
    skills: formData?.skills
}})
  const onSubmit = (data : any) => {
    setCookie("resume", data);
  }

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

  return (
  <Layout>
  <form onSubmit={handleSubmit(onSubmit)} className={openSans.className} id="form">

    <h2 id="contact">Contact</h2>
    <Contact formData={formData} register={register} errors={errors} watch={watch} />
    
    <h2 id="portfolio">Portfolio</h2>
    {isClient &&  <AddPortfolio fields={portfolioFields} append={portfolioAppend} remove={portfolioRemove} register={register} />}
    
    <h2 id="education">Education</h2>
    <Education formData={formData} register={register}/>

    <h2 id="experience">Experience</h2>
    {isClient &&  <AddCompany fields={companyFields} append={companyAppend} remove={companyRemove} register={register} />}

    <h2 id="skills">Skills</h2>
    {isClient &&  <AddSkills fields={skillsFields} append={skillsAppend} remove={skillsRemove} register={register} />}

    <input type="submit" value="Save Resume" className="bg-white hover:bg-slate-500 cursor-pointer" />
  </form>
  <div className="my-5">
    {isClient && <PDFDownloadLink className="download bg-slate-100 border-black border-solid border-2 px-2 py-2 hover:bg-slate-200 mb-10" document={<MyPdf formData={formData}/>} fileName={formData?.firstName + "_" + formData?.lastName + ".pdf"}>
      {({blob, url, loading, error}) =>
        loading ? 'Loading document...' : 'Download PDF'
      }</PDFDownloadLink>
    }
    </div>
  </Layout>
  )
}