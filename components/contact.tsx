"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';



export type FormData = {
  name: string;
  email: string;
};

const Contact: FC = () =>  {
  const { ref } = useSectionInView("Contact");
  const { register, handleSubmit } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Google Form URL
  const googleFormAction = 'https://docs.google.com/forms/d/e/1FAIpQLSe7sqkY9Ibv6OxPzSTaSJSstksgT9GrXtuSyIHJfm-76k_eYA/formResponse';

  // Function to handle form submission
  const onSubmit = async (data: FormData) => {
    
    const formData = new FormData();
    formData.append('entry.2099102864', data.name);
    formData.append('entry.696453027', data.email);
    setIsSubmitted(true);
    try {
      await fetch(googleFormAction, {
        method: 'POST',
        body: formData,
      });
      console.log('Form submitted successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          shrivastavadevang2706@gmail.com
        </a>{" "}
        
      </p>

      {/* <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          // name="email"
          type="email"
          maxLength={500}
          placeholder="Your email"
          {...register('email', { required: true })}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          required
          maxLength={5000}
          {...register('name', { required: true })}
        />
        <div className='text-center'>
            <button className='hover:bg-purple-800 hover:shadow-lg active:bg-purple-300 rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>
                Submit
            </button>
        </div> */}
        {/* <SubmitBtn /> */}
      {/* </form> */}
    </motion.section>
  );
}

export default Contact;