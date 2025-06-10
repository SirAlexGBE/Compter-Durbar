import React, {useState, useEffect} from "react";
import {ArrowRight, Check, Eye, EyeOff} from "lucide-react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link} from "react-router";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordRequirements, setPasswordRequirements] = useState([
    {text: "At least 8 characters", met: false},
    {text: "At least one number (0-9) or a symbol", met: false},
    {text: "Lowercase (a-z) and uppercase (A-Z)", met: false},
  ]);

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const checkPasswordStrength = (password) => {
    const requirements = [
      {text: "At least 8 characters", met: password.length >= 8},
      {text: "At least one number (0-9) or a symbol", met: /[\d\W]/.test(password)},
      {text: "Lowercase (a-z) and uppercase (A-Z)", met: /[a-z]/.test(password) && /[A-Z]/.test(password)},
    ];
    setPasswordRequirements(requirements);
  };

  const checkPasswordMatch = () => {
    if (formData.confirmPassword && formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  useEffect(() => {
    checkPasswordStrength(formData.password);
  }, [formData.password]);

  useEffect(() => {
    checkPasswordMatch();
  }, [formData.password, formData.confirmPassword]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({...prev, [field]: value}));
  };

  const isFormValid = () => {
    return formData.fullName.trim() !== "" && formData.email.trim() !== "" && passwordRequirements.every((req) => req.met) && passwordsMatch && formData.confirmPassword !== "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      toast.error("Please fill all fields correctly and ensure passwords match.");
      return;
    }
    toast.success("Account Created Successfully! Welcome to Computer Durbar!");
  };

  return (
    <>
      <div className="min-h-screen max-h-[200vh] py-5 bg-blue-300 dark:bg-gray-900 flex justify-center items-center flex-col relative">
        <div className="flex flex-col lg:flex-row w-full max-w-6xl h-auto lg:h-180 rounded-4xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 z-0">
          {/* Left Side (Form) */}
          <div className="flex flex-1 flex-col h-full justify-center bg-white dark:bg-gray-800 px-4 sm:px-6 py-8">
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div className="mt-6">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Sign Up</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Create a new account with Computer Durbar</p>
              </div>
              <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto">
                <div className="space-y-6">
                  {/* Full Name */}
                  <div className="relative">
                    <div className="flex items-center border-b border-gray-200 dark:border-gray-600 pb-3">
                      <div className="mr-4 text-gray-400 dark:text-gray-500">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                        </svg>
                      </div>
                      <input
                        className="flex-1 bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 text-base focus:outline-none border-0 p-0"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                      />
                      {formData.fullName.trim() && (
                        <div className="text-green-500">
                          <Check size={20} />
                        </div>
                      )}
                    </div>
                  </div>
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
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                      {formData.email.includes("@") && formData.email.includes(".") && (
                        <div className="text-green-500">
                          <Check size={20} />
                        </div>
                      )}
                    </div>
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
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                      />
                      <button type="button" className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                  {/* Password Requirements */}

                  <div className="space-y-2">
                    {passwordRequirements.map((requirement, index) => (
                      <div key={index} className={`flex items-center text-xs ${requirement.met ? "text-green-500" : "text-gray-500 dark:text-gray-400"}`}>
                        {requirement.met ? <Check size={14} className="mr-2" /> : <div className="mr-2 text-gray-300 dark:text-gray-600">•</div>}
                        <span>{requirement.text}</span>
                      </div>
                    ))}
                  </div>
                  {/* Confirm Password */}
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
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      />
                      <button
                        type="button"
                        className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                  {formData.confirmPassword && (
                    <div className={`text-sm ml-12 ${passwordsMatch ? "text-green-500" : "text-red-500"}`}>{passwordsMatch ? "Passwords match" : "Passwords do not match"}</div>
                  )}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full bg-blue-400 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors duration-200"
                      style={{zIndex: 20, position: "relative", background: "#60a5fa"}}
                      disabled={!isFormValid()}
                    >
                      <span>Sign Up</span>
                      <ArrowRight size={16} />
                    </button>
                    <div className="text-center mt-4 text-gray-500 dark:text-gray-400">
                      Already member?{" "}
                      <Link to="/login" className="text-blue-400 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200">
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="hidden lg:block lg:flex-1 relative bg-gradient-to-br from-indigo-500 to-blue-500 z-0 overflow-visible">
            <img src="/W-Logo.png" alt="" className="z-160 absolute top-[100px] left-[100px] w-120  object-contain drop-shadow-xl" />
            <div className="absolute -top-50 -left-30 w-[250px] h-[350px] bg-indigo-700 rotate-[130deg] z-10 rounded-3xl "></div>
            <div className="absolute top-0 left-1/3 w-[150%] h-[150%] bg-blue-500 rotate-[8deg] z-20"></div>
            <div className="absolute top-3/4 right-1/4 w-[500px] h-[500px] bg-blue-600 rotate-[330deg] z-20 rounded-3xl "></div>
          </div>
        </div>
      </div>
    </>
  );
}
