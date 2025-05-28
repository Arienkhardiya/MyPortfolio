import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { ExternalLink, Github, ArrowRight, Bot, Smartphone, Music } from 'lucide-react';
import Button from '../ui/Button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const projects = [
  {
    id: 1,
    title: 'FinAI Advisor',
    category: 'AI',
    tags: ['React', 'Gemini API', 'Supabase', 'Firebase'],
    image: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg',
    description: 'AI-powered financial advisor using Gemini API for personalized insights and recommendations. Features include portfolio analysis, investment suggestions, and risk assessment.',
    demoLink: 'https://finai-advisor.demo',
    codeLink: 'https://github.com/Arienkhardiya/finai-advisor',
    featured: true,
    icon: <Bot className="w-6 h-6" />,
  },
  {
    id: 2,
    title: 'QuickManage',
    category: 'Mobile',
    tags: ['Android Studio', 'Firebase', 'Kotlin', 'Material Design'],
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg',
    description: 'Comprehensive Android app for personal task and finance management. Includes features for notes, meetings, bills, emails, and EMI tracking.',
    demoLink: 'https://quickmanage.demo',
    codeLink: 'https://github.com/Arienkhardiya/quickmanage',
    featured: true,
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    id: 3,
    title: 'Musica',
    category: 'Web',
    tags: ['React', 'Tailwind CSS', 'Web Audio API', 'Firebase'],
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg',
    description: 'Modern music streaming platform with beautiful UI inspired by Spotify. Features custom audio player, playlists, and real-time lyrics.',
    demoLink: 'https://musica.demo',
    codeLink: 'https://github.com/Arienkhardiya/musica',
    featured: true,
    icon: <Music className="w-6 h-6" />,
  },
];

const categories = ['All', 'AI', 'Web', 'Mobile'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useScrollAnimation(sectionRef);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section 
      id="projects" 
      className="py-20 bg-gray-100 dark:bg-dark-300 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background element */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent-400 mix-blend-multiply blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-primary-400 mix-blend-multiply blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle 
          title="Featured Projects"
          subtitle="Explore my latest work - from AI-powered applications to mobile apps and web platforms."
        />

        {/* Category filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-white dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card
                  variant="glass"
                  className="h-full overflow-hidden group"
                  hoverEffect={false}
                >
                  <div 
                    className="relative w-full h-48 mb-4 overflow-hidden rounded-lg"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <LazyLoadImage
                      src={project.image}
                      alt={project.title}
                      effect="blur"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-between p-4 transition-opacity duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      <span className="bg-primary-500 text-white text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
                        {project.icon}
                        {project.category}
                      </span>
                      
                      <div className="flex gap-2">
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white dark:bg-dark-200 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                          aria-label="View live demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                        <a 
                          href={project.codeLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white dark:bg-dark-200 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                          aria-label="View source code"
                        >
                          <Github size={16} />
                        </a>
                      </div>
                    </div>
                    
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-medium px-2 py-1 rounded">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="bg-gray-200 dark:bg-dark-100 text-gray-700 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 font-medium inline-flex items-center hover:underline"
                    >
                      View Project <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* View all projects button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button variant="outline" size="lg">
            View All Projects <ArrowRight size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;