//first div : sign in logo
//second div : search city
//third div : boxes
import SustainableCalendar from "./card_events"

export default function Header(){
    return (
        <header className="bg-green-200 font-serif">
            
            <div className="flex justify-between container mx-auto py-8 ">
                <img className="w-40 h-12" src="/earth.jpg"></img>
                <div className="text-white text-base font-bold flex gap-13 items-center text-center">
                <a target="_blank" href="www.google.com">About </a>

                    <a target="_blank" href="www.google.com">NGOs Connect</a>
                    <a target="_blank" href="www.google.com">Partner With Us</a>
                    <a className="border-white py-3 px-4 rounded-2xl" target="_blank" href="www.google.com">Explore More</a>
                    <a className="border-black py-3 px-4 rounded-2xl" target="_blank" href="www.google.com">Register/Sign In</a>
                </div>
            </div>



            <div className="pt-16 pb-8 relative">
                <img className="h-110 w-60 absolute top-0 left-0"  src="https://www.bing.com/images/search?view=detailV2&ccid=aIlS2QYL&id=0C44EE9BF2DBC70E71CAC76ABE9F8E3158F1240A&thid=OIP.aIlS2QYLsQy06lRkb7dkIgHaGW&mediaurl=https%3a%2f%2fas2.ftcdn.net%2fv2%2fjpg%2f03%2f92%2f48%2f01%2f1000_F_392480192_aL6Gcc3Jo6NoJnvfuX4SdGsTB1HFeiQ4.jpg&exph=857&expw=1000&q=half+earth+green&simid=608042893423226421&FORM=IRPRST&ck=A93CCFE618B11786116C1930E7870B68&selectedIndex=72&itb=0"></img>
                <img className="h-110 w-60 absolute top-0 right-0" src="https://www.bing.com/images/search?view=detailV2&ccid=aIlS2QYL&id=0C44EE9BF2DBC70E71CAC76ABE9F8E3158F1240A&thid=OIP.aIlS2QYLsQy06lRkb7dkIgHaGW&mediaurl=https%3a%2f%2fas2.ftcdn.net%2fv2%2fjpg%2f03%2f92%2f48%2f01%2f1000_F_392480192_aL6Gcc3Jo6NoJnvfuX4SdGsTB1HFeiQ4.jpg&exph=857&expw=1000&q=half+earth+green&simid=608042893423226421&FORM=IRPRST&ck=A93CCFE618B11786116C1930E7870B68&selectedIndex=72&itb=0"></img>

                <div className="max-w-[60%] text-5xl text-white font-bold container mx-auto text-center">
                    "Unleashing Sustainability, the Thanos Way—Half Measures Aren't Enough."  ~ Team INNOCENT THANOS
                </div>

                <div className="max-w-[70%] container mx-auto flex gap-5 mt-10">
                    <input className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl"  placeholder="Delhi,India"></input>
                    <input className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl" placeholder="Search for Events"></input>
                </div>

            </div>



            <div className="max-w-[80%] mx-auto flex flex-wrap justify-center gap-5 my-8">
      {/* Webinar Card */}
      <a 
        href="https://www.google.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-[244px] h-[288px] border border-gray-300 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center p-4 bg-white"
      >
        <div className="text-center">
          <h3 className="text-xl font-bold mb-3">Webinar</h3>
          <p className="text-gray-600">Join our educational webinars to learn more</p>
        </div>
      </a>

      {/* NGO Connect Card */}
      <a 
        href="https://www.google.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-[244px] h-[288px] border border-gray-300 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center p-4 bg-white"
      >
        <div className="text-center">
          <h3 className="text-xl font-bold mb-3">NGO Connect</h3>
          <p className="text-gray-600">Connect with NGOs and support their causes</p>
        </div>
      </a>

      {/* Events Card */}
      <a 
        href="https://www.google.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-[244px] h-[288px] border border-gray-300 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center p-4 bg-white"
      >
        <div className="text-center">
          <h3 className="text-xl font-bold mb-3">Events</h3>
          <p className="text-gray-600">Discover upcoming community events</p>
        </div>
      </a>

      {/* Donate Here Card */}
      <a 
        href="https://www.google.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-[244px] h-[288px] border border-gray-300 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center p-4 bg-white"
      >
        <div className="text-center">
          <h3 className="text-xl font-bold mb-3">Donate Here</h3>
          <p className="text-gray-600">Support our initiatives with your contribution</p>
        </div>
      </a>
            </div>

        </header>
    )
}