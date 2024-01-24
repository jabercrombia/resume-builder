import React from "react";

export default function portfolioList({fields, append, remove, register}) {
      return (
        <div className="mb-5">
          
            {fields?.map((item, index) => (
              <div id={item.id} key={item.id} className="company border-b-[2px] pb-10 mb-5">
                <label>Portfolio Name</label>
                <input {...register(`portfolio.${index}.portfolioName`)} />
                <label>Portfolio Link</label>
                <input {...register(`portfolio.${index}.portfolioLink`)} />
                <div className="flex flex-row-reverse">
                  <button className="bg-slate-200	 rounded-none p-2 mt-2 hover:bg-slate-400 text-xs" type="button" onClick={() => remove(index)}>Delete Portfolio</button>
                </div>
              </div>
            ))}
          
          <button className="bg-slate-200	rounded-none p-2 hover:bg-slate-400 text-sm"
            type="button"
            onClick={() => append({ portfolioName: "", portfolioLink: ""})}
          >
            Add Portfolio Link
          </button>
        </div>
      );
  }