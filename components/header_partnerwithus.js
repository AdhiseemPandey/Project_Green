import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { NavLink } from 'react-router';

const data = [
  { name: "NGOs Partnered", value: 40 },
  { name: "Projects Completed", value: 25 },
  { name: "Waste Recycled", value: 20 },
  { name: "Cities Impacted", value: 15 },
];

const COLORS = ["#34D399", "#60A5FA", "#FBBF24", "#A78BFA"];

const PartnerWith = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-200 overflow-x-hidden">
      {/* Navigation Header */}
      <header className="bg-green-300 shadow-lg py-5 px-10 flex justify-between items-center sticky top-0 z-50 w-full">
        <h1 className="text-3xl font-extrabold text-green-900 tracking-wide">🌱 Green India</h1>
        <nav className="space-x-8 text-green-900 font-semibold">
          <NavLink to = "/" className="hover:text-green-600 transition">Home</NavLink>
          <NavLink to = "/AboutUs" className="hover:text-green-600 transition">About Us</NavLink>
          <NavLink to = "/Projects" className="hover:text-green-600 transition">Projects</NavLink>
          <NavLink to = "/PartnerWithUs" className="hover:text-green-600 transition">Contact</NavLink>
        </nav>
      </header>

      {/* Header Section */}
      <section className="text-center max-w-3xl mx-auto mb-10 p-10">
        <h1 className="text-5xl font-bold text-green-900 mb-4 drop-shadow-sm">Partner With Us</h1>
        <p className="text-gray-800 text-xl leading-relaxed">
          Join hands with us to build a cleaner and greener India. We welcome partnerships with NGOs,
          communities, and individuals who share our vision of sustainable waste management.
        </p>
      </section>

      {/* Divider */}
      <div className="border-t-2 border-gray-400 w-4/5 mx-auto mb-10"></div>

      {/* Statistics Section */}
      <section className="max-w-6xl mx-auto mb-20 px-6">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-8">📊 Our Impact</h2>
        <div className="bg-green-50 rounded-3xl shadow-xl p-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-black text-lg md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Making a Difference</h3>
            <p className="mb-3">We collaborate with dedicated partners to make real impact across various regions of India.</p>
            <p className="mb-3">Our reach and commitment grow stronger every year — let's change the future together!</p>
          </div>
          <div className="border-l-2 border-gray-300 h-48 hidden md:block mx-6"></div>
          <div className="w-full md:w-1/2">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name }) => name}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto px-6">
        <div className="bg-green-50 shadow-xl rounded-3xl p-8 border-l-8 border-green-500 hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold text-green-800 mb-3">🌿 Aligned Values</h3>
          <p className="text-gray-700 text-lg">
            We work with like-minded partners who believe in environmental sustainability.
          </p>
        </div>
        <div className="bg-blue-50 shadow-xl rounded-3xl p-8 border-l-8 border-blue-500 hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold text-blue-800 mb-3">🌐 Strong Network</h3>
          <p className="text-gray-700 text-lg">
            Collaborate with our network of industry experts and dedicated professionals.
          </p>
        </div>
        <div className="bg-purple-50 shadow-xl rounded-3xl p-8 border-l-8 border-purple-500 hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold text-purple-800 mb-3">🚀 Impactful Growth</h3>
          <p className="text-gray-700 text-lg">
            Be part of impactful projects that create real change at the grassroots level.
          </p>
        </div>
        <div className="bg-yellow-50 shadow-xl rounded-3xl p-8 border-l-8 border-yellow-500 hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold text-yellow-800 mb-3">💡 Innovation</h3>
          <p className="text-gray-700 text-lg">
            Work together to bring fresh ideas and technology into sustainable practices.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-green-200 rounded-3xl shadow-2xl py-12 px-8 max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-8">Let's Collaborate</h2>
        <form
          action="https://getform.io/f/bwnqmoza"
          method="POST"
          encType="multipart/form-data"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-lg"
        >
          <input
            type="hidden"
            name="_redirect"
            value="https://yourdomain.com/thank-you"
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 col-span-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 col-span-2"
          ></textarea>
          <input
            type="file"
            name="attachment"
            accept="image/*"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 col-span-2"
          />
          <button
            type="submit"
            className="bg-green-500 text-black py-3 px-6 rounded-lg hover:bg-green-600 transition font-semibold col-span-2 shadow-md"
          >
            📩 Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default PartnerWith;