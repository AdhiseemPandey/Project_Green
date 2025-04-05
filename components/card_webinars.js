import React, { useState, useEffect } from 'react';

const WebinarHolder = () => {
  // Sample webinar data
  const [webinars, setWebinars] = useState([
    {
      id: 1,
      title: "Sustainable Living Workshop",
      date: "2023-11-15",
      time: "14:00 - 15:30",
      speaker: "Dr. Jane Smith",
      organization: "Green Earth Initiative",
      description: "Learn practical tips for reducing your carbon footprint in daily life.",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      registered: false,
      past: false,
      hostedByNGO: true
    },
    {
      id: 2,
      title: "Climate Change 101",
      date: "2023-11-20",
      time: "10:00 - 11:30",
      speaker: "Prof. John Doe",
      organization: "Climate Research Foundation",
      description: "Understanding the science behind climate change and its global impact.",
      image: "https://images.unsplash.com/photo-1615368144592-5e0d8d2d6c4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      registered: true,
      past: false,
      hostedByNGO: true
    },
    {
      id: 3,
      title: "Corporate Sustainability",
      date: "2023-10-25",
      time: "16:00 - 17:30",
      speaker: "Engineer Sarah Johnson",
      organization: "EcoTech Solutions",
      description: "Exploring the latest innovations in solar and wind energy technologies.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      registered: false,
      past: true,
      hostedByNGO: false
    }
  ]);

  const [activeTab, setActiveTab] = useState('upcoming');
  const [showModal, setShowModal] = useState(false);
  const [showHostModal, setShowHostModal] = useState(false);
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [hostForm, setHostForm] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    speaker: '',
    organization: '',
    contactEmail: ''
  });

  // Filter webinars based on active tab
  const filteredWebinars = webinars.filter(webinar => {
    if (activeTab === 'upcoming') return !webinar.past;
    if (activeTab === 'past') return webinar.past;
    return true;
  });

  // Register for webinar
  const handleRegister = (id) => {
    setWebinars(webinars.map(webinar => 
      webinar.id === id ? {...webinar, registered: true} : webinar
    ));
    setShowModal(false);
  };

  // Open webinar details modal
  const openDetails = (webinar) => {
    setSelectedWebinar(webinar);
    setShowModal(true);
  };

  // Handle host form changes
  const handleHostFormChange = (e) => {
    const { name, value } = e.target;
    setHostForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit new webinar hosted by NGO
  const handleHostSubmit = (e) => {
    e.preventDefault();
    const newWebinar = {
      id: webinars.length + 1,
      title: hostForm.title,
      date: hostForm.date,
      time: hostForm.time,
      speaker: hostForm.speaker,
      organization: hostForm.organization,
      description: hostForm.description,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      registered: false,
      past: new Date(hostForm.date) < new Date(),
      hostedByNGO: true
    };
    
    setWebinars([...webinars, newWebinar]);
    setShowHostModal(false);
    setHostForm({
      title: '',
      description: '',
      date: '',
      time: '',
      speaker: '',
      organization: '',
      contactEmail: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Environmental Webinars
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Learn from experts about sustainability and environmental conservation
          </p>
          
          {/* Host Webinar Button for NGOs */}
          <div className="mt-6">
            <button
              onClick={() => setShowHostModal(true)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <svg className="-ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Host a Webinar (For NGOs)
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4 rounded-lg bg-white p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'upcoming' ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Upcoming Webinars
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'past' ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Past Webinars
            </button>
          </div>
          
          <div className="text-sm text-gray-500">
            Showing {filteredWebinars.length} {filteredWebinars.length === 1 ? 'webinar' : 'webinars'}
          </div>
        </div>

        {/* Webinar Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredWebinars.map((webinar) => (
            <div key={webinar.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={webinar.image} 
                  alt={webinar.title}
                  className="w-full h-full object-cover"
                />
                {webinar.hostedByNGO && (
                  <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                    NGO Hosted
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{webinar.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Hosted by {webinar.speaker}
                      {webinar.organization && `, ${webinar.organization}`}
                    </p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    webinar.past ? 'bg-gray-100 text-gray-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {webinar.past ? 'Completed' : 'Upcoming'}
                  </span>
                </div>
                <p className="mt-3 text-gray-600 line-clamp-2">{webinar.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-gray-900">{webinar.date}</span>
                    <span className="mx-2 text-gray-400">|</span>
                    <span className="text-sm text-gray-500">{webinar.time}</span>
                  </div>
                  <button
                    onClick={() => openDetails(webinar)}
                    className={`inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white ${
                      webinar.registered 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : webinar.past 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-green-600 hover:bg-green-700'
                    }`}
                    disabled={webinar.past}
                  >
                    {webinar.registered ? 'Registered' : webinar.past ? 'Completed' : 'Learn More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredWebinars.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No {activeTab === 'upcoming' ? 'upcoming' : 'past'} webinars
            </h3>
            <p className="mt-1 text-gray-500">
              {activeTab === 'upcoming'
                ? 'Check back later for new webinar announcements.'
                : 'Browse our upcoming webinars to join the next session.'}
            </p>
          </div>
        )}

        {/* Webinar Details Modal */}
        {showModal && selectedWebinar && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowModal(false)}></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          {selectedWebinar.title}
                        </h3>
                        <button
                          onClick={() => setShowModal(false)}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Close</span>
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Hosted by <span className="font-medium">{selectedWebinar.speaker}</span>
                          {selectedWebinar.organization && ` from ${selectedWebinar.organization}`}
                        </p>
                        <p className="mt-2 text-gray-600">
                          {selectedWebinar.description}
                        </p>
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-900">Date & Time</h4>
                          <p className="mt-1 text-sm text-gray-600">
                            {selectedWebinar.date} | {selectedWebinar.time}
                          </p>
                        </div>
                        {!selectedWebinar.past && (
                          <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-900">What You'll Learn</h4>
                            <ul className="mt-1 text-sm text-gray-600 list-disc pl-5 space-y-1">
                              <li>Key concepts about environmental sustainability</li>
                              <li>Practical applications for daily life</li>
                              <li>Q&A session with the expert</li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  {!selectedWebinar.past && (
                    <>
                      {selectedWebinar.registered ? (
                        <button
                          type="button"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                          disabled
                        >
                          Already Registered
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={() => handleRegister(selectedWebinar.id)}
                        >
                          Register Now
                        </button>
                      )}
                    </>
                  )}
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Host Webinar Modal */}
        {showHostModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowHostModal(false)}></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Host a New Webinar
                        </h3>
                        <button
                          onClick={() => setShowHostModal(false)}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Close</span>
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Webinar Title *
                          </label>
                          <input
                            type="text"
                            name="title"
                            id="title"
                            value={hostForm.title}
                            onChange={handleHostFormChange}
                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                          />
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description *
                          </label>
                          <textarea
                            name="description"
                            id="description"
                            rows={3}
                            value={hostForm.description}
                            onChange={handleHostFormChange}
                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                            Date *
                          </label>
                          <input
                            type="date"
                            name="date"
                            id="date"
                            value={hostForm.date}
                            onChange={handleHostFormChange}
                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                            Time *
                          </label>
                          <input
                            type="time"
                            name="time"
                            id="time"
                            value={hostForm.time}
                            onChange={handleHostFormChange}
                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="speaker" className="block text-sm font-medium text-gray-700">
                            Speaker Name *
                          </label>
                          <input
                            type="text"
                            name="speaker"
                            id="speaker"
                            value={hostForm.speaker}
                            onChange={handleHostFormChange}
                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                            Organization *
                          </label>
                          <input
                            type="text"
                            name="organization"
                            id="organization"
                            value={hostForm.organization}
                            onChange={handleHostFormChange}
                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                          />
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                            Contact Email *
                          </label>
                          <input
                            type="email"
                            name="contactEmail"
                            id="contactEmail"
                            value={hostForm.contactEmail}
                            onChange={handleHostFormChange}
                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={handleHostSubmit}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Submit Webinar
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setShowHostModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebinarHolder;