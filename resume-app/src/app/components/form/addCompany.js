import React from "react";
import AddButton from "../form/ui/addButton";
import DeleteButton from "../form/ui/deleteButton"

export default function companyList({fields, append, remove, register}) {
      
  const handleAdd = () => append({ companyName: "", title: "" , jobDescription: "", currentJob: "", startDate: "", endDate: ""});

      return (
        <div className="mb-5">
            <h2 className="text-xl">Experience</h2>
            {fields?.map((item, index) => (
              <div id={item.id} key={item.id} className="company border-b-[2px] pb-10 mb-5">
                <label>Company Name {index + 1}</label>
                <input {...register(`companyList.${index}.companyName`)} />
                
                <label>Title</label>
                <input {...register(`companyList.${index}.title`)} />
                <label className="flex items-center"> Current Job 
                <input className="flex-none w-5 mb-0" type="checkbox" {...register(`companyList.${index}.currentJob`)}/>
                </label>
                <div className="pl-5">
                

                </div>
                <div className="flex flex-row">
                  <div className="basis-1/3">
                    <label>Start Date</label>
                    <input type="date" {...register(`companyList.${index}.startDate`)} />
                  </div>
                  <div className="basis-1/3">
                    
                  </div>
                  <div className="basis-1/3">
                    <label>End Date</label>
                    <input type="date" {...register(`companyList.${index}.endDate`)} />
                  </div>
                </div>
                <label>Job Description</label>
                <p className="text-sm">Press enter after each description line.</p>
                <textarea {...register(`companyList.${index}.jobDescription`)} />
                <div className="flex flex-row-reverse">
                  <DeleteButton text={"remove company"} onClick={() => remove(index)}>Remove Company</DeleteButton>
                </div>
              </div>
            ))}
          
          <AddButton text={"add company"} onClick={handleAdd} >Add Company</AddButton>
        </div>
      );
  }