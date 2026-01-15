import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const About = () => {
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

  return (
    <section id="about" className="section py-16 sm:py-24 bg-white dark:bg-slate-800">
      <div className="container">
        <motion.div
          className="space-y-4 text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="section__title text-4xl font-bold text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Crafting scalable systems and innovative solutions
          </p>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 sm:p-10 border border-blue-200 dark:border-slate-500 space-y-6"
          >
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-200">
              Software Engineer at <span className="font-semibold">Crest Data</span> with expertise in building <span className="font-semibold">scalable microservices</span> and <span className="font-semibold">real-time data pipelines</span> processing millions of events daily.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wide">What I Did</h4>
              <ul className="space-y-2.5">
                <li className="flex gap-3 text-slate-700 dark:text-slate-200 text-sm sm:text-base">
                  <span className="text-blue-500 font-bold mt-1">→</span>
                  <span>Built robust microservices with <span className="font-semibold">Spring Boot, AWS Lambda, SQS, DynamoDB</span></span>
                </li>
                <li className="flex gap-3 text-slate-700 dark:text-slate-200 text-sm sm:text-base">
                  <span className="text-blue-500 font-bold mt-1">→</span>
                  <span>Engineered cloud-native environments using <span className="font-semibold">Docker, LocalStack, AWS services</span></span>
                </li>
                <li className="flex gap-3 text-slate-700 dark:text-slate-200 text-sm sm:text-base">
                  <span className="text-blue-500 font-bold mt-1">→</span>
                  <span>Developed full-stack applications with <span className="font-semibold">React, Next.js, Node.js, FastAPI</span></span>
                </li>
                <li className="flex gap-3 text-slate-700 dark:text-slate-200 text-sm sm:text-base">
                  <span className="text-blue-500 font-bold mt-1">→</span>
                  <span>Implemented real-time systems with <span className="font-semibold">WebSockets, Server-Sent Events, Socket.io</span></span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wide">Impact & Achievements</h4>
              <ul className="space-y-2.5">
                <li className="flex gap-3 text-slate-700 dark:text-slate-200 text-sm sm:text-base">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span><span className="font-semibold">60% faster data processing</span> by architecting serverless AWS Lambda pipelines</span>
                </li>
                <li className="flex gap-3 text-slate-700 dark:text-slate-200 text-sm sm:text-base">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span><span className="font-semibold">40% reduced support workload</span> through automated diagnostics platform</span>
                </li>
                <li className="flex gap-3 text-slate-700 dark:text-slate-200 text-sm sm:text-base">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span><span className="font-semibold">LeetCode Knight Badge</span> (1907 peak rating, Top 5% globally)</span>
                </li>
                <li className="flex gap-3 text-slate-700 dark:text-slate-200 text-sm sm:text-base">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>Co-organized <span className="font-semibold">DuHacks</span> - national hackathon with 5,000+ participants</span>
                </li>
              </ul>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 italic border-l-4 border-blue-500 pl-4">
              Open-source advocate | Ex. GDSC CP Lead | Passionate about solving complex problems and continuous learning
            </p>
          </motion.div>
        </motion.div>

        {/* Education & Quick Stats */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-slate-700 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-600"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <GraduationCap className="text-blue-600 dark:text-blue-400" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  B.Tech in Computer Science
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-1">
                  <span className="font-semibold">Dharmsinh Desai University</span>, Nadiad
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  Oct 2020 – Apr 2024 | CGPA: 8.22/10
                </p>
              </div>
            </div>
          </motion.div>

          {/* Current Role Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 shadow-lg text-white"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <Briefcase className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Software Engineer
                </h3>
                <p className="font-semibold opacity-90 mb-1">
                  Crest Data, Ahmedabad
                </p>
                <p className="text-sm opacity-75">
                  May 2024 – Present
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
