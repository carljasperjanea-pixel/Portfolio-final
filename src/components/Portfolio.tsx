import { motion } from 'motion/react';
import { ArrowUpRight, ExternalLink, FolderOpen } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Portfolio</h2>
            <div className="h-1 w-20 bg-brand-medium rounded-full"></div>
          </div>
          <a 
            href="https://drive.google.com/drive/folders/1OXc-YMFQFdxttAB1PVcyQk8I0DrlWrZF?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 inline-flex items-center text-brand-dark font-medium hover:text-brand-medium transition-colors"
          >
            View Full Archive <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="px-2 py-1 bg-brand-gray/30 text-brand-dark text-xs font-medium rounded-md">
                      {tool}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-dark transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-brand-dark hover:text-brand-medium"
                >
                  View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

