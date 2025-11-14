'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/Netflix_Logo_PMS.png" 
            alt="Netflix" 
            width={100} 
            height={55}
            className="rounded"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/browse" className="hover:text-white transition">Browse</Link>
          <Link href="/my-list" className="hover:text-white transition">My List</Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white p-2 rounded hover:bg-white/10"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <path d="M6 18L18 6M6 6l12 12" />
              : <path d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <nav className="md:hidden bg-black/90 px-4 py-4 border-t border-white/10">
          <div className="flex flex-col gap-3 text-sm text-gray-200">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/browse" className="hover:text-white">Browse</Link>
            <Link href="/my-list" className="hover:text-white">My List</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
