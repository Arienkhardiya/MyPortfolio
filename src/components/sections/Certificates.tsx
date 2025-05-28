import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { X } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'GDG Android Workshop',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    date: 'March 2024',
    issuer: 'Google Developer Groups',
  },
  {
    id: 2,
    title: 'Angular Workshop',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    date: 'February 2024',
    issuer: 'Angular Community',
  },
  {
    id: 3,
    title: 'Microsoft Power Apps',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
    date: 'January 2024',
    issuer: 'Microsoft',
  },
  {
    id: 4,
    title: 'Python & C Training',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
    date: 'December 2023',
    issuer: 'Programming Hub',
  },
  {
    id: 5,
    title: 'ML & Meditation Workshop',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg',
    date: 'November 2023',
    issuer: 'Tech Mindfulness',
  },
];

const Certificates: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useScrollAnimation(sectionRef);
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  return (
    <section 
      id="certificates" 
      className="py-20 bg-gray-50 dark:bg-dark-300 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background element */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary-400/20 to-secondary-400/20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle 
          title="Certifications"
          subtitle="A collection of my professional certifications and workshop completions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                variant="glass"
                className="group cursor-pointer overflow-hidden"
                onClick={() => setSelectedCertificate(cert.id)}
              >
                <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {cert.title}
                </h3>
                
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                onClick={() => setSelectedCertificate(null)}
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl z-50 p-4"
              >
                <Card variant="glass" className="relative">
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                  
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={certificates.find(c => c.id === selectedCertificate)?.image}
                      alt={certificates.find(c => c.id === selectedCertificate)?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {certificates.find(c => c.id === selectedCertificate)?.title}
                    </h3>
                    
                    <div className="flex justify-between items-center text-gray-600 dark:text-gray-400">
                      <span>{certificates.find(c => c.id === selectedCertificate)?.issuer}</span>
                      <span>{certificates.find(c => c.id === selectedCertificate)?.date}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;