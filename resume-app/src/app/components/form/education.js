import React from "react";

export default function education({formData, register}) {
      
    return (
        <div>
            <h2 className="text-xl">Education</h2>
            <label>School Name</label>
            <input defaultValue={formData?.schoolName} {...register("schoolName")}  />
            <label>Degree</label>
            <input defaultValue={formData?.degree} {...register("degree")} />
        </div>
      )
};