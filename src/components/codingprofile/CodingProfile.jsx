import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Trophy, Code2, Zap } from "lucide-react";

const CodingProfile = () => {
  const [activeTab, setActiveTab] = useState(0);

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

  const platforms = [
    {
      id: 0,
      name: "LeetCode",
      icon: Code2,
      gradient: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-300 dark:border-orange-700",
      stats: {
        rating: "1907",
        rank: "Knight",
        problemsSolved: "450+",
        languages: ["Java", "Python", "JavaScript"],
        achievement: "Highest Rating Badge",
      },
      description: "Problem-solving on LeetCode with focus on algorithms and data structures.",
      link: "https://leetcode.com/jeetsavsani1173/",
    },
    {
      id: 1,
      name: "CodeChef",
      icon: Trophy,
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-300 dark:border-red-700",
      stats: {
        rating: "1600+",
        rank: "3-star Coder",
        contestsParticipated: "15+",
        maxRating: "1733",
        languages: ["C++", "Python", "Java"],
      },
      description: "Competitive programming with consistent participation in monthly contests.",
      link: "https://www.codechef.com/users/jeetsavsani117",
    },
    {
      id: 2,
      name: "Codeforces",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-300 dark:border-blue-700",
      stats: {
        rating: "1400+",
        rank: "Expert",
        contestsParticipated: "20+",
        maxRating: "1637",
        languages: ["C++", "Python"],
      },
      description: "Competitive contests focused on algorithmic problem-solving.",
      link: "https://codeforces.com/profile/jeetsavsani117",
    },
  ];

  return (
    <section id="codingprofile" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
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
              Coding Profiles
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My competitive programming journey across multiple platforms
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={itemVariants}>
            <div className="flex gap-3 mb-8 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
              {platforms.map((platform, idx) => {
                const Icon = platform.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-2 px-4 sm:px-6 py-3 whitespace-nowrap border-b-2 transition-all font-medium ${
                      activeTab === idx
                        ? `border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20`
                        : `border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300`
                    }`}
                  >
                    <Icon size={20} />
                    <span className="hidden sm:inline">{platform.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {platforms.map((platform, idx) => (
                activeTab === idx && (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`${platform.bgColor} border ${platform.borderColor} rounded-xl p-6 sm:p-8`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${platform.gradient} bg-clip-text text-transparent mb-2`}>
                          {platform.name}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          {platform.description}
                        </p>
                      </div>
                      <motion.a
                        href={platform.link}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${platform.gradient} text-white font-semibold hover:shadow-lg transition-shadow flex-shrink-0`}
                      >
                        <span className="hidden sm:inline">View Profile</span>
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                      {Object.entries(platform.stats).map(([key, value], sidx) => (
                        <motion.div
                          key={sidx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: sidx * 0.1 }}
                          className="bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-lg p-4 text-center border border-white/20 dark:border-gray-700/20"
                        >
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider font-semibold mb-2">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </p>
                          {Array.isArray(value) ? (
                            <div className="flex flex-wrap gap-2 justify-center">
                              {value.map((lang, lidx) => (
                                <span
                                  key={lidx}
                                  className={`inline-block px-2 py-1 bg-gradient-to-r ${platform.gradient} text-white text-xs rounded font-medium`}
                                >
                                  {lang}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <p className={`text-lg sm:text-2xl font-bold bg-gradient-to-r ${platform.gradient} bg-clip-text text-transparent`}>
                              {value}
                            </p>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfile;
