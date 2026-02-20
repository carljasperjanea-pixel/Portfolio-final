import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Let's work together.</h2>
            <p className="text-brand-light/80 text-lg mb-10 max-w-md">
              I'm available for freelance projects and full-time opportunities. Feel free to reach out if you have a project in mind.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-brand-medium transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-brand-light">Phone</p>
                  <p className="font-medium">+63 905 230 3855</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-brand-medium transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-brand-light">Location</p>
                  <p className="font-medium">Negros Oriental, Philippines, 6201</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-brand-medium transition-colors">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-brand-light">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/carl-jasper-janea-8736313a9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium hover:text-brand-light transition-colors underline decoration-brand-medium/50 underline-offset-4"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-medium focus:ring-2 focus:ring-brand-medium/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-medium focus:ring-2 focus:ring-brand-medium/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-medium focus:ring-2 focus:ring-brand-medium/20 outline-none transition-all"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-medium focus:ring-2 focus:ring-brand-medium/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-brand-dark text-white font-bold py-4 rounded-lg hover:bg-brand-medium transition-colors flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-brand-light/60 text-sm">
          <p>© {new Date().getFullYear()} Carl Jasper Janea. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
