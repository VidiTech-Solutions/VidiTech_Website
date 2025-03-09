import React, { useState } from "react";
import { motion } from "framer-motion";
import { ContactFormData } from "../data/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    interest: "",
    budget: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitSuccess(false);
    setSubmitError(null);
    setIsLoading(true);

    try {
      console.log("Submitting form data:", formData);

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);

      const contentType = response.headers.get("content-type");
      let result;

      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
        console.log("Response data:", result);
      } else {
        const text = await response.text();
        console.log("Non-JSON response:", text);
        throw new Error("Received non-JSON response from server");
      }

      if (response.ok && result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          interest: "",
          budget: "",
          message: "",
        });
      } else {
        setSubmitError(
          result.message || `Server responded with status: ${response.status}`
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        error instanceof Error
          ? `Error: ${error.message}`
          : "Failed to connect to our server. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white py-16 px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="py-8">
          <h1 className="w-full mx-auto max-w-[42rem] font-extrabold lg:text-5xl text-4xl">
            We'd love to hear from you.{" "}
            <motion.span
              className="text-appPurple mt-1"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Get in Touch
            </motion.span>{" "}
            👋
          </h1>
        </div>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto px-6 -mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      >
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          {submitSuccess ? (
            <motion.div
              className="text-center py-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Message Sent!
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for reaching out. We'll be in touch with you shortly.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="text-appPurple hover:text-appPurple/80 font-medium"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {submitError}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-appPurple focus:border-transparent"
                    placeholder="John Doe"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-appPurple focus:border-transparent"
                    placeholder="john@company.com"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium mb-2"
                  >
                    Service Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-appPurple focus:border-transparent"
                    required
                    disabled={isLoading}
                  >
                    <option value="" disabled>
                      Choose a service
                    </option>
                    <option value="Website Development">
                      Website Development
                    </option>
                    <option value="Branding">Branding</option>
                    <option value="SEO">SEO</option>
                    <option value="Design">Design</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-appPurple focus:border-transparent"
                    required
                    disabled={isLoading}
                  >
                    <option value="" disabled>
                      Select budget
                    </option>
                    <option value="200-500 USD">$200 - $500</option>
                    <option value="500-1000 USD">$500 - $1,000</option>
                    <option value="1000+ USD">$1,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-appPurple focus:border-transparent"
                  placeholder="Share your project details, goals, or questions..."
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="flex items-center justify-between">
                <motion.button
                  type="submit"
                  className={`bg-appPurple text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center ${
                    isLoading
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:bg-appPurple/90"
                  }`}
                  whileHover={{ scale: isLoading ? 1 : 1.05 }}
                  whileTap={{ scale: isLoading ? 1 : 0.95 }}
                  disabled={isLoading}
                >
                  {isLoading && (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                  {isLoading ? "Sending..." : "Send Message"}
                </motion.button>

                <a
                  href="https://calendly.com/viditechvd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-appPurple hover:text-appPurple/80 transition-colors"
                >
                  <motion.span whileHover={{ scale: 1.2 }} className="relative">
                    <span className="absolute inset-0 rounded-full bg-appPurple/20 animate-ping"></span>
                    <Icon
                      icon="simple-icons:calendly"
                      className="w-5 h-5 relative"
                    />
                  </motion.span>
                  <span className="font-medium">Schedule a Call</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </motion.div>

      <div className="mt-12 text-center text-gray-600">
        <p className="mb-2">or reach us directly at</p>
        <a
          href="mailto:info@viditech.online"
          className="text-appPurple font-medium hover:text-appPurple/80"
        >
          info@viditech.online{" "}
        </a>
      </div>
    </motion.div>
  );
};

export default ContactPage;
