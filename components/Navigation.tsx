'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMenuOpen(false);
      if (pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push(`/${href}`);
      }
    }
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-orange font-extrabold tracking-tight">
              CP
            </span>
            <span className="text-2xl font-bold text-navy">COR Pathways</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              onClick={(e) => handleAnchorClick(e, '#features')}
              className="text-gray-700 hover:text-orange transition-colors"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => handleAnchorClick(e, '#how-it-works')}
              className="text-gray-700 hover:text-orange transition-colors"
            >
              How It Works
            </a>
            <Link
              href="/pricing"
              aria-current={pathname === '/pricing' ? 'page' : undefined}
              className={`transition-colors ${
                pathname === '/pricing'
                  ? 'text-orange font-semibold'
                  : 'text-gray-700 hover:text-orange'
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              aria-current={pathname === '/about' ? 'page' : undefined}
              className={`transition-colors ${
                pathname === '/about'
                  ? 'text-orange font-semibold'
                  : 'text-gray-700 hover:text-orange'
              }`}
            >
              About
            </Link>
            <Link
              href="/signup"
              className="bg-orange text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              <a 
                href="#features" 
                onClick={(e) => handleAnchorClick(e, '#features')}
                className="text-gray-700 hover:text-orange transition-colors"
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                onClick={(e) => handleAnchorClick(e, '#how-it-works')}
                className="text-gray-700 hover:text-orange transition-colors"
              >
                How It Works
              </a>
              <Link
                href="/pricing"
                onClick={() => setIsMenuOpen(false)}
                aria-current={pathname === '/pricing' ? 'page' : undefined}
                className={`transition-colors ${
                  pathname === '/pricing'
                    ? 'text-orange font-semibold'
                    : 'text-gray-700 hover:text-orange'
                }`}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                aria-current={pathname === '/about' ? 'page' : undefined}
                className={`transition-colors ${
                  pathname === '/about'
                    ? 'text-orange font-semibold'
                    : 'text-gray-700 hover:text-orange'
                }`}
              >
                About
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="bg-orange text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors text-center"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
