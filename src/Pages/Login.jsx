import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {ArrowRight, Check, Eye, EyeOff} from "lucide-react";
import {Link} from "react-router";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors, isValid},
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    alert("Login Successful! Welcome back to Computer Durbar!");
    console.log(data);
  };

  const emailValue = watch("email");
  const passwordValue = watch("password");

  return (
    <>
      <div className="min-h-screen max-h-[200vh] py-5 bg-blue-300 dark:bg-gray-900 flex justify-center items-center flex-col relative">
        <div className="flex flex-col lg:flex-row w-full max-w-6xl h-auto lg:h-180 rounded-4xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 z-0">
          {/* Left Side (Design/Logo) */}
          <div className="hidden lg:block lg:flex-1 relative bg-gradient-to-br from-indigo-500 to-blue-500 z-0 overflow-visible">
            <img src="/W-Logo.png" alt="" className="z-160 absolute top-[100px] right-[100px] w-120 object-contain drop-shadow-xl" />
            <div className="absolute -top-50 -right-30 w-[250px] h-[350px] bg-indigo-700 rotate-[50deg] z-10 rounded-3xl"></div>
            <div className="absolute top-0 right-1/3 w-[150%] h-[150%] bg-blue-500 rotate-[-8deg] z-20"></div>
            <div className="absolute top-3/4 left-1/4 w-[500px] h-[500px] bg-blue-600 rotate-[30deg] z-20 rounded-3xl"></div>
          </div>

          {/* Right Side (Form) */}
          <div className="flex flex-1 flex-col h-full justify-center bg-white dark:bg-gray-800 px-4 sm:px-6 py-8">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div className="mt-6">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome Back</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Sign in to your Computer Durbar account</p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-10 max-w-md mx-auto">
                <div className="space-y-6">
                  {/* Email */}
                  <div className="relative">
                    <div className="flex items-center border-b border-gray-200 dark:border-gray-600 pb-3">
                      <div className="mr-4 text-gray-400 dark:text-gray-500">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m22 6-10 7L2 6" />
                        </svg>
                      </div>
                      <input
                        className="flex-1 bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 text-base focus:outline-none border-0 p-0"
                        placeholder="Email"
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: "Enter a valid email",
                          },
                        })}
                      />
                      {emailValue.includes("@") && emailValue.includes(".") && (
                        <div className="text-green-500">
                          <Check size={20} />
                        </div>
                      )}
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  {/* Password */}
                  <div className="relative">
                    <div className="flex items-center border-b border-gray-200 dark:border-gray-600 pb-3">
                      <div className="mr-4 text-gray-400 dark:text-gray-500">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5v10h14V11Z" />
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V8a5 5 0 0 0-10 0v1" />
                        </svg>
                      </div>
                      <input
                        className="flex-1 bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 text-base focus:outline-none border-0 p-0"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                          },
                        })}
                      />
                      <button type="button" className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="text-blue-400 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200">
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full bg-blue-400 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors duration-200"
                      style={{
                        zIndex: 20,
                        position: "relative",
                        background: "#60a5fa",
                      }}
                      disabled={!isValid}
                    >
                      <span>Sign In</span>
                      <ArrowRight size={16} />
                    </button>

                    <div className="text-center mt-4 text-gray-500 dark:text-gray-400">
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-blue-400 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200">
                        Sign up
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
