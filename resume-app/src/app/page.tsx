"use client"

import React, {useEffect, useState} from 'react';
import Layout from "./components/form/layout";
import {PDFDownloadLink} from "@react-pdf/renderer";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import Cookies from "universal-cookie";

import Contact from "./components/form/contact";
import AddCompany from "./components/form/addCompany";
import AddPortfolio from "./components/form/addPortfolio";
import AddSkills from "./components/form/addSkills";
import Education from "./components/form/education";

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
    setIsClient(true)
  }, []);
  
  const cookies = new Cookies(null);

  const formData = cookies.get("resume");

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
    list: formData?.list,
    portfolio: formData?.portfolio,
    skills: formData?.skills
}})
  const onSubmit = (data : any) => {
    cookies.set("resume", data);
    () => sendGTMEvent({ event: 'buttonClicked', value: 'save resume' });

  }

  const { fields, append, remove } = useFieldArray({
    control,
    name: "list"
  });

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

  return (<Layout>

  <form onSubmit={handleSubmit(onSubmit)} className={openSans.className}>
  <a id="contact"/>
    <h2>Contact</h2>
    <Contact formData={formData} register={register} errors={errors} watch={watch} />
    
    <h2>Portfolio</h2>
    {isClient &&  <AddPortfolio fields={portfolioFields} append={portfolioAppend} remove={portfolioRemove} register={register} />}
    
    <h2>Education</h2>
    <Education formData={formData} register={register}/>

    <h2>Experience</h2>
    {isClient &&  <AddCompany fields={fields} append={append} remove={remove} register={register} />}

    <h2>Skills</h2>
    {isClient &&  <AddSkills fields={skillsFields} append={skillsAppend} remove={skillsRemove} register={register} />}

    <input type="submit" value="Save Resume" className="bg-white hover:bg-slate-500 cursor-pointer" />
  </form>
  <div className="my-5">
    {isClient && <PDFDownloadLink onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'download pdf' })} className="download bg-slate-100 border-black border-solid border-2 px-2 py-2 hover:bg-slate-200 mb-10" document={<MyPdf formData={formData}/>} fileName={formData?.firstName + "_" + formData?.lastName + ".pdf"}>
      {({blob, url, loading, error}) =>
        loading ? 'Loading document...' : 'Download PDF'
      }</PDFDownloadLink>
    }
    </div>
  </Layout>
  )
}