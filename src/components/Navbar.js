'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore Items', path: '/items' },
  ];

  if (isAuthenticated) {
    navLinks.push({ name: 'Add Item', path: '/admin/add' });
  }

  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-strong py-3 shadow-lg shadow-black/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-300 to-indigo-400 bg-[length:200%_auto] animate-gradient">
              NextBrain
            </span>
            <div className="h-2.5 w-2.5 bg-indigo-400 rounded-full group-hover:animate-pulse shadow-[0_0_15px_#818cf8]"></div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  pathname === link.path 
                    ? 'text-indigo-400 bg-indigo-400/10' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {isAuthenticated ? (
              <button 
                onClick={handleLogout}
                className="ml-4 px-5 py-2.5 rounded-xl border border-slate-700/50 text-slate-300 text-sm font-semibold hover:bg-slate-800/70 hover:border-red-500/30 hover:text-red-400 transition-all duration-300"
              >
                Logout
              </button>
            ) : (
              <Link 
                href="/login"
                className="ml-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-bold hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none transition-colors p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-strong mt-2 mx-4 rounded-2xl border border-slate-700/50 animate-fade-in shadow-xl">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  pathname === link.path
                    ? 'text-indigo-400 bg-indigo-400/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <button 
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block w-full text-center mt-4 px-5 py-3 rounded-xl border border-slate-700/50 text-slate-300 font-semibold hover:bg-slate-800/70 hover:border-red-500/30 hover:text-red-400 transition-all duration-300"
              >
                Logout
              </button>
            ) : (
              <Link 
                href="/login"
                className="block w-full text-center mt-4 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

<style jsx>{`
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-gradient {
    animation: gradient 3s ease infinite;
  }
`}</style>
