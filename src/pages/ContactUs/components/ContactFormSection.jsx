import React, { useState } from "react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
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
            <p className="text-lg text-gray-900">info.noeltanada.com</p>
          </div>
        </div>

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
              />
            </div>
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
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="px-12 py-4 bg-black text-white font-semibold text-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
