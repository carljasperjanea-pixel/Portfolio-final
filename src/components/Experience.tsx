import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE_DATA, TRAINING_DATA, EDUCATION_DATA } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-brand-medium mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A track record of reliability and performance across different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work History */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center mb-6">
              <Briefcase className="mr-3 text-brand-dark" />
              Professional History
            </h3>
            
            {EXPERIENCE_DATA.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-brand-light/50 pb-8 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-medium border-2 border-white shadow-sm"></div>
                
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{job.role}</h4>
                      <p className="text-brand-dark font-medium">{job.company}</p>
                    </div>
                    <div className="mt-2 sm:mt-0 text-right">
                      <div className="inline-flex items-center text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm whitespace-nowrap">
                        <Calendar className="w-3 h-3 mr-1.5 flex-shrink-0" />
                        {job.period}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="w-3 h-3 mr-1.5" />
                    {job.location}
                  </div>
                  
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm leading-relaxed">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-brand-medium rounded-full flex-shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education & Training */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 flex items-center mb-6">
                <span className="mr-3 text-brand-dark text-xl font-serif italic">Education</span>
              </h3>
              
              {EDUCATION_DATA.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-brand-dark text-white p-6 rounded-xl shadow-lg relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                  
                  <h4 className="text-lg font-bold mb-2">{edu.institution}</h4>
                  <p className="text-brand-light text-sm mb-4">{edu.degree}</p>
                  <div className="flex justify-between items-end text-xs text-gray-300 border-t border-white/10 pt-4">
                    <span>{edu.location}</span>
                    <span className="font-mono bg-white/10 px-2 py-1 rounded">{edu.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 flex items-center mb-6">
                <span className="mr-3 text-brand-dark text-xl font-serif italic">Trainings</span>
              </h3>
              
              <div className="space-y-4">
                {TRAINING_DATA.map((training, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-brand-medium/30 transition-colors"
                  >
                    <h4 className="font-bold text-gray-900">{training.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{training.institution}</p>
                    <p className="text-xs text-brand-medium mt-2 font-mono">{training.period}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
