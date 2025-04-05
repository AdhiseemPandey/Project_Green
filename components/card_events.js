import React, { useState, useCallback } from 'react';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import addDays from 'date-fns/addDays';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const generateSustainableEvents = () => {
  const events = [];
  const today = new Date();
  const endDate = addDays(today, 365);
  
  let currentDate = new Date(today);
  
  while (currentDate <= endDate) {
    const daysToAdd = 10 + Math.floor(Math.random() * 5);
    currentDate = addDays(currentDate, daysToAdd);
    
    if (currentDate > endDate) break;
    
    events.push({
      title: 'Sustainable Development Workshop',
      start: new Date(currentDate.setHours(10, 0, 0, 0)),
      end: new Date(currentDate.setHours(12, 0, 0, 0)),
      desc: 'Workshop on sustainable practices for a greener future',
      id: events.length,
    });
  }
  
  return events;
};

const SustainableCalendar = () => {
  const [events, setEvents] = useState(generateSustainableEvents());
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: 'Sustainable Development Workshop',
    start: '',
    end: '',
    desc: '',
  });

  const handleSelectSlot = useCallback(({ start, end }) => {
    setNewEvent(prev => ({
      ...prev,
      start,
      end: end || new Date(start.getTime() + 2 * 60 * 60 * 1000), // Default 2 hour duration
    }));
    setShowModal(true);
  }, []);

  const handleCreateEvent = () => {
    if (!newEvent.start || !newEvent.end) return;
    
    const eventToAdd = {
      ...newEvent,
      id: events.length,
    };
    
    setEvents([...events, eventToAdd]);
    setShowModal(false);
    setNewEvent({
      title: 'Sustainable Development Workshop',
      start: '',
      end: '',
      desc: '',
    });
  };

  const formatDateTimeLocal = (date) => {
    if (!date) return '';
    return format(date, "yyyy-MM-dd'T'HH:mm");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Sustainable Development Events Calendar</h1>
        
        <button 
          onClick={() => setShowModal(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow mb-6 transition-colors"
        >
          Create New Event
        </button>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '70vh' }}
            selectable
            onSelectSlot={handleSelectSlot}
            defaultView={Views.MONTH}
          />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Create Event</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input
                    type="datetime-local"
                    value={formatDateTimeLocal(newEvent.start)}
                    onChange={(e) => setNewEvent({...newEvent, start: new Date(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <input
                    type="datetime-local"
                    value={formatDateTimeLocal(newEvent.end)}
                    onChange={(e) => setNewEvent({...newEvent, end: new Date(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={newEvent.desc}
                    onChange={(e) => setNewEvent({...newEvent, desc: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 min-h-[100px]"
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateEvent}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
                  disabled={!newEvent.start || !newEvent.end}
                >
                  Create Event
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SustainableCalendar;