import React from "react";
import { Input, Label } from '@headlessui/react'

export default function contact({formData, register, errors, watch}) {

  var characterCount = watch("aboutMe");
  characterCount = characterCount?.length;

    return (
        <div>
            <h2>Contact</h2>
            <label>First Name</label>
            <Input {...register("firstName")} />
            <label>Last Name</label>
            <Input {...register("lastName")} />
            <label>Title</label>
            <Input defaultValue={formData?.title} {...register("title")} />
            <label>Email Address</label>
            <Input
                id="email"
                defaultValue={formData?.email}
                {...register("email")}
                type="email"
              />
            <label>Phone Number</label>
            <Input defaultValue={formData?.phoneNumber} {...register("phoneNumber")} type="tel" />
            <label>LinkedIn</label>
            <Input defaultValue={formData?.linkedIn} {...register("linkedIn")} />
            <label>About Me</label>
            <p className="text-xs">Character limit: {characterCount} / 500</p>
            <textarea defaultValue={formData?.aboutMe} {...register("aboutMe",{maxLength: 500})} />
            {errors.aboutMe && <p className="text-red-700 text-sm">You are over the 500 character limit.</p>} 
        </div>
      )
      
};