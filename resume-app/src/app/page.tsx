"use client"

import React, {useEffect, useState} from 'react';
import Layout from "./components/form/layout";
import {PDFDownloadLink, PDFViewer, Document, Page} from "@react-pdf/renderer";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import Cookies from "universal-cookie";

import Contact from "./components/form/contact";
import AddCompany from "./components/form/addCompany";
import AddSkill from "./components/form/addSkill";
import Education from "./components/form/education";

import MyPdf from "./components/pdf/myPdf";

import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['100','400','500', '700'],
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
}})
  const onSubmit = (data : any) => {
    cookies.set("resume", data);
  }

  const { fields, append, remove } = useFieldArray({
    control,
    name: "list"
  });

  return (<Layout>

  <form onSubmit={handleSubmit(onSubmit)} className={roboto.className}>
  <a id="contact"/>
    <h2>Contact</h2>
    <Contact formData={formData} register={register} errors={errors} />
    

    <h2>Education</h2>
    <Education formData={formData} register={register}/>

    <h2>Experience</h2>
    {isClient &&  <AddCompany fields={fields} append={append} remove={remove} register={register} />}

    
    <h2>Skills</h2>
    <AddSkill formData={formData} register={register} />

    <input type="submit" value="Save Resume" className="bg-white hover:bg-slate-500 cursor-pointer" />
  </form>
  <div className="my-5">
    {isClient && <PDFDownloadLink className="download rounded bg-blue-600 px-2 py-2 hover:bg-blue-200 mb-10" document={<MyPdf formData={formData}/>} fileName={formData?.firstName + "_" + formData?.lastName + ".pdf"}>
      {({blob, url, loading, error}) =>
        loading ? 'Loading document...' : 'Download PDF'
      }</PDFDownloadLink>
    }
    </div>
  </Layout>
  )
}