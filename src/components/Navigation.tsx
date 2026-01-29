"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full py-6 px-7 bg-background border-b border-border">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative">
        {/* Invisible spacer on desktop to balance the navigation width */}
        <div className="hidden md:block w-[230px]"></div>
        
        {/* Logo - Centered and larger */}
        <div className="flex justify-center mb-4 md:mb-0">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logoRounded.png"
              alt="67Time emblem"
              width={50}
              height={50}
              className="w-12 h-12 object-contain rounded-full"
            />
            <span className="text-3xl font-bold text-foreground">67Time</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 w-[230px] justify-end">
          <Link 
            href="mailto:support@67time.app"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Link 
            href="/terms" 
            className="text-foreground hover:text-primary transition-colors"
          >
            Terms
          </Link>
          <Link 
            href="/privacy" 
            className="text-foreground hover:text-primary transition-colors"
          >
            Privacy
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground absolute top-0 right-0 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <ChevronDown className={`w-6 h-6 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden absolute left-0 right-0 bg-card border-b border-border shadow-md z-20 mt-2 py-3 px-6">
          <nav className="flex flex-col space-y-3">
            <Link 
              href="mailto:support@67time.app"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/terms" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Terms
            </Link>
            <Link 
              href="/privacy" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Privacy
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
