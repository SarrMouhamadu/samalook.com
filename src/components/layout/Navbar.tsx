"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Navbar.module.css";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={cn(styles.header, isScrolled && styles.scrolled)}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            SamaLook
          </Link>

          <nav className={styles.navLinks}>
            <Link href="/montres">Montres</Link>
            <Link href="/accessoires">Accessoires</Link>
            <Link href="/histoire">Histoire</Link>
          </nav>

          <div className={styles.actions}>
            <button className={styles.cartBtn} aria-label="Panier">
              <ShoppingBag size={22} strokeWidth={1.5} />
            </button>
            <button 
              className={styles.menuBtn} 
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white z-[2000] flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-black"
            >
              <X size={32} strokeWidth={1} />
            </button>
            
            <nav className="flex flex-col gap-8 text-center">
              {['Montres', 'Accessoires', 'Histoire'].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase()}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl text-black hover:text-opacity-70 transition-colors"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
