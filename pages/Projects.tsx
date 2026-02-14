import React from 'react';
import { Github, Star, GitFork, ExternalLink, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span>Open Source</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Open Source</span> Legacy
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of projects built by our community. Contribute, learn, and grow with us on GitHub.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group relative rounded-xl border border-white/10 bg-[#111] p-6 hover:border-primary/40 hover:shadow-[0_0_20px_-5px_rgba(47,142,71,0.2)] transition-all duration-300 flex flex-col h-full">
               <div className="flex justify-between items-start mb-4">
                 <div className="w-10 h-10 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-white group-hover:text-primary transition-colors">
                    <Github size={20} />
                 </div>
                 <div className="flex gap-3 text-xs text-gray-500">
                    {project.stars !== undefined && (
                        <div className="flex items-center gap-1">
                            <Star size={14} className="text-yellow-500" /> {project.stars}
                        </div>
                    )}
                    {project.forks !== undefined && (
                        <div className="flex items-center gap-1">
                            <GitFork size={14} className="text-gray-400" /> {project.forks}
                        </div>
                    )}
                 </div>
               </div>
               
               <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
               <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                 {project.description}
               </p>

               <div className="mt-auto">
                 <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">
                            {tag}
                        </span>
                    ))}
                 </div>
                 <a 
                   href={project.link} 
                   target="_blank" 
                   rel="noreferrer"
                   className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all text-sm font-medium"
                 >
                   View Repository <ExternalLink size={14} />
                 </a>
               </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-20 text-center">
            <a 
              href="https://github.com/GeeksforGeeks-VIT-Bhopal" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
                View all repositories on GitHub <ArrowRight size={16} />
            </a>
        </div>

      </div>
    </div>
  );
};

export default Projects;