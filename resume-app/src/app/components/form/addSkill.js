import React from "react";
import { useFieldArray, Controller } from "react-hook-form";

export default function skill({formData, register}) {

      
    return (
        <div>
            <label>Add all your skills seperated by a comma</label>
            <textarea defaultValue={formData?.skill} {...register("skill")} />
        </div>
      )
};