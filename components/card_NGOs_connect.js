import React, { useState } from 'react';

const NGOsConnect = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sample NGOs data
  const ngos = [
    {
      id: 1,
      name: 'Green Earth Initiative',
      category: 'Environment',
      description: 'Promoting sustainable practices and environmental conservation',
      logo: '🌱',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Education for All',
      category: 'Education',
      description: 'Providing quality education to underprivileged children',
      logo: '📚',
      rating: 4.6,
    },
    {
      id: 3,
      name: 'Health First Foundation',
      category: 'Healthcare',
      description: 'Improving healthcare access in rural areas',
      logo: '🏥',
      rating: 4.9,
    },
    {
      id: 4,
      name: 'Clean Water Project',
      category: 'Environment',
      description: 'Bringing clean water solutions to communities in need',
      logo: '💧',
      rating: 4.7,
    },
  ];

  const filteredNgos = ngos.filter(ngo =>
    ngo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ngo.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">🌍 NGOs Connect</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => setActiveTab('home')}
              className={`px-3 py-2 rounded-md ${activeTab === 'home' ? 'bg-green-800 font-semibold' : 'hover:bg-green-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveTab('ngos')}
              className={`px-3 py-2 rounded-md ${activeTab === 'ngos' ? 'bg-green-800 font-semibold' : 'hover:bg-green-600'}`}
            >
              NGOs Directory
            </button>
            <button 
              onClick={() => setActiveTab('events')}
              className={`px-3 py-2 rounded-md ${activeTab === 'events' ? 'bg-green-800 font-semibold' : 'hover:bg-green-600'}`}
            >
              Events
            </button>
            <button 
              onClick={() => setActiveTab('about')}
              className={`px-3 py-2 rounded-md ${activeTab === 'about' ? 'bg-green-800 font-semibold' : 'hover:bg-green-600'}`}
            >
              About Us
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-600 pb-4 px-4">
            <button 
              onClick={() => {setActiveTab('home'); setIsMenuOpen(false);}}
              className={`block w-full text-left px-3 py-2 rounded-md ${activeTab === 'home' ? 'bg-green-700 font-semibold' : 'hover:bg-green-500'}`}
            >
              Home
            </button>
            <button 
              onClick={() => {setActiveTab('ngos'); setIsMenuOpen(false);}}
              className={`block w-full text-left px-3 py-2 rounded-md ${activeTab === 'ngos' ? 'bg-green-700 font-semibold' : 'hover:bg-green-500'}`}
            >
              NGOs Directory
            </button>
            <button 
              onClick={() => {setActiveTab('events'); setIsMenuOpen(false);}}
              className={`block w-full text-left px-3 py-2 rounded-md ${activeTab === 'events' ? 'bg-green-700 font-semibold' : 'hover:bg-green-500'}`}
            >
              Events
            </button>
            <button 
              onClick={() => {setActiveTab('about'); setIsMenuOpen(false);}}
              className={`block w-full text-left px-3 py-2 rounded-md ${activeTab === 'about' ? 'bg-green-700 font-semibold' : 'hover:bg-green-500'}`}
            >
              About Us
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search NGOs by name or category..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2 top-2 bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700">
              Search
            </button>
          </div>
        </div>

        {/* Home Tab */}
        {activeTab === 'home' && (
          <div>
            <section className="mb-12 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Welcome to NGOs Connect</h2>
              <p className="text-gray-700 mb-4">
                Connecting NGOs, volunteers, and donors to create positive change in communities worldwide.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Find NGOs</h3>
                  <p className="text-gray-600">
                    Discover and connect with NGOs working in various sectors like education, environment, and healthcare.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Volunteer</h3>
                  <p className="text-gray-600">
                    Find volunteering opportunities that match your skills and interests.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">Donate</h3>
                  <p className="text-gray-600">
                    Support causes you care about through secure donations.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-green-800 mb-6">Featured NGOs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ngos.slice(0, 4).map(ngo => (
                  <div key={ngo.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-green-100 p-4 text-4xl text-center">{ngo.logo}</div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1">{ngo.name}</h3>
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                        {ngo.category}
                      </span>
                      <p className="text-gray-600 text-sm mb-3">{ngo.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-yellow-500">{"★".repeat(Math.floor(ngo.rating))}{"☆".repeat(5 - Math.floor(ngo.rating))}</span>
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* NGOs Directory Tab */}
        {activeTab === 'ngos' && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-green-800">NGOs Directory</h2>
              <p className="text-gray-600">Browse through our network of trusted NGOs</p>
            </div>
            
            <div className="divide-y">
              {filteredNgos.map(ngo => (
                <div key={ngo.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-4 rounded-full text-2xl mr-4">{ngo.logo}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg">{ngo.name}</h3>
                          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                            {ngo.category}
                          </span>
                        </div>
                        <span className="text-yellow-500 text-sm">
                          {ngo.rating.toFixed(1)} ★
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{ngo.description}</p>
                      <div className="flex space-x-3">
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium border border-green-600 hover:border-green-800 px-3 py-1 rounded-full">
                          View Profile
                        </button>
                        <button className="text-white bg-green-600 hover:bg-green-700 text-sm font-medium px-3 py-1 rounded-full">
                          Contact
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Upcoming Events</h2>
            
            <div className="space-y-6">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-green-600 text-white p-4">
                  <h3 className="font-bold text-lg">Sustainable Development Conference</h3>
                  <p className="text-sm opacity-90">Hosted by Green Earth Initiative</p>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-4 mb-3">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">June 15, 2023 | 10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">Virtual Event</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Join us for a day of discussions and workshops on sustainable development practices with industry leaders and environmental activists.
                  </p>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                    Register Now
                  </button>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="font-bold text-lg">Education for All Fundraiser</h3>
                  <p className="text-sm opacity-90">Hosted by Education for All</p>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-4 mb-3">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">July 2, 2023 | 6:00 PM - 9:00 PM</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">Grand Ballroom, City Convention Center</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    An evening of inspiration and giving to support our mission of providing quality education to underprivileged children worldwide.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                    Get Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* About Tab */}
        {activeTab === 'about' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-6">About NGOs Connect</h2>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                NGOs Connect is a platform dedicated to bridging the gap between non-governmental organizations (NGOs), volunteers, and donors. Our mission is to create a network that fosters collaboration and amplifies the impact of social initiatives worldwide.
              </p>
              
              <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                We envision a world where every NGO has the resources and support it needs to make a difference, where volunteers can easily find meaningful opportunities, and where donors can transparently support causes they care about.
              </p>
              
              <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Our Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="border rounded-lg p-4 text-center">
                  <div className="bg-gray-200 rounded-full w-24 h-24 mx-auto mb-3"></div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Founder & CEO</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <div className="bg-gray-200 rounded-full w-24 h-24 mx-auto mb-3"></div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-gray-600 text-sm">Tech Lead</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <div className="bg-gray-200 rounded-full w-24 h-24 mx-auto mb-3"></div>
                  <h4 className="font-bold">Priya Patel</h4>
                  <p className="text-gray-600 text-sm">Community Manager</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Contact Us</h3>
              <form className="mt-4 space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Message</label>
                  <textarea rows="4" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">NGOs Connect</h3>
              <p className="text-gray-400 text-sm">
                Connecting organizations and individuals to create positive change in the world.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">NGOs Directory</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Subscribe to our newsletter for updates
              </p>
              <div className="mt-2 flex">
                <input type="email" placeholder="Your email" className="px-3 py-2 text-gray-800 rounded-l-md text-sm w-full" />
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-md text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} NGOs Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NGOsConnect;