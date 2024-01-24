import React from "react";

export default function skillsList({fields, append, remove, register}) {

      return (
        <div className="mb-5">
          
            {fields?.map((item, index) => (
              <div id={item.id} key={item.id} className="company border-b-[2px] pb-10 mb-5">
                <label>Skill Name</label>
                <input {...register(`skills.${index}.skillName`)} />
                <label>Skill Numerical Value</label>
                <p className="text-xs">Numberical value out of 100 you would base your skill on.</p>
                <input type="number" {...register(`skills.${index}.skillValue`)} />

                <button className="bg-slate-200	 rounded-none px-1 py-2 mt-2 hover:bg-slate-400 text-xs" type="button" onClick={() => remove(index)}>Remove Skill</button>
              </div>
            ))}
          
          <button className="bg-slate-200	rounded-none px-1 py-2 hover:bg-slate-400 text-sm"
            type="button"
            onClick={() => append({ skillName: "", skillValue: ""})}
          >
            Add Skill
          </button>
        </div>
      );
  }