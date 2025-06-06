"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Check,
  Facebook,
  Eye,
  EyeOff,
  ChevronDown,
  KeyRound,
} from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

// Toast Component
function Toast({ toast, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(toast.id);
    }, toast.duration || 5000);

    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, onClose]);

  return (
    <div
      className={`fixed top-4 right-4 z-50 w-96 rounded-lg border p-4 shadow-lg transition-all duration-300 ${
        toast.variant === "destructive"
          ? "border-red-200 bg-red-50 text-red-900"
          : "border-green-200 bg-white text-gray-900"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {toast.title && <div className="font-semibold">{toast.title}</div>}
          {toast.description && (
            <div className="mt-1 text-sm opacity-90">{toast.description}</div>
          )}
        </div>
        <button
          onClick={() => onClose(toast.id)}
          className="ml-4 text-gray-400 hover:text-gray-600"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// Toast Hook
function useToast() {
  const [toasts, setToasts] = useState([]);

  const toast = ({
    title,
    description,
    variant = "default",
    duration = 5000,
  }) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { id, title, description, variant, duration };

    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return { toast, toasts, removeToast };
}

// Simple Button component
function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={
        "px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 " +
        (props.disabled
          ? "opacity-50 cursor-not-allowed "
          : "bg-blue-600 text-white hover:bg-blue-700 ") +
        className
      }
    >
      {children}
    </button>
  );
}

// All-in-one Input component
function Input({ label, error, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        {...props}
        className={
          "border px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 " +
          (error ? "border-red-500 " : "border-gray-300 ") +
          className
        }
      />
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
}

const languages = [
  { code: "ENG", name: "English", flag: "🇺🇸" },
  { code: "ESP", name: "Español", flag: "🇪🇸" },
  { code: "FRA", name: "Français", flag: "🇫🇷" },
  { code: "DEU", name: "Deutsch", flag: "🇩🇪" },
  { code: "ITA", name: "Italiano", flag: "🇮🇹" },
  { code: "POR", name: "Português", flag: "🇵🇹" },
];

export default function SignUpPage3() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordRequirements, setPasswordRequirements] = useState([
    { text: "At least 8 characters", met: false },
    { text: "At least one number (0-9) or a symbol", met: false },
    { text: "Lowercase (a-z) and uppercase (A-Z)", met: false },
  ]);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const { toast, toasts, removeToast } = useToast();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const dropdownRef = React.useRef(null);

  const checkPasswordStrength = (password) => {
    const requirements = [
      { text: "At least 8 characters", met: password.length >= 8 },
      {
        text: "At least one number (0-9) or a symbol",
        met: /[\d\W]/.test(password),
      },
      {
        text: "Lowercase (a-z) and uppercase (A-Z)",
        met: /[a-z]/.test(password) && /[A-Z]/.test(password),
      },
    ];
    setPasswordRequirements(requirements);
  };

  const checkPasswordMatch = () => {
    if (
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
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

  // Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLanguageDropdown(false);
      }
    }
    if (showLanguageDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLanguageDropdown]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    return (
      formData.fullName.trim() !== "" &&
      formData.email.trim() !== "" &&
      passwordRequirements.every((req) => req.met) &&
      passwordsMatch &&
      formData.confirmPassword !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      toast({
        title: "Form Validation Error",
        description:
          "Please fill all fields correctly and ensure passwords match.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Account Created Successfully! 🎉",
      description: "Welcome to Easymail! Your account has been created.",
    });
  };

  const handleSocialLogin = (provider) => {
    toast({
      title: `${provider} Login`,
      description: `Redirecting to ${provider} authentication...`,
    });
  };

  return (
    <>
      <div className="gap-10 h-230 bg-blue-300 flex justify-center items-center flex-col relative max-h-screen">
        {/* Toast Container */}
        <div className="fixed  w-fit top-0 right-0 z-50 p-4 space-y-2">
          {toasts.map((toastItem) => (
            <Toast key={toastItem.id} toast={toastItem} onClose={removeToast} />
          ))}
        </div>

        <div className="flex h-[700px] w-[1400px] rounded-4xl shadow-lg overflow-hidden bg-white z-0">
          {/* Left side - Form */}
          <div className="flex flex-1 flex-col h-fill z-0 justify-center bg-white px-4 py-12  sm:px-6 w-180 lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div className="flex items-center justify-between gap-5">
                <button className="rounded-full p-2 hover:bg-gray-100">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 12H5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 19L5 12L12 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="text-sm text-gray-600">
                  Already member?{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Sign in
                  </a>
                </div>
              </div>

              <div className="mt-6 ">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                  Sign Up
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Secure Your Communications with Easymail
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-10">
                <div className="space-y-6">
                  {/* Language Selector - moved to top */}

                  {/* Full Name */}
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="mr-3 text-gray-400">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <Input
                        className="pl-0 border-0 border-b border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-blue-500"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                      />
                    </div>
                    {formData.fullName.trim() && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-green-500">
                        <Check size={20} />
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="mr-3 text-gray-400">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M22 6L12 13L2 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <Input
                        className="pl-0 border-0 border-b border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-blue-500"
                        placeholder="Email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                      />
                    </div>
                    {formData.email.includes("@") &&
                      formData.email.includes(".") && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-green-500">
                          <Check size={20} />
                        </div>
                      )}
                  </div>

                  {/* Password */}
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="mr-3 text-gray-400">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 11H5V21H19V11Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17 9V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <Input
                        className="pl-0 pr-10 border-0 border-b border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-blue-500"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) =>
                          handleInputChange("password", e.target.value)
                        }
                      />
                    </div>
                    <button
                      type="button"
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  {/* Password Requirements */}
                  <div className="space-y-2">
                    {passwordRequirements.map((requirement, index) => (
                      <div
                        key={index}
                        className={`flex items-center text-xs ${
                          requirement.met ? "text-green-500" : "text-gray-500"
                        }`}
                      >
                        {requirement.met ? (
                          <Check size={14} className="mr-2" />
                        ) : (
                          <div className="mr-2 text-gray-300">•</div>
                        )}
                        <span>{requirement.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Confirm Password */}
                  <div className="relative">
                    <div className="">
                      <div className="mr-3 text-gray-400">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 11H5V21H19V11Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17 9V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <Input
                        className={`pl-0 pr-10 border-0 border-b rounded-none focus-visible:ring-0 focus-visible:border-blue-500 ${
                          !passwordsMatch ? "border-red-500" : "border-gray-300"
                        }`}
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-Type Password"
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          handleInputChange("confirmPassword", e.target.value)
                        }
                      />
                    </div>
                    <button
                      type="button"
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>

                  {/* Password Match Indicator */}
                  {formData.confirmPassword && (
                    <div
                      className={`flex items-center text-xs ${
                        passwordsMatch ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {passwordsMatch ? (
                        <Check size={14} className="mr-2" />
                      ) : (
                        <div className="mr-2 text-red-500">✗</div>
                      )}
                      <span>
                        {passwordsMatch
                          ? "Passwords match"
                          : "Passwords do not match"}
                      </span>
                    </div>
                  )}

                  {/* Submit Button and Social Login */}
                  <div
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
                    style={{
                      zIndex: 10,
                      position: "relative",
                      background: "transparent",
                    }}
                  >
                    <Button
                      type="submit"
                      className="flex items-center justify-center gap-2 px-6 py-2 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-blue-600"
                      style={{
                        zIndex: 20,
                        position: "relative",
                        background: "#2563eb",
                      }}
                      disabled={!isFormValid()}
                    >
                      <span>Sign Up</span>
                      <ArrowRight size={16} />
                    </Button>

                    {/* Stylish Separator */}
                    <div className="flex items-center space-x-2 text-gray-500 text-sm self-center">
                      <hr className="w-6 border-t border-gray-300" />
                      <span>Or</span>
                      <hr className="w-6 border-t border-gray-300" />
                    </div>

                    {/* Social Buttons */}
                    <div className="flex space-x-3 self-center">
                      <button
                        type="button"
                        className="p-2 rounded-full border border-gray-300 hover:bg-blue-50 transition duration-300 transform hover:scale-105 shadow-sm"
                        onClick={() => handleSocialLogin("Facebook")}
                      >
                        <Facebook size={20} className="text-blue-600" />
                      </button>
                      <button
                        type="button"
                        className="p-2 rounded-full border border-gray-300 hover:bg-red-50 transition duration-300 transform hover:scale-105 shadow-sm"
                        onClick={() => handleSocialLogin("Google")}
                      >
                        {/* Google Icon */}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                            fill="#FFC107"
                          />
                          <path
                            d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z"
                            fill="#FF3D00"
                          />
                          <path
                            d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.001 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z"
                            fill="#4CAF50"
                          />
                          <path
                            d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                            fill="#1976D2"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="pt-12" ref={dropdownRef}>
                <div className="relative">
                  <button
                    type="button"
                    className="flex items-center text-sm font-medium hover:bg-gray-50 p-2 rounded-lg border border-transparent shadow"
                    onClick={() => setShowLanguageDropdown((prev) => !prev)}
                    style={{ background: "rgba(255,255,255,0.85)" }}
                  >
                    <span className="mr-2">{selectedLanguage.flag}</span>
                    <span className="mr-1">{selectedLanguage.code}</span>
                    <ChevronDown size={16} />
                  </button>
                  {showLanguageDropdown && (
                    <div
                      className="absolute right-45 bottom-full mb-2 z-10 bg-white rounded shadow w-48 border border-gray-200"
                      style={{ background: "rgba(255,255,255,0.97)" }}
                    >
                      {languages.map((language) => (
                        <div
                          key={language.code}
                          className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => {
                            setSelectedLanguage(language);
                            setShowLanguageDropdown(false);
                            toast({
                              title: "Language Changed",
                              description: `Language switched to ${language.name}`,
                            });
                          }}
                        >
                          <span className="mr-2">{language.flag}</span>
                          <span className="mr-2">{language.code}</span>
                          <span className="text-gray-500">{language.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Blue gradient with floating elements */}

          <div className="hidden lg:block lg:flex-1 relative  bg-gradient-to-br from-indigo-500 to-blue-400 z-0 overflow-visible ">
            {/* Cards and icons first */}

            {/* Logo next, above patterns */}
            <img
              src="Logo.png"
              alt=""
              className="z-160 absolute  left-80 -translate-x-1/2 w-190 h-190  object-contain drop-shadow-xl"
            />
            {/* <img
              src="Logo.png"
              alt=""
              className="z-160 absolute  left-5/6 top-4 -translate-x-1/2 w-32 h-32 object-contain drop-shadow-xl"
            /> */}

            {/* Background rotated layers */}
            <div className="absolute -top-50 -left-30 w-[250px] h-[350px] bg-indigo-700 rotate-[130deg] z-10 rounded-3xl"></div>
            <div className="absolute top-0 left-1/3 w-[150%] h-[150%] bg-blue-500 rotate-[8deg] z-20"></div>

            <div className="absolute top-3/4 right-1/4 w-[500px] h-[500px] bg-blue-600 rotate-[330deg] z-20 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </>
  );
}
