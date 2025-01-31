"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Loader2, Eye, EyeOff, Check } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  Num: string;
  password: string;
  terms: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  Num?: string;
  password?: string;
  terms?: string;
}

const Connect: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    Num: "",
    password: "",
    terms: false,
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData) as FormData;
        setFormData(parsedData);
      } catch (error) {
        console.error("Error parsing saved data:", error);
      }
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.Num.match(/^\d{10}$/)) {
      newErrors.Num = "Please enter a valid 10-digit number";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms and conditions";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      localStorage.setItem("userData", JSON.stringify(formData));
      setIsSubmitted(true);
      setFormData({ name: "", email: "", Num: "", password: "", terms: false });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4 animate-gradient">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl p-8 relative overflow-hidden border border-white/10">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Connect With Us
            </h1>
            <p className="text-gray-600">We'd love to hear from you!</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                className={`w-full py-3 px-12 bg-gray-50 rounded-lg border ${
                  errors.name ? "border-red-500" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300`}
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                className={`w-full py-3 px-12 bg-gray-50 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300`}
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            {/* Phone Field */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                className={`w-full py-3 px-12 bg-gray-50 rounded-lg border ${
                  errors.Num ? "border-red-500" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300`}
                type="tel"
                name="Num"
                placeholder="Phone Number"
                value={formData.Num}
                onChange={handleChange}
              />
              {errors.Num && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.Num}
                </motion.p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
              <input
                className={`w-full py-3 px-12 bg-gray-50 rounded-lg border ${
                  errors.password ? "border-red-500" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300`}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.password}
                </motion.p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="hidden"
                id="terms"
              />
              <label
                htmlFor="terms"
                className={`w-5 h-5 border-2 rounded flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  formData.terms
                    ? "bg-indigo-600 border-indigo-600"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                {formData.terms && <Check className="text-white" size={16} />}
              </label>
              <span className="text-gray-600 text-sm">
                I agree to the terms and conditions
              </span>
            </div>
            {errors.terms && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm"
              >
                {errors.terms}
              </motion.p>
            )}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Processing...
                </>
              ) : (
                "Submit"
              )}
            </motion.button>
          </form>

          {/* Success Message */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
            >
              <p className="font-semibold">Thanks for connecting!</p>
              <p className="text-sm">We'll be in touch soon.</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Connect;
