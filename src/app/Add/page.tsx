"use client";
import React, { useState, useEffect } from "react";
import { AlertCircle, CheckCircle, Loader2, XCircle, Plus, Tag, Upload, Phone } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  category: "general" | "technical" | "support" | "feedback";
  priority: "low" | "medium" | "high";
  attachments: File[];
  tags: string[];
}

interface FormErrors {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    category: "general",
    priority: "medium",
    attachments: [],
    tags: []
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tagInput, setTagInput] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const savedDraft = localStorage.getItem("formDraft");
    if (savedDraft) {
      setFormData(JSON.parse(savedDraft));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formDraft", JSON.stringify(formData));
  }, [formData]);

  const validateForm = (): boolean => {
    const newErrors = {
      name: formData.name.length < 3 ? "Name must be at least 3 characters" : "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "Please enter a valid email" : "",
      phone: !/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phone) ? "Please enter valid phone number" : "",
      message: formData.message.length < 10 ? "Message must be at least 10 characters" : ""
    };

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === "");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    let formatted = '';
    
    if (value.length > 0) formatted = `(${value.substring(0, 3)}`;
    if (value.length >= 4) formatted += `) ${value.substring(3, 6)}`;
    if (value.length >= 7) formatted += `-${value.substring(6, 10)}`;

    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handleTagAdd = () => {
    if (tagInput && !formData.tags.includes(tagInput)) {
      setFormData(prev => ({ ...prev, tags: [...prev.tags, tagInput] }));
      setTagInput("");
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData(prev => ({ ...prev, attachments: [...prev.attachments, ...files] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    localStorage.removeItem("formDraft");
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      category: "general",
      priority: "medium",
      attachments: [],
      tags: []
    });

    setIsLoading(false);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center p-4 animate-gradient-x">
      <div className="w-full max-w-2xl bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl p-8 transition-all duration-500 hover:shadow-3xl border border-white/30">
        <h1 className="text-4xl font-bold text-white mb-8 text-center animate-fade-in-down">
          Submit Your Inquiry
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                className="w-full py-3 px-4 bg-white/20 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70 transition-all"
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
              {errors.name && (
                <div className="absolute -bottom-5 left-0 text-red-300 text-sm flex items-center animate-shake">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.name}
                </div>
              )}
            </div>

            <div className="relative">
              <div className="flex items-center bg-white/20 rounded-lg border border-white/30 focus-within:ring-2 focus-within:ring-white/50">
                <Phone className="w-5 h-5 ml-3 text-white/80" />
                <input
                  className="w-full py-3 px-3 bg-transparent focus:outline-none placeholder-white/70 text-white"
                  type="text"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  maxLength={14}
                />
              </div>
              {errors.phone && (
                <div className="absolute -bottom-5 left-0 text-red-300 text-sm flex items-center animate-shake">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.phone}
                </div>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center bg-white/20 rounded-lg border border-white/30 focus-within:ring-2 focus-within:ring-white/50">
              <input
                className="w-full py-3 px-4 bg-transparent focus:outline-none placeholder-white/70 text-white"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
              {errors.email && (
                <div className="absolute -bottom-5 left-0 text-red-300 text-sm flex items-center animate-shake">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              className="w-full py-3 px-4 bg-white/20 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white appearance-none"
              value={formData.category}
              onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as any }))}
            >
              <option value="general" className="bg-white/10">General Inquiry</option>
              <option value="technical" className="bg-white/10">Technical Support</option>
              <option value="support" className="bg-white/10">Customer Support</option>
              <option value="feedback" className="bg-white/10">Feedback</option>
            </select>

            <select
              className="w-full py-3 px-4 bg-white/20 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
              value={formData.priority}
              onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value as any }))}
            >
              <option value="low" className="bg-white/10">Low Priority</option>
              <option value="medium" className="bg-white/10">Medium Priority</option>
              <option value="high" className="bg-white/10">High Priority</option>
            </select>
          </div>

          <div className="relative">
            <textarea
              className="w-full py-3 px-4 bg-white/20 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70 min-h-[150px] transition-all"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            />
            <div className="absolute bottom-2 right-2 text-white/70 text-sm">
              {formData.message.length}/500
            </div>
            {errors.message && (
              <div className="absolute -bottom-5 left-0 text-red-300 text-sm flex items-center animate-shake">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.message}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                placeholder="Add tags"
                className="flex-1 py-2 px-3 bg-white/20 rounded-lg border border-white/30 text-white placeholder-white/70"
                onKeyPress={(e) => e.key === 'Enter' && handleTagAdd()}
              />
              <button
                type="button"
                onClick={handleTagAdd}
                className="p-2 bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-colors"
              >
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center px-3 py-1 bg-white/20 text-white rounded-full text-sm"
                >
                  <Tag className="w-4 h-4 mr-1" />
                  {tag}
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      tags: prev.tags.filter(t => t !== tag)
                    }))}
                    className="ml-2 hover:text-white/70"
                  >
                    <XCircle className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <label className="flex flex-col items-center justify-center w-full py-6 border-2 border-dashed border-white/30 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
              <Upload className="w-8 h-8 text-white mb-2" />
              <span className="text-white text-center">
                Drag & drop files or click to upload
                <br />
                <span className="text-sm text-white/70">Max 5 files (10MB each)</span>
              </span>
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                accept=".pdf,.doc,.docx,.png,.jpg"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {formData.attachments.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center px-3 py-1 bg-white/20 text-white rounded-full text-sm"
                >
                  <span className="mr-2">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      attachments: prev.attachments.filter((_, i) => i !== index)
                    }))}
                    className="hover:text-white/70"
                  >
                    <XCircle className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-white/30 hover:bg-white/40 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Submit Inquiry</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  message: "",
                  category: "general",
                  priority: "medium",
                  attachments: [],
                  tags: []
                });
                localStorage.removeItem("formDraft");
              }}
              className="px-6 bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg transition-colors"
            >
              Reset
            </button>
          </div>
        </form>

        {isSubmitted && (
          <div className="fixed top-4 right-4 bg-green-500/90 backdrop-blur-sm text-white px-6 py-3 rounded-lg shadow-xl flex items-center space-x-2 animate-toast-slide">
            <CheckCircle className="w-5 h-5" />
            <span>Submission successful!</span>
            <button
              onClick={() => setIsSubmitted(false)}
              className="ml-4 hover:text-white/80"
            >
              <XCircle className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
