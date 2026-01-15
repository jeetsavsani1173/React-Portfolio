import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown, Calendar, BookOpen } from "lucide-react";

const Projects = () => {
  const [expandedId, setExpandedId] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const projects = [
    {
      id: 0,
      title: "CoursePool",
      subtitle: "E-Learning Platform",
      description: "Innovative SEO-friendly e-learning platform offering diverse courses to students worldwide",
      startDate: "May 2023",
      endDate: "Sep 2023",
      icon: BookOpen,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-300 dark:border-blue-700",
      achievements: [
        "Developed dynamic E-learning platform with SEO optimization",
        "Implemented Google and GitHub OAuth with JWT Token Authentication using Refresh Token Rotation",
        "Integrated Redis database for API caching of frequently called endpoints",
        "Built dynamic email templates using EJS for account activation and purchase notifications",
        "Implemented Stripe payment gateway for course purchases",
        "Integrated Cloudinary for image uploads and VdoCipher for secure video content",
        "Added real-time notifications with sound in admin panel using Socket.io",
      ],
      tech: ["Node.js", "Next.js", "MongoDB", "Redis", "Express.js", "JWT", "Socket.io", "Stripe", "Cloudinary"],
      github: "https://github.com/jeetsavsani1173/CoursePool",
      liveDemo: "#",
    },
    {
      id: 1,
      title: "TourNion",
      subtitle: "Tour Sharing MERN Application",
      description: "MERN stack web application where users can share and explore tour experiences",
      startDate: "Dec 2022",
      endDate: "Mar 2023",
      icon: BookOpen,
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-300 dark:border-purple-700",
      achievements: [
        "Designed full-stack MERN application for sharing tour experiences",
        "Built RESTful API with Node.js and Express.js for CRUD operations",
        "Tested APIs comprehensively using Postman",
        "Implemented Google OAuth sign-in with JWT Token authentication",
        "Added pagination, likes, comments, and tour search functionality",
        "Integrated related tour recommendations",
        "Styled with Modern Design Bootstrap (MDB) for responsive design",
      ],
      tech: ["React.js", "Redux.js", "Node.js", "Express.js", "MongoDB", "JWT", "MDB", "JavaScript"],
      github: "https://github.com/jeetsavsani1173/TourNion",
      liveDemo: "#",
    },
    {
      id: 2,
      title: "InterviewBie",
      subtitle: "Virtual Interview Platform",
      description: "Real-time collaborative coding and interview platform with video/audio chat",
      startDate: "Project",
      endDate: "University Initiative",
      icon: BookOpen,
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-300 dark:border-orange-700",
      achievements: [
        "Built web application for conducting virtual technical interviews",
        "Implemented real-time code editor IDE using Socket.io for collaboration",
        "Integrated CodeMirror with support for 15+ programming languages and themes",
        "Connected Rapid-API for code compilation and execution",
        "Implemented live video and audio chat using ZegoCloud Web services",
        "Enabled real-time code synchronization between interviewer and candidate",
      ],
      tech: ["React.js", "Node.js", "Express.js", "WebSocket", "CodeMirror", "ZegoCloud", "Rapid-API"],
      github: "#",
      liveDemo: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12 sm:space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Full-stack applications showcasing real-world problem-solving and modern web technologies
            </p>
          </motion.div>

          {/* Projects List */}
          <div className="space-y-6 sm:space-y-8">
            {projects.map((project, idx) => {
              const ProjectIcon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group"
                >
                  {/* Project Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    onClick={() => setExpandedId(expandedId === project.id ? -1 : project.id)}
                    className={`${project.bgColor} border ${project.borderColor} rounded-xl p-6 sm:p-8 cursor-pointer transition-colors hover:border-opacity-100`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center`}>
                            <ProjectIcon size={24} className="text-white" />
                          </div>
                          <div>
                            <h3 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                              {project.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {project.subtitle}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mt-3">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <ChevronDown
                          size={24}
                          className={`text-gray-600 dark:text-gray-400 transition-transform ${
                            expandedId === project.id ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <Calendar size={16} />
                      <span>{project.startDate} - {project.endDate}</span>
                    </div>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {expandedId === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-600 space-y-6">
                            {/* Achievements */}
                            <div className="space-y-3">
                              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                                Key Features & Achievements
                              </h4>
                              <div className="space-y-2">
                                {project.achievements.map((achievement, aidx) => (
                                  <div key={aidx} className="flex gap-3">
                                    <span className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent flex-shrink-0`}>
                                      ✓
                                    </span>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                      {achievement}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="space-y-3">
                              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                                Tech Stack
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, tidx) => (
                                  <span
                                    key={tidx}
                                    className={`px-3 py-1.5 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs sm:text-sm font-medium`}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Links */}
                            <div className="flex flex-wrap gap-3 pt-2">
                              {project.github !== "#" && (
                                <motion.a
                                  href={project.github}
                                  target="_blank"
                                  rel="noreferrer"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors font-medium`}
                                >
                                  <Github size={18} />
                                  GitHub
                                </motion.a>
                              )}
                              {project.liveDemo !== "#" && (
                                <motion.a
                                  href={project.liveDemo}
                                  target="_blank"
                                  rel="noreferrer"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white hover:shadow-lg transition-shadow font-medium`}
                                >
                                  <ExternalLink size={18} />
                                  Live Demo
                                </motion.a>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
