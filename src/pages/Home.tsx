import React from 'react';
import {
  Rocket,
  BookOpen,
  PenTool as Tool,
  FileBarChart2,
  CheckCircle,
  Mail,
  ArrowRight,
  Code2,
  Target,
  GitPullRequest,
  Award,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-[#2D2D2D] to-[#FF6B00] text-white py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Welcome to the Test Automation Hub 🚀
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8 opacity-90"
          >
            Your go-to platform for automation testing knowledge, best practices, and collaboration!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              to="/getting-started"
              className="bg-white text-[#FF6B00] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-[#2D2D2D]">What is Automation Testing?</h2>
              <p className="text-gray-600 leading-relaxed">
                Automation testing is the practice of running tests automatically, managing test data, and utilizing results to improve software quality. It's an essential part of modern software development that helps teams deliver high-quality software faster.
              </p>
              <Link to="/getting-started" className="text-[#FF6B00] font-semibold inline-flex items-center">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-6">How does it add value?</h3>
              <ul className="space-y-4">
                {[
                  'Faster execution of test cases',
                  'Improved accuracy and reliability',
                  'Reduced manual testing effort',
                  'Continuous testing capability',
                  'Early bug detection'
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-[#FF6B00]" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Tools & Frameworks */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2D2D2D] mb-12">Tools & Frameworks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Selenium', icon: <Tool /> },
              { name: 'TestNG', icon: <Target /> },
              { name: 'Cucumber', icon: <GitPullRequest /> },
              { name: 'REST Assured', icon: <FileBarChart2 /> }
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-[#FF6B00] mb-4 flex justify-center">
                  {tool.icon}
                </div>
                <h3 className="font-semibold text-[#2D2D2D]">{tool.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Latest Updates */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2D2D2D] mb-12">Latest Updates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'New CI/CD Integration',
                date: 'Mar 2025',
                icon: <Rocket />
              },
              {
                title: 'Updated Coding Standards',
                date: 'Feb 2025',
                icon: <BookOpen />
              },
              {
                title: '90% Test Coverage Achieved',
                date: 'Jan 2025',
                icon: <Award />
              }
            ].map((update, index) => (
              <motion.div
                key={update.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="text-[#FF6B00] mb-4">{update.icon}</div>
                <h3 className="font-semibold text-[#2D2D2D] mb-2">{update.title}</h3>
                <p className="text-gray-600 text-sm">{update.date}</p>
                <a href="#" className="text-[#FF6B00] text-sm font-semibold inline-flex items-center mt-4">
                  Read more <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#2D2D2D] text-white py-12"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 mb-4"
              >
                <Code2 className="h-6 w-6 text-[#FF6B00]" />
                <span className="text-xl font-bold">Test Automation Hub</span>
              </motion.div>
              <p className="text-gray-400">
                Empowering teams with automation excellence
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Framework', 'Team', 'Contact'].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-[#FF6B00] transition-colors">
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-gray-400"
              >
                <Mail className="h-5 w-5" />
                <span>contact@testautomationhub.com</span>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
          >
            <p>&copy; 2025 Test Automation Hub. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
}

export default Home;