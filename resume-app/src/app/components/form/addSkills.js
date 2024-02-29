import React from "react";
import AddButton from "../form/ui/addButton";
import DeleteButton from "../form/ui/deleteButton"

export default function skillsList({fields, append, remove, register}) {

  const handleAdd = () => append({ skillName: "", skillValue: ""});

      return (
        <div className="mb-5">
            <h2 className="text-xl">Skills</h2>
            {fields?.map((item, index) => (
              <div id={item.id} key={item.id}>
                <div  className="flex flex-col md:flex-row company">
                  <div className="md:self-end basis-full md:basis-1/2 p-1">
                    <label>Skill Name</label>
                    <input {...register(`skills.${index}.skillName`)} />
                  </div>
                  <div className="md:self-end basis-full md:basis-1/2 p-1">
                    <label>Skill Numerical Value</label>
                    <p className="text-xs pb-1">Numberical value out of 100 you would base your skill on.</p>
                    <input type="number" {...register(`skills.${index}.skillValue`)} />    
                  </div>
                </div>
                <div className="flex flex-row-reverse mt-1 pb-2 border-b-[2px]">
                  <DeleteButton text={"remove skill"} onClick={() => remove(index)}>Remove Skill</DeleteButton>
                </div>
              </div>
              
            ))}
          <div className="mt-2">
            <AddButton text={"add skill"} onClick={handleAdd} >Add Skill</AddButton>
          </div>
        </div>
      );
  }