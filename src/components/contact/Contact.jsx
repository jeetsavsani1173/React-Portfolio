import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Smartphone, Send, CheckCircle, Github, BookOpen } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "jeetsavsani1173@gmail.com",
      link: "mailto:jeetsavsani1173@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Smartphone,
      title: "WhatsApp",
      value: "+91 9313-484-034",
      link: "https://api.whatsapp.com/send?phone=9313484034&text=Hi%20Jeet!",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_8f0zzch",
        "template_b3m8hjv",
        form.current,
        "_k0iER1YecRrILeGi"
      );
      setSubmitted(true);
      form.current.reset();
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Email send failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
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
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Let's collaborate on something amazing. Reach out through your preferred channel.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, idx) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={method.link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ x: 5 }}
                      className="group flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 border border-blue-100 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {method.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm break-all">
                          {method.value}
                        </p>
                      </div>
                      <div className="flex-shrink-0 text-gray-400 group-hover:text-blue-500 transition-colors">
                        →
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                  Follow Me
                </p>
                <div className="flex gap-3">
                  <motion.a
                    href="https://www.linkedin.com/in/jeet-savsani-1b56b7201/"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                    aria-label="LinkedIn"
                  >
                    in
                  </motion.a>
                  <motion.a
                    href="https://github.com/jeetsavsani1173/"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href="https://medium.com/@jeetsavsani1173"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
                    aria-label="Medium"
                  >
                    <BookOpen size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading || submitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                    submitted
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg"
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
