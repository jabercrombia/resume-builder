import React from "react";
import Button from '@mui/material/Button';


export default function skillsList({fields, append, remove, register}) {

      return (
        <div className="mb-5">
            <h2 className="text-xl">Skills</h2>
            {fields?.map((item, index) => (
              <div id={item.id} key={item.id}>
                <div  className="flex flex-row company border-b-[2px]">
                  <div className="self-end basis-1/2 p-1">
                    <label>Skill Name</label>
                    <input {...register(`skills.${index}.skillName`)} />
                  </div>
                  <div className="self-end basis-1/2 p-1">
                    <label>Skill Numerical Value</label>
                    <p className="text-xs pb-1">Numberical value out of 100 you would base your skill on.</p>
                    <input type="number" {...register(`skills.${index}.skillValue`)} />    
                  </div>
                </div>
                <div className="flex flex-row-reverse">
                    <Button variant="outlined" className="bg-slate-200 p-2 mt-2 hover:bg-slate-400 text-xs" type="button" onClick={() => remove(index)}>Remove Skill</Button>
                  </div>
              </div>
              
            ))}
          
          <Button variant="outlined" className="bg-slate-20 p-2 hover:bg-slate-400 text-sm"
            type="button"
            onClick={() => append({ skillName: "", skillValue: ""})}
          >
            Add Skill
          </Button>
        </div>
      );
  }