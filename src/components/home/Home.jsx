import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowDown,
  Award,
  Briefcase,
  Star,
} from "lucide-react";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "backOut" },
    },
  };

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/jeetsavsani1173/",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/jeet-savsani-1b56b7201/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      url: "mailto:jeetsavsani1173@gmail.com",
      label: "Email",
    },
    {
      icon: Twitter,
      url: "https://twitter.com/SavsaniJeet",
      label: "Twitter",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "LeetCode Knight",
      subtitle: "Max Rating: 1907",
      color: "from-yellow-400 to-amber-500",
    },
    {
      icon: Briefcase,
      title: "Software Engineer",
      subtitle: "@Crest Data",
      color: "from-blue-400 to-purple-500",
    },
    {
      icon: Star,
      title: "FFE Scholar",
      subtitle: "Exceptional Achievement",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-14 sm:pt-16 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
          animate={{
            y: [0, -20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-8">
            {/* Greeting */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-block">
                <motion.span
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold"
                  variants={badgeVariants}
                >
                  ✨ Welcome to my portfolio
                </motion.span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-loose">
                <motion.span className="block" variants={itemVariants}>
                  Jeet Savsani
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-2"
                  variants={itemVariants}
                >
                  Software Engineer
                </motion.span>
              </h1>

              {/* Personality Tags */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-2"
              >
                {["Fast Learner", "Problem Solver", "Curious", "Team Player", "Detail-Oriented"].map(
                  (tag, idx) => (
                    <motion.span
                      key={idx}
                      variants={badgeVariants}
                      className="px-3 py-1 sm:px-4 sm:py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tag}
                    </motion.span>
                  )
                )}
              </motion.div>
            </motion.div>

            {/* Professional Summary */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl"
            >
              Software Engineer at <span className="font-semibold text-slate-700 dark:text-slate-300">Crest Data</span> building <span className="font-semibold text-slate-700 dark:text-slate-300">scalable microservices</span> with Spring Boot, AWS, Docker, and LocalStack. Architecting real-time data pipelines processing millions of realtime events daily. Full-stack expertise spanning React, Node.js, and cloud infrastructure.
            </motion.p>

            {/* Achievements Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 py-4 sm:py-6"
            >
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  variants={badgeVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-4 rounded-xl bg-gradient-to-br ${achievement.color} text-white shadow-lg backdrop-blur-sm`}
                >
                  <div className="flex items-start gap-3">
                    <achievement.icon size={24} className="flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-xs sm:text-sm">{achievement.title}</p>
                      <p className="text-xs opacity-90">{achievement.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg transition-shadow"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 font-semibold rounded-lg text-sm sm:text-base hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-3 pt-2 sm:pt-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 hover:bg-blue-500 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Hero Illustration */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex justify-center items-center"
          >
            <motion.div
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl overflow-hidden"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-purple-500/50 rounded-3xl backdrop-blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center text-6xl sm:text-7xl lg:text-8xl">
                💻
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
            Scroll to explore
          </p>
          <ArrowDown className="text-slate-400" size={24} />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
