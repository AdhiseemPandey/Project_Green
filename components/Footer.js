import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white pt-16 pb-8 shadow-2xl overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-green-400 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-green-500 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <svg className="w-8 h-8 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <h3 className="text-2xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-white">
                Sustainable Earth
              </h3>
            </div>
            <p className="text-green-100 text-opacity-90 leading-relaxed">
              "Unleashing Sustainability, the Thanos Way—Half Measures Aren't Enough."
            </p>
            <div className="flex space-x-5">
              {[
                { icon: 'facebook', color: 'hover:text-blue-400' },
                { icon: 'twitter', color: 'hover:text-blue-300' },
                { icon: 'instagram', color: 'hover:text-pink-400' },
                { icon: 'linkedin', color: 'hover:text-blue-500' }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className={`text-green-200 ${social.color} transition-all duration-300 transform hover:-translate-y-1`}
                  aria-label={social.icon}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon === 'facebook' && (
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    )}
                    {social.icon === 'twitter' && (
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    )}
                    {social.icon === 'instagram' && (
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    )}
                    {social.icon === 'linkedin' && (
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
            
            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-green-300 uppercase tracking-wider mb-3">Stay Updated</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-lg bg-green-800 bg-opacity-50 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-r-lg transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-serif mb-6 pb-2 border-b border-green-700 inline-block">Explore</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Events', 'Webinars', 'NGO Connect', 'Success Stories'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-green-100 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{item}</span>
                    <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold font-serif mb-6 pb-2 border-b border-green-700 inline-block">Resources</h3>
            <ul className="space-y-3">
              {['Blog', 'Sustainability Guide', 'Volunteer', 'Donate', 'Partner With Us', 'Research Papers'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-green-100 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{item}</span>
                    <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold font-serif mb-6 pb-2 border-b border-green-700 inline-block">Contact Us</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start group">
                <div className="p-2 bg-green-700 rounded-lg mr-4 group-hover:bg-green-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-green-100 group-hover:text-white transition-colors duration-300">
                  123 Green Avenue<br />
                  Eco City, Earth 12345
                </span>
              </div>
              
              <div className="flex items-center group">
                <div className="p-2 bg-green-700 rounded-lg mr-4 group-hover:bg-green-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+11234567890" className="text-green-100 hover:text-white transition-colors duration-300">
                  +1 (123) 456-7890
                </a>
              </div>
              
              <div className="flex items-center group">
                <div className="p-2 bg-green-700 rounded-lg mr-4 group-hover:bg-green-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@sustainableearth.com" className="text-green-100 hover:text-white transition-colors duration-300">
                  info@sustainableearth.com
                </a>
              </div>
              
              {/* Contact Button */}
              <div className="pt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center px-5 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Get In Touch
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-600 border-opacity-50 my-8 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-800 px-4">
            <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-200 text-sm mb-4 md:mb-0 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            &copy; {new Date().getFullYear()} Sustainable Earth. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-green-200 hover:text-white text-sm transition-colors duration-300 hover:underline"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;