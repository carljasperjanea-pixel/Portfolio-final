import { motion } from 'motion/react';
import { SKILLS_DATA } from '../constants';
import { CheckCircle2, Cpu, Palette } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-brand-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-brand-medium mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_DATA.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-brand-light/20 rounded-lg text-brand-dark mr-4">
                  {idx === 0 ? <Cpu size={24} /> : <Palette size={24} />}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{category.category}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-brand-light/10 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-medium mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
