import React from "react";

export default function companyList({fields, append, remove, register}) {
      
      return (
        <div id="thisisnew" className="mb-5">
          
            {fields?.map((item, index) => (
              <div id={item.id} key={item.id} className="company border-b-[2px] pb-10 mb-5">
                <label>Company Name {index + 1}</label>
                <input {...register(`list.${index}.companyName`)} />
                <label>Title</label>
                <input {...register(`list.${index}.title`)} />
                <label>Current Job</label>
                <div className="inline-block pl-5">
                <input type="checkbox" {...register(`list.${index}.currentJob`)}/>

                </div>
                <div className="flex flex-row">
                  <div className="basis-1/3">
                    <label>Start Date</label>
                    <input type="date" {...register(`list.${index}.startDate`)} />
                  </div>
                  <div className="basis-1/3">
                    
                  </div>
                  <div className="basis-1/3">
                    <label>End Date</label>
                    <input type="date" {...register(`list.${index}.endDate`)} />
                  </div>
                </div>
                <label>Job Description</label>
                <textarea {...register(`list.${index}.jobDescription`)} />
               
                <button className="bg-slate-200	 rounded-none px-1 py-2 mt-2 hover:bg-slate-400 text-xs" type="button" onClick={() => remove(index)}>Delete Company</button>
              </div>
            ))}
          
          <button className="bg-slate-200	rounded-none px-1 py-2 hover:bg-slate-400 text-sm"
            type="button"
            onClick={() => append({ companyName: "", title: "" , jobDescription: "", currentJob: "", startDate: "", endDate: ""})}
          >
            Add Company
          </button>
        </div>
      );
  }