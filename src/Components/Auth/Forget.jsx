import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {ArrowLeft, Check, AlertCircle} from "lucide-react";
import {useNavigate} from "react-router-dom";

export default function Forgetassword() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
    watch,
    setError,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const emailValue = watch("email");

  const onSubmit = (data) => {
    // Simulate email not found for demo
    if (data.email.toLowerCase() === "notfound@example.com") {
      setError("email", {
        type: "manual",
        message: "We cannot find your email.",
      });
      return;
    }

    setSubmittedEmail(data.email);
    setIsSubmitted(true);
  };

  const handleBackToLogin = () => {
    setIsSubmitted(false);
    setSubmittedEmail("");
    reset();
    navigate("/login");
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md rounded-4xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 p-8">
        {/* Success Icon with decorative elements */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            {/* Decorative dots around icon */}
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
            <div className="absolute -top-2 -right-6 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            <div className="absolute -bottom-3 -left-6 w-1 h-1 bg-blue-300 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-blue-400 rounded-full opacity-70"></div>
            <div className="absolute top-1 -right-8 w-1 h-1 bg-blue-500 rounded-full"></div>
            <div className="absolute -top-6 right-2 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>

            {/* Main success icon */}
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center border-4 border-blue-400 dark:border-blue-500">
              <Check className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Email Sent!</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            We've sent a password reset link to <span className="font-medium text-gray-700 dark:text-gray-300">{submittedEmail}</span>. Please check your email and follow the instructions.
          </p>
        </div>

        <button
          onClick={handleBackToLogin}
          className="w-full bg-blue-400 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400 transition-colors duration-200 flex items-center justify-center gap-2"
          style={{background: "#60a5fa"}}
        >
          <ArrowLeft size={16} />
          <span>Back to Login</span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md rounded-4xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 p-8">
      {/* Icon with decorative elements matching your theme */}
      <div className="text-center mb-8">
        <div className="relative inline-block">
          {/* Decorative dots around the icon */}
          <div className="absolute -top-4 -left-4 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
          <div className="absolute -top-2 -right-6 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          <div className="absolute -bottom-3 -left-6 w-1 h-1 bg-blue-300 rounded-full"></div>
          <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-blue-400 rounded-full opacity-70"></div>
          <div className="absolute top-1 -right-8 w-1 h-1 bg-blue-500 rounded-full"></div>
          <div className="absolute -top-6 right-2 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
          <div className="absolute -top-1 left-8 w-1 h-1 bg-blue-300 rounded-full"></div>
          <div className="absolute bottom-2 -right-7 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>

          {/* Main icon circle */}
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center border-4 border-blue-400 dark:border-blue-500">
            <AlertCircle className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
      </div>

      {/* Title and Description */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Forgot Password</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Enter your email and we'll send you a link to reset your password.</p>
      </div>

      {/* Form Container */}
      <div>
        {/* Email Input */}
        <div className="mb-6">
          <div className="relative">
            <div className={`flex items-center border-b pb-3 ${errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-600"}`}>
              <div className="mr-4 text-gray-400 dark:text-gray-500">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m22 6-10 7L2 6" />
                </svg>
              </div>
              <input
                {...register("email", {
                  required: "Please enter your email address.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address.",
                  },
                })}
                className="flex-1 bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 text-base focus:outline-none border-0 p-0"
                placeholder="Enter your email address"
                type="email"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && isValid && emailValue?.trim()) {
                    handleSubmit(onSubmit)();
                  }
                }}
              />
              {emailValue && !errors.email && isValid && (
                <div className="text-green-500">
                  <Check size={20} />
                </div>
              )}
            </div>
          </div>

          {/* Error Message */}
          {errors.email && <div className="mt-3 text-red-500 dark:text-red-400 text-sm">{errors.email.message}</div>}
        </div>

        {/* Submit Button */}
        <div className="mb-6">
          <button
            onClick={handleSubmit(onSubmit)}
            className="w-full bg-blue-400 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            style={{background: "#60a5fa"}}
            disabled={!isValid || !emailValue?.trim()}
          >
            Send Reset Link
          </button>
        </div>
      </div>

      {/* Back to Login */}
      <div className="text-center">
        <button
          onClick={handleBackToLogin}
          className="text-gray-500 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200 flex items-center justify-center gap-2 mx-auto text-sm"
        >
          <ArrowLeft size={16} />
          <span>Back to Login</span>
        </button>
      </div>
    </div>
  );
}
