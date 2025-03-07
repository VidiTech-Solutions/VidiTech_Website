import React, { useState } from "react";
import { motion } from "framer-motion";
import { ContactFormData } from "../data/data";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    interest: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
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
          <form onSubmit={handleSubmit} className="space-y-8">
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
              />
            </div>

            <div className="flex items-center justify-between">
              <motion.button
                type="submit"
                className="bg-appPurple text-white px-8 py-3 rounded-lg font-medium hover:bg-appPurple/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>

              <Link
                to="https://calendly.com/viditechvd"
                target="_blank"
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
              </Link>
            </div>
          </form>
        </div>
      </motion.div>

      <div className="mt-12 text-center text-gray-600">
        <p className="mb-2">or reach us directly at</p>
        <a
          href="mailto:Viditechvd@gmail.com"
          className="text-appPurple font-medium hover:text-appPurple/80"
        >
          Viditechvd@gmail.com{" "}
        </a>
      </div>
    </motion.div>
  );
};

export default ContactPage;
