import React from "react";
import {useForm} from "react-hook-form";

const GetAQuoteForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white absolute top-[320px] left-[40px] dark:bg-black rounded-xl text-black dark:text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
      <h2 className="text-2xl font-bold mb-2">Get A Quote</h2>
      <p className="text-sm mb-6">Fill up the form and our Team will get back to you within 24 hours.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input {...register("name", {required: "Name is required"})} className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none bg-transparent" type="text" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Subject</label>
          <input {...register("subject", {required: "Subject is required"})} className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none bg-transparent" type="text" />
          {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {value: /^\S+@\S+$/, message: "Invalid email address"},
            })}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none bg-transparent"
            type="email"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            {...register("message", {required: "Message is required"})}
            rows="4"
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none bg-transparent resize-none"
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-300 text-black font-semibold hover:bg-red-600 transition duration-300 ease-in-out py-2 rounded-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default GetAQuoteForm;
