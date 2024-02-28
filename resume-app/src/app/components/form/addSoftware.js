import React from "react";
import AddButton from "../form/ui/addButton";
import DeleteButton from "../form/ui/deleteButton"

export default function softwareList({fields, append, remove, register}) {

  const handleAdd = () => append({ softwareName: "", softwareValue: ""});

      return (
        <div className="mb-5">
            <h2 className="text-xl">Software</h2>
            <p className="text-xs">optional</p>
            {fields?.map((item, index) => (
              <div id={item.id} key={item.id}>
                <div  className="flex flex-row company">
                  <div className="self-end basis-1/2 p-1">
                    <label>Software Name</label>
                    <input {...register(`software.${index}.softwareName`)} />
                  </div>
                  <div className="self-end basis-1/2 p-1">
                    <label>Software Numerical Value</label>
                    <p className="text-xs pb-1">Numberical value out of 100 you would base your skill on.</p>
                    <input type="number" {...register(`software.${index}.softwareValue`)} />    
                  </div>
                </div>
                <div className="flex flex-row-reverse mt-1 pb-2 border-b-[2px]">
                  <DeleteButton onClick={() => remove(index)}>Remove Software</DeleteButton>
                </div>
              </div>
              
            ))}
          <div className="mt-2">
            <AddButton onClick={handleAdd} >Add Software</AddButton>
          </div>
        </div>
      );
  }