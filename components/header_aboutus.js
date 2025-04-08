import React, { useState } from "react";

const AboutPage = () => {
  const textContent = {
    excellence: "We strive for excellence in every aspect, ensuring top-notch quality and service.",
    honesty: "Integrity and transparency are at the core of our business practices.",
    support: "We provide unwavering support to our clients at every step.",
    vision: "Our vision is to innovate and lead the industry with sustainable solutions.",
    mission: "Our mission is to deliver quality products while maintaining environmental responsibility."
  };

  const [whyChooseText, setWhyChooseText] = useState(textContent.excellence);
  const [goalText, setGoalText] = useState(textContent.vision);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-green-50">
      {/* Navigation Header */}
      <header className="flex justify-between items-center py-6">
        <h1 className="text-2xl font-bold text-green-700">Green India</h1>
        <nav className="space-x-6">
          <a href="/" className="text-green-700 hover:text-green-900 font-semibold">Home</a>
          <a href="/ngos-connect" className="text-green-700 hover:text-green-900 font-semibold">NGOs Connect</a>
          <a href="/partner-with-us" className="text-green-700 hover:text-green-900 font-semibold">Partner With Us</a>
        </nav>
      </header>

      {/* Background Image with Overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-[60vh] bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/images/WhatsApp%20Image%202025-04-04%20at%2023.54.37_91b357a9.jpg')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(200,255,200,0.6)"
        }}
      ></div>

      <div className="relative z-10 py-12">
        {/* Who We Are Section */}
        <section className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-green-700">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum quaerat est, esse amet assumenda neque! Expedita iste tempore nam quis laudantium repellendus doloribus nostrum laboriosam, eos assumenda harum eligendi?
          </p>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestias corporis mollitia repellendus itaque optio sed unde a soluta cum!
          </p>
        </section>

        {/* About The Company Section */}
        <section className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-green-700">About The Company</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione esse officiis explicabo harum eius necessitatibus maxime. Molestiae porro illum culpa?
          </p>
        </section>

        {/* Why Choose Us & Our Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-green-500">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Why Choose Us?</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {['excellence', 'honesty', 'support'].map((key) => (
                <button
                  key={key}
                  onClick={() => setWhyChooseText(textContent[key])}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    whyChooseText === textContent[key]
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 hover:bg-green-100 text-gray-800'
                  }`}
                >
                  {key.toUpperCase()}
                </button>
              ))}
            </div>
            <p className="text-gray-700 text-base leading-relaxed">{whyChooseText}</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-green-500">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Our Goals</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {['vision', 'mission'].map((key) => (
                <button
                  key={key}
                  onClick={() => setGoalText(textContent[key])}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    goalText === textContent[key]
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 hover:bg-green-100 text-gray-800'
                  }`}
                >
                  {key.toUpperCase()}
                </button>
              ))}
            </div>
            <p className="text-gray-700 text-base leading-relaxed">{goalText}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-100 mt-20 p-10 w-full rounded-2xl shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* Navigation */}
          <div className="hover:bg-white p-4 rounded-xl transition-shadow shadow-sm hover:shadow-md">
            <h3 className="text-lg font-semibold text-green-700">Quick Links</h3>
            <ul className="mt-3 space-y-1 text-green-600 text-sm">
              <li><a href="/">Home</a></li>
              <li><a href="/ngos-connect">NGOs Connect</a></li>
              <li><a href="/partner-with-us">Partner With Us</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="hover:bg-white p-4 rounded-xl transition-shadow shadow-sm hover:shadow-md">
            <h3 className="text-lg font-semibold text-green-700">Green India Garbage Chutes</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae neque architecto id commodi doloribus? Excepturi.
            </p>
          </div>

          {/* Popular Products */}
          <div className="hover:bg-white p-4 rounded-xl transition-shadow shadow-sm hover:shadow-md">
            <h3 className="text-lg font-semibold text-green-700">Popular Products</h3>
            <ul className="mt-3 space-y-1 text-green-600 text-sm">
              <li><a href="#">Manual Garbage Collection System</a></li>
              <li><a href="#">Semi-auto Garbage Collection System</a></li>
              <li><a href="#">Fully-auto Garbage Collection System</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="hover:bg-white p-4 rounded-xl transition-shadow shadow-sm hover:shadow-md">
            <h3 className="text-lg font-semibold text-green-700">Get in Touch</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, quae laborum nihil sit minus ipsam vel dolor sapiente.
            </p>
            <p className="text-gray-600 mt-2 text-sm">Customer Support: <a href="tel:+91111187" className="text-green-600">+91 98 11187</a></p>
            <p className="text-gray-600 text-sm">Office: <a href="tel:+91747878" className="text-green-600">+91 7847878</a></p>
            <p className="text-gray-600 text-sm">Email: <a href="mailto:lorem@gmail.com" className="text-green-600">lorem@gmail.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;