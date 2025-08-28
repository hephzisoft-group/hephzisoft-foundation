import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", korean: "홈" },
    { name: "Our Story", href: "/our-story", korean: "우리 이야기" },
    { name: "Programs", href: "/programs", korean: "프로그램" },
    { name: "Get Involved", href: "/get-involved", korean: "참여하기" },
    { name: "Blog", href: "/blog", korean: "블로그" },
    { name: "Contact", href: "/contact", korean: "연락처" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg hanok-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-hope-blue to-emerald-growth rounded-full flex items-center justify-center">
              {/* Phoenix/Lotus logo placeholder - you can replace with actual SVG */}
              <div className="h-20 text-white rounded-lg flex items-center justify-center text-lg font-bold">
                <img
                  src={logo}
                  alt="Hephzisoft Foundation logo"
                  className="object-fill h-10 w-10 rounded-full "
                />
              </div>
            </div>
            <div>
              <div className="font-playfair-display font-bold text-lg text-charcoal-gray">
                Hephzisoft Foundation
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`group relative px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-hope-blue"
                    : "text-charcoal-gray hover:text-hope-blue"
                }`}
              >
                <span className="font-playfair-display">{item.name}</span>

                {location.pathname === item.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-hope-blue to-emerald-growth rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <span className="font-playfair-display">Donate</span>
            </Button>
            <Button variant="default" size="sm">
              <span className="font-playfair-display">Join Us</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-charcoal-gray hover:text-hope-blue transition-colors"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-hope-blue/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-hope-blue bg-hope-blue/10"
                    : "text-charcoal-gray hover:text-hope-blue hover:bg-hope-blue/5"
                }`}
              >
                <div className="font-playfair-display">{item.name}</div>
                <div className="text-sm font-noto-serif-kr text-soft-orchid/60">
                  {item.korean}
                </div>
              </Link>
            ))}
            <div className="flex space-x-2 px-3 pt-4">
              <Button variant="outline" size="sm" className="flex-1">
                Donate
              </Button>
              <Button variant="default" size="sm" className="flex-1">
                Join Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
