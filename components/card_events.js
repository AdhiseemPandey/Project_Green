import React, { useState } from 'react';
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
  const endDate = addDays(today, 365); // Generate events for 1 year
  
  let currentDate = new Date(today);
  
  while (currentDate <= endDate) {
    // Random day between 10-14 days from last event
    const daysToAdd = 10 + Math.floor(Math.random() * 5);
    currentDate = addDays(currentDate, daysToAdd);
    
    // Skip if we've gone past the end date
    if (currentDate > endDate) break;
    
    // Create event
    events.push({
      title: 'Sustainable Development for Green Future',
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
    title: 'Sustainable Development for Green Future',
    start: '',
    end: '',
    desc: '',
  });

  const handleSelectSlot = ({ start, end }) => {
    setNewEvent({
      ...newEvent,
      start,
      end,
    });
    setShowModal(true);
  };

  const handleCreateEvent = () => {
    const eventToAdd = {
      ...newEvent,
      id: events.length,
    };
    setEvents([...events, eventToAdd]);
    setShowModal(false);
    setNewEvent({
      title: 'Sustainable Development for Green Future',
      start: '',
      end: '',
      desc: '',
    });
  };

  return (
    <div style={{ height: '100vh', padding: '20px' }}>
      <h1>Sustainable Development Events Calendar</h1>
      <button 
        onClick={() => setShowModal(true)}
        style={{
          padding: '10px 15px',
          background: '#2ecc71',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          marginBottom: '20px',
          cursor: 'pointer',
        }}
      >
        Create New Event
      </button>
      
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
      
      {showModal && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            width: '400px',
          }}>
            <h2>Create Sustainable Development Event</h2>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Title:</label>
              <input
                type="text"
                value={newEvent.title}
                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Start Date:</label>
              <input
                type="datetime-local"
                value={newEvent.start ? format(newEvent.start, "yyyy-MM-dd'T'HH:mm") : ''}
                onChange={(e) => setNewEvent({...newEvent, start: new Date(e.target.value)})}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>End Date:</label>
              <input
                type="datetime-local"
                value={newEvent.end ? format(newEvent.end, "yyyy-MM-dd'T'HH:mm") : ''}
                onChange={(e) => setNewEvent({...newEvent, end: new Date(e.target.value)})}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
              <textarea
                value={newEvent.desc}
                onChange={(e) => setNewEvent({...newEvent, desc: e.target.value})}
                style={{ width: '100%', padding: '8px', minHeight: '80px' }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  padding: '8px 15px',
                  marginRight: '10px',
                  background: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleCreateEvent}
                style={{
                  padding: '8px 15px',
                  background: '#2ecc71',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Create Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SustainableCalendar;