import React, { useState } from 'react';
import { Search, Filter, Calendar, Clock, MapPin, ChevronRight, Bell } from 'lucide-react';
import { EVENTS } from '../constants';
import { Link } from 'react-router-dom';

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/20">Community</span>
              <span className="h-px w-8 bg-gray-800"></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 tracking-tight">Events Hub</h1>
            <p className="mt-3 text-gray-400 max-w-xl text-lg font-light leading-relaxed">
              Join workshops, hackathons, and tech talks. Connect with fellow developers and elevate your skills.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative group flex-grow md:flex-grow-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-500 group-focus-within:text-primary transition-colors" size={18} />
              </div>
              <input
                type="text"
                className="block w-full md:w-64 pl-10 pr-3 py-2 border border-white/10 rounded-lg leading-5 bg-white/5 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                placeholder="Search events..."
              />
            </div>
            <button className="p-2 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
              <Filter size={18} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-white/10 mb-10">
          <nav className="-mb-px flex space-x-8">
            {['Upcoming', 'Past Events', 'Hackathons'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${activeTab === tab
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-300'
                  }`}
              >
                {tab}
                {tab === 'Upcoming' && <span className="ml-2 bg-primary/20 text-primary py-0.5 px-2 rounded-full text-xs">3</span>}
              </button>
            ))}
          </nav>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((event) => (
            <div key={event.id} className="group relative rounded-xl border border-white/10 bg-[#111] overflow-hidden hover:border-primary/40 hover:shadow-[0_0_20px_-5px_rgba(47,142,71,0.2)] transition-all duration-300 flex flex-col h-full">
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute top-3 left-3 z-10">
                  <div className="bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1 rounded-md flex flex-col items-center min-w-[3.5rem]">
                    <span className="text-[10px] uppercase text-gray-300">{event.date.split(' ')[0]}</span>
                    <span className="text-lg leading-none mt-0.5">{event.date.split(' ')[1].replace(',', '')}</span>
                  </div>
                </div>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/10">{event.type}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{event.description}</p>
                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                  <div className="text-xs text-gray-500">
                    <span className="block text-gray-300 font-medium">{event.location}</span>
                    <span>VIT Bhopal</span>
                  </div>
                  {event.link ? (
                    event.link.startsWith('/') ? (
                      <Link to={event.link} className="text-primary hover:text-white text-sm font-medium transition-colors flex items-center gap-1">
                        Details <ChevronRight size={16} />
                      </Link>
                    ) : (
                      <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white text-sm font-medium transition-colors flex items-center gap-1">
                        Details <ChevronRight size={16} />
                      </a>
                    )
                  ) : (
                    <button className="text-primary hover:text-white text-sm font-medium transition-colors flex items-center gap-1">
                      Details <ChevronRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>

          ))}

          {/* Placeholder for More */}
          <div className="group relative rounded-xl border border-white/10 bg-[#111]/50 border-dashed overflow-hidden transition-all duration-300 flex flex-col h-full items-center justify-center p-8 text-center hover:bg-[#111] hover:border-solid hover:border-primary/50 cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Bell className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">More Coming Soon</h3>
            <p className="text-gray-500 text-sm">Stay tuned for upcoming hackathons and bootcamps.</p>
            <button className="mt-4 text-xs font-medium text-primary border border-primary/30 px-3 py-1.5 rounded hover:bg-primary hover:text-white transition-all">
              Notify Me
            </button>
          </div>

        </div>

      </div>
    </div >
  );
};

export default Events;
