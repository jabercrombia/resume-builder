import React from "react";

export default function contact({formData, register, errors}) {
      
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
            <textarea defaultValue={formData?.aboutMe} {...register("aboutMe")} />
        </>
      )
};