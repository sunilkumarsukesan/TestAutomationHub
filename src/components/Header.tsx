import React from 'react';
import { Code2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Getting Started', path: '/getting-started' },
    { name: 'Automation Framework', path: '/framework' },
    { name: 'Execution Reports', path: '/reports' },
    { name: 'Best Practices', path: '/best-practices' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 bg-white shadow-sm z-50"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-6 w-6 text-[#FF6B00]" />
              <span className="text-xl font-bold text-[#2D2D2D]">Test Automation Hub</span>
            </Link>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'text-[#FF6B00]'
                      : 'text-gray-600 hover:text-[#FF6B00]'
                  } transition-colors`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

export default Header;