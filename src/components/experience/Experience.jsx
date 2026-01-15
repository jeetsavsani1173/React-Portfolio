import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ArrowRight, ChevronDown } from "lucide-react";

const Experience = () => {
  const [expandedId, setExpandedId] = useState(0); // Open first item by default

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

  const experiences = [
    {
      role: "Software Engineer (E2)",
      company: "Crest Data",
      location: "Ahmedabad, Gujarat, India",
      type: "Full-time",
      startDate: "Apr 2025",
      endDate: "Present",
      duration: "10 mos",
      description: "Building real-time alert systems and serverless cloud pipelines",
      achievements: [
        "Constructed robust Spring Boot microservice to process AWS SQS FIFO alerts with dynamic Slack payload transformation",
        "Architected serverless AWS Lambda pipeline automating Dataminr-to-ArcGIS data transfers, eliminating 10 hours manual work weekly and boosting speed by 60%",
        "Engineered efficient local development environment using LocalStack and Docker for seamless AWS cloud service simulation",
        "Built scalable data storage solution using AWS DynamoDB and AWS Secrets Manager with enterprise-grade security",
        "Integrated downstream AWS SQS queues for real-time notification delivery with enriched Slack messaging",
        "Implemented feature flag mechanism for gradual rollouts, ensuring zero-downtime production stability",
      ],
      tech: ["Spring Boot", "Java", "AWS Lambda", "Amazon SQS", "DynamoDB", "LocalStack", "Docker", "Microservices"],
    },
    {
      role: "Software Engineer (E1)",
      company: "Crest Data",
      location: "Ahmedabad, Gujarat, India",
      type: "Full-time",
      startDate: "May 2024",
      endDate: "Apr 2025",
      duration: "1 yr",
      description: "Developed diagnostic tools and automated solutions for support operations",
      achievements: [
        "Designed and implemented Diagnostic Tool reducing support engineer workload by 40% through automated resolution of customer issues using FastAPI and React",
        "Created Python scripts utilizing Paramiko for robust SSH connectivity and remote command execution across distributed multi-node cluster systems",
        "Developed live logger streaming real-time log updates to frontend via Server-Sent Events (SSE) for optimized monitoring",
        "Engineered automated Quick Fix solution streamlining issue resolution and cutting support tickets by 20%",
        "Developed shell script validating Docker and Kubernetes configurations with comprehensive service status checks",
        "Successfully migrated NAS from CentOS 5 to RHEL with httpd file serving and HTTPS authentication via self-signed SSL certificate",
      ],
      tech: ["Python", "FastAPI", "React.js", "AWS Lambda", "Amazon SQS", "Linux", "Shell Scripting", "Docker", "Kubernetes"],
    },
    {
      role: "Software Engineer (E0)",
      company: "Crest Data",
      location: "Ahmedabad, Gujarat, India",
      type: "Internship",
      startDate: "Nov 2023",
      endDate: "May 2024",
      duration: "7 mos",
      description: "Modernized legacy UI and implemented real-time tracking systems",
      achievements: [
        "Led UI Modernization project migrating legacy Backbone.js and jQuery to React, achieving 25% improvement in user experience and performance",
        "Integrated WebSocket functionality achieving 30% improvement in real-time EPS (Events Per Second) tracking efficiency",
        "Leveraged Splunk UI Library developing interactive chart visualizations and integrating built-in components for UI consistency",
        "Employed Redux Toolkit for efficient global state management, enabling seamless request status and data fetching across application",
      ],
      tech: ["React.js", "TypeScript", "JavaScript", "Redux Toolkit", "Spring Boot", "Core Java", "JUnit", "Mockito"],
    },
    {
      role: "CP (Competitive Programming) Team Lead",
      company: "Google Developer Student Clubs",
      location: "Dharmsinh Desai University, Nadiad",
      type: "Part-time",
      startDate: "Sep 2022",
      endDate: "May 2024",
      duration: "1 yr 9 mos",
      description: "Led competitive programming initiatives and mentored students on DSA",
      achievements: [
        "Led and mentored students on Data Structures and Algorithms through interactive CP contests and coding sessions",
        "Organized and coordinated competitive programming workshops and problem-solving contests",
        "Developed problem-solving strategies and helped students improve their analytical and coding skills",
        "Fostered collaborative learning environment promoting best practices in Object-Oriented Programming",
      ],
      tech: ["C++", "Data Structures", "Algorithms", "Problem Solving", "Object-Oriented Programming"],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12 sm:space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Professional Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Building scalable systems, solving complex problems, and driving impact
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative space-y-8 sm:space-y-12">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden sm:block"></div>

            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative sm:pl-24 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 hidden sm:block -translate-x-1.5 group-hover:scale-125 transition-transform"></div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-xl p-6 sm:p-7 border border-blue-100 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-colors backdrop-blur-sm cursor-pointer"
                  onClick={() => setExpandedId(expandedId === idx ? -1 : idx)}
                >
                  {/* Header */}
                  <div className="space-y-3 mb-5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="inline-block text-xs sm:text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                          {exp.type}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`text-gray-600 dark:text-gray-400 transition-transform ${
                            expandedId === idx ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-base">
                      {exp.company}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-sm text-gray-600 dark:text-gray-400 mb-5">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-blue-500 flex-shrink-0" />
                      <span>{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-blue-500 flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
                    {exp.description}
                  </p>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedId === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t border-blue-200 dark:border-gray-600 space-y-5">
                          {/* Achievements */}
                          <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                              Key Achievements
                            </h4>
                            <div className="space-y-3">
                              {exp.achievements.map((achievement, aidx) => (
                                <div key={aidx} className="flex gap-3">
                                  <ArrowRight className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
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
                              {exp.tech.map((tech, tidx) => (
                                <span
                                  key={tidx}
                                  className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
