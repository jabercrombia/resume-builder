import React from "react";

export default function contact({formData, register, errors, watch}) {

  var characterCount = watch("aboutMe");
  characterCount = characterCount?.length;

    return (
        <>
            <label>First Name</label>
            <input {...register("firstName")} />
            <label>Last Name</label>
            <input {...register("lastName")} />
            <label>Title</label>
            <input defaultValue={formData?.title} {...register("title")} />
            <label>Email Address</label>
            <input
                id="email"
                defaultValue={formData?.email}
                {...register("email", {
                  required: "required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not have email format",
                  },
                })}
                type="email"
              />
              {errors.email && <span role="alert">{errors.email.message}</span>}
            <label>Phone Number</label>
            <input defaultValue={formData?.phoneNumber} {...register("phoneNumber")} type="tel" />
            <label>LinkedIn</label>
            <input defaultValue={formData?.linkedIn} {...register("linkedIn")} />
            <label>About Me</label>
            <p className="text-xs">Character limit: {characterCount} / 500</p>
            <textarea defaultValue={formData?.aboutMe} {...register("aboutMe",{maxLength: 500})} />
            {errors.aboutMe && <p className="text-red-700 text-sm">You are over the 500 character limit.</p>} 
        </>
      )
      
};