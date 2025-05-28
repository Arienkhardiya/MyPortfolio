import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { Calendar, Briefcase, GraduationCap, Award, Code, Server, Brain, Database } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useScrollAnimation(sectionRef);

  const skills = [
    { label: 'React.js', percentage: 90, icon: <Code size={20} /> },
    { label: 'Node.js', percentage: 85, icon: <Server size={20} /> },
    { label: 'AI/ML', percentage: 88, icon: <Brain size={20} /> },
    { label: 'Firebase', percentage: 82, icon: <Database size={20} /> },
    { label: 'Python', percentage: 90, icon: <Code size={20} /> },
    { label: 'Cloud Technologies', percentage: 80, icon: <Server size={20} /> },
  ];

  const timelineItems = [
    {
      icon: <GraduationCap size={20} />,
      title: 'B.Tech in Computer Science',
      company: 'Poornima University',
      duration: '2021 - Present',
      description: 'Pursuing Computer Science with focus on AI/ML and software development.',
    },
    {
      icon: <GraduationCap size={20} />,
      title: 'Online BS Program',
      company: 'Data Science & Programming',
      duration: '2022 - Present',
      description: 'Specializing in data science, machine learning, and programming fundamentals.',
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Google Developer Student Clubs',
      company: 'Technical Lead',
      duration: '2023 - Present',
      description: 'Leading technical workshops and mentoring students in web development and AI.',
    },
    {
      icon: <Award size={20} />,
      title: 'AI Ethics Research Project',
      company: 'International Collaboration',
      duration: '2023',
      description: 'Contributing to research on ethical AI development and implementation.',
    },
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-gray-50 dark:bg-dark-200 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-primary-400 mix-blend-multiply blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-80 h-80 rounded-full bg-secondary-400 mix-blend-multiply blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle 
          title="About Me"
          subtitle="Passionate about technology and innovation - exploring the intersection of AI and software development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              My Journey
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a <span className="text-primary-600 dark:text-primary-400 font-medium">B.Tech student at Poornima University</span> with a passion for Generative AI, Web & App Development, and software architecture.
              </p>
              
              <p>
                As a member of Google Developer Student Clubs and various international AI ethics projects, I'm committed to creating innovative solutions while ensuring responsible technology development.
              </p>
              
              <p>
                My focus areas include full-stack development, machine learning applications, and creating scalable software solutions that make a positive impact.
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Technical Expertise
              </h4>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.label}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-primary-500 dark:text-primary-400">
                          {skill.icon}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{skill.label}</span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-100 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Education & Experience
              </h3>
              
              <div className="relative pl-8 border-l-2 border-primary-500/30 dark:border-primary-400/30 space-y-8">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  >
                    <Card
                      variant="glass"
                      className="relative"
                    >
                      <div className="absolute -left-[41px] -top-1 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 border-2 border-primary-500 dark:border-primary-400 flex items-center justify-center text-primary-600 dark:text-primary-400">
                        {item.icon}
                      </div>
                      
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                            {item.title}
                          </h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                            <Calendar size={14} />
                            {item.duration}
                          </span>
                        </div>
                        
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                          {item.company}
                        </p>
                        
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;