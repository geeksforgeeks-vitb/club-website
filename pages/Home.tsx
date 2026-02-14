import React from 'react';
import { Code, Terminal, Cpu, GitBranch, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES, EVENTS } from '../constants';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden min-h-screen flex items-center">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-mesh-gradient pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-8 cursor-default">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            Recruitment is currently closed for 2025-26 academic year
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-6 text-glow">
            Where Code Meets <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">Community</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed">
            Join the elite coding fraternity of VIT Bhopal. We build projects, host hackathons, and cultivate the next generation of tech leaders.
          </p>
          
          {/* Abstract Code Visualization */}
          <div className="mt-12 relative rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden shadow-2xl mx-auto max-w-5xl group">
            <div className="absolute top-0 left-0 w-full h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 z-20">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="aspect-[16/9] w-full bg-surface-dark relative">
              <img 
                src={IMAGES.hero_code} 
                alt="Code editor" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
            <div className="p-2">
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-xs text-primary font-medium uppercase tracking-wider">Core Members</div>
            </div>
            <div className="p-2">
              <div className="text-3xl font-bold text-white mb-1">2000+</div>
              <div className="text-xs text-primary font-medium uppercase tracking-wider">Lifetime Members</div>
            </div>
            <div className="p-2">
              <div className="text-3xl font-bold text-white mb-1">30+</div>
              <div className="text-xs text-primary font-medium uppercase tracking-wider">Events Hosted</div>
            </div>
            <div className="p-2">
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-xs text-primary font-medium uppercase tracking-wider">Workshops</div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do (Bento Grid) */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Crafting the Future</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We don't just write code; we solve problems. Explore the domains that drive our innovation engine.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 grid-rows-2 h-auto md:h-[600px]">
            {/* Large Card: CP */}
            <div className="glass rounded-2xl p-8 col-span-1 md:col-span-2 row-span-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-surface border border-white/10 flex items-center justify-center mb-6 text-primary shadow-lg">
                    <Code size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Competitive Programming</h3>
                  <p className="text-gray-400 max-w-md">Master algorithms and data structures. Compete in global contests and sharpen your problem-solving skills.</p>
                </div>
                <div className="mt-8 flex gap-2">
                  <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">C++</span>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">Java</span>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">Python</span>
                </div>
              </div>
            </div>
            
            {/* Tall Card: Web Dev */}
            <div className="glass rounded-2xl p-8 col-span-1 md:col-span-1 row-span-1 md:row-span-2 relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent group-hover:from-primary/20 transition-all duration-500"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-surface border border-white/10 flex items-center justify-center mb-6 text-primary shadow-lg">
                  <Terminal size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Development</h3>
                <p className="text-gray-400 mb-8 flex-grow">Building full-stack applications that scale. From React frontends to robust Node.js backends.</p>
                <div className="bg-surface rounded-lg p-3 border border-white/5 font-mono text-xs text-gray-500 mt-auto">
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">future</span> = <span className="text-green-400">await</span> build();</p>
                </div>
              </div>
            </div>

            {/* Small Card: AI/ML */}
            <div className="glass rounded-2xl p-8 col-span-1 md:col-span-1 row-span-1 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-surface border border-white/10 flex items-center justify-center mb-6 text-primary shadow-lg">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI & Machine Learning</h3>
                <p className="text-sm text-gray-400">Training models that think. Explore Neural Networks, NLP, and Computer Vision.</p>
              </div>
            </div>

            {/* Small Card: Open Source */}
            <div className="glass rounded-2xl p-8 col-span-1 md:col-span-1 row-span-1 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-surface border border-white/10 flex items-center justify-center mb-6 text-primary shadow-lg">
                  <GitBranch size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Open Source</h3>
                <p className="text-sm text-gray-400">Contributing to the global code library. Git, GitHub, and community collaboration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-20 bg-surface relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Upcoming Events</h2>
              <p className="text-gray-400">Mark your calendars. Don't miss out on the action.</p>
            </div>
            <Link to="/events" className="hidden md:flex items-center gap-1 text-primary text-sm font-medium hover:text-white transition-colors">
              View All Calendar <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENTS.slice(0, 3).map((event) => (
              <div key={event.id} className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10">
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded border border-white/10 z-10">
                    {event.date}
                  </div>
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{event.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-2">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-surface to-black border border-white/10 rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to debug your career?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">Join a community of passionate developers. Whether you are a beginner or a pro, there is a place for you here.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/20">
              Contact Us
            </Link>
            <Link to="/projects" className="bg-transparent border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/5 transition-all">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;