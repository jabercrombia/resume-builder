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
                <label>Current Job</label>
                <div className="inline-block pl-5">
                <input type="checkbox" {...register(`companyList.${index}.currentJob`)}/>

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
                  <DeleteButton onClick={() => remove(index)}>Remove Company</DeleteButton>
                </div>
              </div>
            ))}
          
          <AddButton onClick={handleAdd} >Add Company</AddButton>
        </div>
      );
  }