'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white hover:text-green-400 transition-colors">
              Irfan<span className="text-green-400">-sec</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-green-400 transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-green-400 focus:outline-none focus:text-green-400"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-gray-700">
              <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-green-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-300 hover:text-green-400 transition-colors">
                About
              </Link>
              <Link href="/projects" className="block px-3 py-2 text-gray-300 hover:text-green-400 transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-300 hover:text-green-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;