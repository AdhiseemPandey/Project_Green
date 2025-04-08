import React from "react";
import { NavLink } from "react-router-dom";

const SupportPage = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-green-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-green-700">Support</h1>
        <NavLink
          to="/"
          className="text-green-700 border border-green-600 px-4 py-2 rounded-full hover:bg-green-100 transition"
        >
          Home
        </NavLink>
      </div>

      {/* Support Overview */}
      <section className="mb-10">
        <p className="text-lg text-gray-700">
          We're here to help! Whether you're a volunteer, NGO partner, or someone curious about our mission,
          our support team is ready to assist you.
        </p>
      </section>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Contact Us</h2>
          <p className="text-gray-700">Email: <a href="mailto:support@connectingngo.org" className="text-green-600">support@connectingngo.org</a></p>
          <p className="text-gray-700 mt-2">Phone: <a href="tel:+919999888877" className="text-green-600">+91 99998 88877</a></p>
          <p className="text-gray-700 mt-2">Hours: Monday - Friday, 9AM - 6PM</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Help Topics</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>How to register as a volunteer</li>
            <li>Partnering your NGO with us</li>
            <li>Donation process & queries</li>
            <li>Event & project collaboration</li>
          </ul>
        </div>
      </div>

      {/* Form (UI only) */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Send Us a Message</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupportPage;
