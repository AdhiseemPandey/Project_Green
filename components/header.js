//first div : sign in logo
//second div : search city
//third div : boxes
import SustainableCalendar from "./card_events"
import { NavLink } from "react-router-dom";
export default function Header(){
    return (
        <header className="bg-gradient-to-r from-green-600 to-green-800 font-serif shadow-lg">
            
            {/* Top Navigation Bar */}
            <div className="flex justify-between items-center container mx-auto px-4 py-4">
                <div className="flex items-center">
                    <img className="w-40 h-auto" src="/earth.jpg" alt="Eco Earth Logo" />
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                    <NavLink to="#" className="text-white hover:text-green-200 transition-colors duration-300 font-medium">About</NavLink>
                    <NavLink to="/NGOsConnect" className="text-white hover:text-green-200 transition-colors duration-300 font-medium">NGOs Connect</NavLink>
                    <NavLink to="/PartnerWithUs" className="text-white hover:text-green-200 transition-colors duration-300 font-medium">Partner With Us</NavLink>
                    <NavLink to="#" className="bg-white text-green-700 hover:bg-green-100 py-2 px-4 rounded-full font-medium transition-colors duration-300">Explore More</NavLink>
                    <NavLink to="#" className="bg-green-700 text-white hover:bg-green-600 py-2 px-4 rounded-full font-medium transition-colors duration-300 border border-white">Register/Sign In</NavLink>
                </nav>
            </div>

            {/* Hero Section */}
            <div className="relative overflow-hidden py-12 md:py-20">
                <div className="absolute inset-0 flex justify-between z-0">
                    <img className="h-full w-auto opacity-20" src="https://www.bing.com/images/search?view=detailV2&ccid=aIlS2QYL&id=0C44EE9BF2DBC70E71CAC76ABE9F8E3158F1240A&thid=OIP.aIlS2QYLsQy06lRkb7dkIgHaGW&mediaurl=https%3a%2f%2fas2.ftcdn.net%2fv2%2fjpg%2f03%2f92%2f48%2f01%2f1000_F_392480192_aL6Gcc3Jo6NoJnvfuX4SdGsTB1HFeiQ4.jpg&exph=857&expw=1000&q=half+earth+green&simid=608042893423226421&FORM=IRPRST&ck=A93CCFE618B11786116C1930E7870B68&selectedIndex=72&itb=0" alt="Decorative leaf" />
                    <img className="h-full w-auto opacity-20" src="https://www.bing.com/images/search?view=detailV2&ccid=aIlS2QYL&id=0C44EE9BF2DBC70E71CAC76ABE9F8E3158F1240A&thid=OIP.aIlS2QYLsQy06lRkb7dkIgHaGW&mediaurl=https%3a%2f%2fas2.ftcdn.net%2fv2%2fjpg%2f03%2f92%2f48%2f01%2f1000_F_392480192_aL6Gcc3Jo6NoJnvfuX4SdGsTB1HFeiQ4.jpg&exph=857&expw=1000&q=half+earth+green&simid=608042893423226421&FORM=IRPRST&ck=A93CCFE618B11786116C1930E7870B68&selectedIndex=72&itb=0" alt="Decorative leaf" />
                </div>
                
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        "Unleashing Sustainability, the Thanos Way—<br className="hidden md:block" />Half Measures Aren't Enough."<br />
                        <span className="text-xl md:text-2xl block mt-4">~ Team INNOCENT THANOS</span>
                    </h1>
                    
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 justify-center">
                        <div className="relative flex-grow">
                            <input 
                                className="w-full text-lg px-6 py-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Delhi, India"
                            />
                            <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="relative flex-grow">
                            <input 
                                className="w-full text-lg px-6 py-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Search for Events"
                            />
                            <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Cards */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {/* Webinar Card */}
                    <NavLink 
                        to="/Webinars" 
                        className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center p-8 text-center h-64"
                    >
                        <div className="mb-4 bg-green-100 p-4 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                            <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Webinar</h3>
                        <p className="text-gray-600">Join our educational webinars to learn more</p>
                    </NavLink>

                    {/* NGO Connect Card */}
                    <NavLink 
                        to="/NGOsConnect" 
                        className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center p-8 text-center h-64"
                    >
                        <div className="mb-4 bg-green-100 p-4 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                            <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">NGO Connect</h3>
                        <p className="text-gray-600">Connect with NGOs and support their causes</p>
                    </NavLink>

                    {/* Events Card */}
                    <NavLink 
                        to="/Events" 
                        className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center p-8 text-center h-64"
                    >
                        <div className="mb-4 bg-green-100 p-4 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                            <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Events</h3>
                        <p className="text-gray-600">Discover upcoming community events</p>
                    </NavLink>

                    {/* Donate Here Card */}
                    <NavLink 
                        to="/DonateHere" 
                        className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center p-8 text-center h-64"
                    >
                        <div className="mb-4 bg-green-100 p-4 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                            <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Donate Here</h3>
                        <p className="text-gray-600">Support our initiatives with your contribution</p>
                    </NavLink>
                </div>
            </div>
        </header>
    )
}