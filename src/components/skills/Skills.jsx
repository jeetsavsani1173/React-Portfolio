import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Zap,
  Cloud,
  MessageCircle,
  Palette,
  Wrench,
  GitBranch,
  Box,
  Shield,
  Coffee,
  Server,
  Layers,
  Braces,
  Package,
  Leaf,
  Cylinder,
  Gauge,
  Radio,
} from "lucide-react";

const Skills = () => {
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

  const skillIcons = {
    "Java": Coffee,
    "Python": Code,
    "JavaScript": Braces,
    "TypeScript": Braces,
    "C/C++": Code,
    "React.js": Zap,
    "Next.js": Package,
    "Material-UI": Palette,
    "Tailwind CSS": Palette,
    "Spring Boot": Shield,
    "Node.js": Package,
    "Express.js": Server,
    "FastAPI": Zap,
    "PostgreSQL": Cylinder,
    "MongoDB": Leaf,
    "DynamoDB": Database,
    "Redis": Gauge,
    "AWS": Cloud,
    "Docker": Box,
    "Kubernetes": Layers,
    "Git": GitBranch,
    "CI/CD": Wrench,
    "Apache Kafka": Radio,
    "Amazon SQS": MessageCircle,
    "Socket.io": Radio,
  };

  const skills = [
    { category: "Languages", icon: Code, items: ["Java", "Python", "JavaScript", "TypeScript", "C/C++"] },
    { category: "Frontend", icon: Palette, items: ["React.js", "Next.js", "Material-UI", "Tailwind CSS"] },
    { category: "Backend", icon: Zap, items: ["Spring Boot", "Node.js", "Express.js", "FastAPI"] },
    { category: "Databases", icon: Database, items: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis"] },
    { category: "Cloud & DevOps", icon: Cloud, items: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD"] },
    { category: "Messaging", icon: MessageCircle, items: ["Apache Kafka", "Amazon SQS", "Socket.io"] },
  ];

  const essentials = [
    { name: "Git", icon: GitBranch },
    { name: "Docker", icon: Box },
    { name: "AWS", icon: Cloud },
    { name: "VS Code", icon: Code },
    { name: "IntelliJ IDEA", icon: Wrench },
    { name: "Postman", icon: Shield },
  ];

  return (
    <section className="skills section py-16 sm:py-24 bg-white dark:bg-slate-800" id="skills">
      <div className="container">
        <motion.div
          className="space-y-4 text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            My technical expertise
          </p>
        </motion.div>

        {/* Technical Expertise */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-md border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <skillGroup.icon size={20} className="text-blue-600 dark:text-blue-400" />
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sidx) => {
                    const SkillIcon = skillIcons[skill] || Code;
                    return (
                      <motion.div
                        key={sidx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors cursor-pointer"
                      >
                        <SkillIcon size={16} />
                        {skill}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Essential Tools */}
        <motion.div
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Essential Tools & Platforms
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {essentials.map((tool, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-md border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all flex flex-col items-center justify-center gap-3 cursor-pointer"
              >
                <tool.icon className="text-blue-600 dark:text-blue-400" size={32} />
                <p className="text-sm font-semibold text-slate-900 dark:text-white text-center">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
