"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Menu, Shield, X } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { verifyAdminAccess } from "@/lib/admin";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Currently Building", href: "#working-on" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const syncAdminState = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const authorized = await verifyAdminAccess(session?.access_token);

      if (isMounted) {
        setIsAdmin(authorized);
      }
    };

    syncAdminState();

    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      syncAdminState();
    });

    return () => {
      isMounted = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[#0a0a0a]/85 backdrop-blur-2xl border-b border-white/[0.07] shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-[60px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-white font-bold text-[1.1rem] tracking-tight hover:text-orange-400 transition-colors duration-200"
          >
            Prerna<span className="text-orange-500">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Resume/Admin CTA */}
          <div className="hidden md:flex items-center gap-2">
            {isAdmin && (
              <Link
                href="/admin"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-orange-400/30 bg-orange-500/10 hover:bg-orange-500/20 text-orange-200 text-sm font-semibold transition-all duration-200"
              >
                <Shield className="w-3.5 h-3.5" />
                Admin
              </Link>
            )}
            <a
              href="/PRERNA_SINGH_Resume.docx"
              download
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-all duration-200 hover:scale-[1.03] shadow-[0_0_16px_rgba(249,115,22,0.25)]"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-[#0a0a0a]/97 backdrop-blur-2xl border-b border-white/[0.07] px-6 py-5 flex flex-col gap-1 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-3 text-neutral-300 hover:text-white font-medium rounded-lg hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-white/[0.07]">
              {isAdmin && (
                <Link
                  href="/admin"
                  onClick={() => setMobileOpen(false)}
                  className="mb-2 flex items-center gap-2 px-4 py-2.5 rounded-lg border border-orange-400/30 bg-orange-500/10 text-orange-200 text-sm font-semibold w-fit"
                >
                  <Shield className="w-3.5 h-3.5" />
                  Admin
                </Link>
              )}
              <a
                href="/PRERNA_SINGH_Resume.docx"
                download
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-orange-500 text-white text-sm font-semibold w-fit"
              >
                <FileText className="w-3.5 h-3.5" />
                View Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
