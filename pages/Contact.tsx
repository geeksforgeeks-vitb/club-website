import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Form */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Get in <span className="text-primary">touch</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Have a question about our events, want to collaborate on a workshop, or just want to say hi? We'd love to hear from you.
            </p>
            
            <form className="space-y-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-xs uppercase tracking-wider font-semibold text-gray-500">First Name</label>
                  <input type="text" id="firstName" className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-xs uppercase tracking-wider font-semibold text-gray-500">Last Name</label>
                  <input type="text" id="lastName" className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Doe" />
                </div>
               </div>
               
               <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold text-gray-500">Email Address</label>
                  <input type="email" id="email" className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="jane@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold text-gray-500">Message</label>
                  <textarea id="message" rows={5} className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Tell us how we can help..."></textarea>
                </div>

                <button type="submit" className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-primary/20">
                  Send Message <Send size={18} />
                </button>
            </form>
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-5">
             <div className="bg-surface rounded-2xl border border-white/5 p-8 h-full flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <div className="relative z-10 space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-1">Email Us</h3>
                      <a href="mailto:geeksforgeeks.vitb@vitbhopal.ac.in" className="text-gray-300 hover:text-primary transition-colors">geeksforgeeks.vitb@vitbhopal.ac.in</a>
                      <p className="text-xs text-gray-500 mt-1">We typically reply within 24 hours.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-1">Visit Campus</h3>
                      <p className="text-gray-300 leading-snug">
                        VIT Bhopal University<br/>
                        Kotri Kalan, Ashta, Near Indore Road<br/>
                        Bhopal, Madhya Pradesh 466114
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Iframe */}
                <div className="mt-8 rounded-xl overflow-hidden h-48 relative border border-white/10">
                   <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.536637659695!2d76.84872921098616!3d23.077451014207943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVIT%20Bhopal%20University!5e0!3m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
                      allowFullScreen 
                      loading="lazy"
                      title="VIT Bhopal Map"
                   ></iframe>
                </div>

             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
