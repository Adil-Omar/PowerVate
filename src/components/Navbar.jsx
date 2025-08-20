import React, { useState, useRef, useEffect } from "react";
import { animate } from "framer-motion";
import { Mail } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { name: "Home", link: "home" },
    { name: "Features", link: "features" },
    { name: "How it works", link: "demo" },
    { name: "About Us", link: "about" },
    { name: "Testimonial", link: "testi" },
    { name: "Blog", link: "blog" },
  ];

  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  // close on escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Smooth scroll using framer-motion's animate
  const smoothScrollTo = (targetY, opts = {}) => {
    const scroller = document.scrollingElement || document.documentElement;
    const prefersReduced = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      scroller.scrollTo(0, targetY);
      return;
    }

    const duration = opts.duration ?? 0.8;
    const ease = opts.ease ?? [0.5, 0.8, 0.5, 1];

    // animate from current scrollTop -> targetY
    animate(scroller.scrollTop, targetY, {
      duration,
      ease,
      onUpdate(value) {
        scroller.scrollTo(0, value);
      },
    });
  };

  // scroll handler used by links
  const handleLinkClick = (e, id) => {
    // prevent default jump
    e.preventDefault();

    // find element with id
    const target = document.getElementById(id);
    if (!target) {
      // fallback to default behavior if not found
      const href = `#${id}`;
      window.location.hash = href;
      return;
    }

    // nav height offset (adjust if your navbar height differs)
    const navbarHeight = 72; // px
    const targetY = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    smoothScrollTo(targetY, { duration: 0.7 });

    // close mobile panel if open
    setOpen(false);
  };

  return (
    <div className="MyContainer py-5 text-white">
      <div className="flex h-[50px] items-center justify-between relative">
        <div>
          <img src="/Layer_1.png" alt="logo" />
        </div>

        <div className="hidden md:flex items-center lg:text-[16px] text-[13px] justify-center gap-5 lg:gap-9">
          {navLinks.map((nav, index) => {
            return (
              <a
                href={`#${nav.link}`}
                onClick={(e) => handleLinkClick(e, nav.link)}
                className="hover:text-[#896CFE] cursor-pointer"
                key={index}
              >
                {nav.name}
              </a>
            );
          })}
          <div>
            <button className="w-32 h-10 rounded-[30px] bg-[#896CFE] hover:bg-[#6b48f8] transition-all duration-200">
              Get The App
            </button>
          </div>
        </div>

        <div className="md:hidden">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="p-2 inline-flex z-40 cursor-pointer items-center justify-center"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-40 pointer-events-auto ${open ? "visible" : "invisible"}`}
        onClick={() => setOpen(false)}
      >
        <div className={`absolute inset-0 transition-opacity duration-300 ${open ? "opacity-60" : "opacity-0"} bg-black/50 backdrop-blur-sm`} />

        <div
          ref={panelRef}
          onClick={(e) => e.stopPropagation()}
          className={`absolute right-4 top-[72px] w-64 max-w-[90vw] rounded-2xl p-4 shadow-2xl
            bg-white/5 backdrop-blur-md ring-1 ring-white/10
            transform-gpu transition-all duration-250 origin-top-right
            ${open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
          style={{ transitionTimingFunction: "cubic-bezier(.2,.8,.2,1)" }}
        >
          <nav className="flex flex-col gap-3">
            {navLinks.map((nav, index) => (
              <a
                href={`#${nav.link}`}
                key={index}
                className="block hover:text-[#896CFE] cursor-pointer py-2 px-3 rounded-md hover:bg-white/6 transition"
                onClick={(e) => handleLinkClick(e, nav.link)}
              >
                {nav.name}
              </a>
            ))}

            <button
              className="w-full h-10 rounded-[30px] hover:bg-[#6b48f8] transition-all duration-200 bg-[#896CFE] mt-2"
              onClick={() => {
                // example: scroll to top (home)
                const el = document.getElementById("home");
                if (el) {
                  handleLinkClick(new Event("click"), "home");
                }
                setOpen(false);
              }}
            >
              Get The App
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
