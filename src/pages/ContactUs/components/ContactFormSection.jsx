import React, { useState } from "react";
import apiService from "../../../services/ApiService.js";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await apiService.sendContactEmail(formData);
      
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gray-900 text-left">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Drop us a message via the contact form below, and we'll get back to
            you as soon as possible.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Phone Number
            </h3>
            <p className="text-lg text-gray-900">+63 995 324 3922</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Email Address
            </h3>
            <p className="text-lg text-gray-900">info.alphaddsi@gmail.com</p>
          </div>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            Thank you for your message! We'll get back to you as soon as possible.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-300 rounded-none bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-300 rounded-none bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-4 border border-gray-300 rounded-none bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows="8"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-4 border border-gray-300 rounded-none bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors resize-none"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-12 py-4 font-semibold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                isSubmitting
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
