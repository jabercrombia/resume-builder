import React from "react";
import AddButton from "../form/ui/addButton";
import DeleteButton from "../form/ui/deleteButton"


export default function portfolioList({fields, append, remove, register}) {

  const handleAdd = () => append({ portfolioName: "", portfolioLink: "", portfolioDisplayLink: ""});

      return (
        <div className="mb-5">
            <h2 className="text-xl">Portfolio</h2>
            {fields?.map((item, index) => (
              <div id={item.id} key={item.id} className="company border-b-[2px] pb-10 mb-5">
                <label>Portfolio Name</label>
                <input {...register(`portfolio.${index}.portfolioName`)} />
                <label>Portfolio Link</label>
                <input {...register(`portfolio.${index}.portfolioLink`)} />
                <label>Portfolio Display Name</label>
                <input {...register(`portfolio.${index}.portfolioDisplayLink`)} />
                <div className="flex flex-row-reverse">
                  <DeleteButton text={"remove portfolio"} onClick={() => remove(index)}>Remove Portfolio</DeleteButton>
                </div>
              </div>
            ))}
        
          <AddButton text={"add portfolio"} onClick={handleAdd} >Add Portfolio</AddButton>

        </div>
      );
  }