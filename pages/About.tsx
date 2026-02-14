import React from 'react';
import { Eye, Target, Zap, Globe, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span>EST. 2021</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Architecting the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Future of Tech</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 leading-relaxed">
          We are the official GeeksforGeeks student chapter at VIT Bhopal. A collective of builders, thinkers, and innovators dedicated to algorithmic excellence.
        </p>
      </div>

      {/* Vision & Mission Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Vision */}
          <div className="lg:col-span-2 relative group overflow-hidden rounded-2xl border border-surface-border bg-surface hover:border-primary/30 transition-colors duration-500 min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 p-10 h-full flex flex-col justify-end">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 text-primary">
                <Eye size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400 text-lg max-w-lg">
                To foster a self-sustaining ecosystem of developers who don't just consume technology, but define it. We aim to turn VIT Bhopal into a premier hub for technical innovation in Central India.
              </p>
            </div>
          </div>
          
          {/* Mission Cards */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="flex-1 rounded-2xl border border-surface-border bg-surface p-8 hover:border-primary/30 transition-colors duration-500 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-3">
                <Target className="text-primary" size={24} />
                <h3 className="text-xl font-bold text-white">Peer Learning</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating a culture where seniors mentor juniors, knowledge is open-sourced, and competition is healthy.
              </p>
            </div>
            <div className="flex-1 rounded-2xl border border-surface-border bg-surface p-8 hover:border-primary/30 transition-colors duration-500 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-3">
                <Zap className="text-primary" size={24} />
                <h3 className="text-xl font-bold text-white">Industry Ready</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bridging the gap between academic theory and real-world deployment through hackathons and workshops.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Our Journey</h2>
          <p className="text-gray-400 mt-2">From a small group of enthusiasts to a campus phenomenon.</p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-surface-border top-0 z-0"></div>
        
        <div className="space-y-12 relative z-10">
          {[
            { date: 'SEP 2021', title: 'Inception', desc: 'Founded with 5 core members aiming to disrupt the coding culture.' },
            { date: 'MAR 2022', title: 'First Hackathon', desc: "Organized 'CodeWar 1.0', witnessing 300+ registrations across India." },
            { date: 'AUG 2022', title: 'Scaling Up', desc: 'Crossed 500 active community members and launched mentorship tracks.' },
            { date: 'NOW', title: 'The Present', desc: 'Leading the tech landscape at VIT Bhopal with flagship events and workshops.' }
          ].map((item, idx) => (
            <div key={idx} className={`flex items-center justify-between w-full group ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              <div className={`w-5/12 ${idx % 2 === 1 ? 'text-left pl-8' : 'text-right pr-8'}`}>
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-surface border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(47,142,71,0.8)] transition-all"></div>
              <div className={`w-5/12 ${idx % 2 === 1 ? 'text-right pr-8' : 'pl-8'}`}>
                <span className="font-mono text-primary text-sm">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
