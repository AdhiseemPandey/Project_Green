import React from "react";
import { NavLink } from "react-router-dom";

const ExploreMorePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden box-border w-full">
      {/* Header */}
      <header className="bg-green-400 text-white px-6 py-4 shadow-md w-full">
        <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Eco Earth Logo" className="h-10 w-10 object-contain" />
            <NavLink to = "/"><span className="font-bold text-xl tracking-wide">HACERTHON</span></NavLink>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <NavLink to="/AboutUs" className="hover:text-gray-200 text-white">About</NavLink>
            <NavLink to="/PartnerWithUs" className="hover:text-gray-200 text-white">Partner With Us</NavLink>
            <NavLink to="/NGOsConnect" className="hover:text-gray-200 text-white">NGOs Connect</NavLink>
            <NavLink to="/" className="border border-white text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition">
              Register/Sign In
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Heading Section */}
      <section className="bg-white py-12 px-4 shadow-sm w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h1><NavLink to = "/ExploreMore">
                    <span className="inline-block bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-full text-2xl md:text-4xl font-bold shadow-sm hover:bg-blue-50 transition">
                     Explore More
                    </span>
              </NavLink>
            
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Discover how you can contribute to a cleaner and greener future through our initiatives.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <main className="flex-grow px-4 py-8 w-full">
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Recycling Programs",
              desc: "Learn about our city-wide recycling initiatives and how you can participate.",
              image: "/images/recycling.jpg"
            },
            {
              title: "Green Partnerships",
              desc: "Collaborate with us or support local eco-friendly businesses.",
              image: "/images/partnership.jpg"
            },
            {
              title: "Educational Resources",
              desc: "Workshops, webinars, and more to educate people on waste management.",
              image: "/images/education.jpg"
            },
            {
              title: "Smart Collection Systems",
              desc: "Discover our advanced garbage chute technologies for smarter cities.",
              image: "/images/tech.jpg"
            },
            {
              title: "Volunteer Opportunities",
              desc: "Join our green army and make a difference in your neighborhood.",
              image: "/images/volunteer.jpg"
            },
            {
              title: "Sustainability Tips",
              desc: "Simple steps to reduce your carbon footprint every day.",
              image: "/images/tips.jpg"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-300 p-8 w-full rounded-t-2xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold">Green India Garbage Chutes</h3>
            <p className="text-gray-600 mt-2">
              Transforming waste management for a cleaner, greener India.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 text-black">
              <li><NavLink to = "/AboutUs" className="hover:text-gray-800">About Us</NavLink></li>
              <li><NavLink to = "/FAQs" className="hover:text-gray-800">FAQs</NavLink></li>
              <li><NavLink to = "/Support" className="hover:text-gray-800">Support</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-gray-600 mt-2">
              Phone: <a href="tel:+91111187" className="text-black hover:text-gray-800">+91 98 11187</a>
            </p>
            <p className="text-gray-600">
              Email: <a href="mailto:lorem@gmail.com" className="text-black hover:text-gray-800">lorem@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExploreMorePage;