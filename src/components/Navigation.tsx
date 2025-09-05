import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavPath = (path: string) => {
    return language === "kr" ? `/kr${path}` : path;
  };

  const navItems = [
    { key: "nav.home", href: "/" },
    { key: "nav.ourStory", href: "/our-story" },
    { key: "nav.programs", href: "/programs" },
    { key: "nav.getInvolved", href: "/get-involved" },
    { key: "nav.blog", href: "/blog" },
    { key: "nav.contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-main/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to={getNavPath("/")}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-main rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-6 h-6 text-white flex items-center justify-center text-lg font-bold">
                🐦
              </div>
            </div>
            <div>
              <div className="font-poppins font-bold text-lg text-main">
                Hephzisoft
              </div>
              <div
                className={`text-xs text-accent ${
                  language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                }`}
              >
                {t("footer.tagline")}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const itemPath = getNavPath(item.href);
              const isActive =
                location.pathname === itemPath ||
                (item.href === "/" && location.pathname === "/kr");
              return (
                <Link
                  key={item.key}
                  to={itemPath}
                  className={`group relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-accent" : "text-main hover:text-accent"
                  }`}
                >
                  <span
                    className={
                      language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                    }
                  >
                    {t(item.key)}
                  </span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button and Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <Button variant="outline" size="sm">
              <span
                className={
                  language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                }
              >
                {t("getInvolved.donate")}
              </span>
            </Button>
            <Button variant="cta" size="sm">
              <span
                className={
                  language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                }
              >
                {t("common.joinUs")}
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-main hover:text-accent transition-colors"
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
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-main/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const itemPath = getNavPath(item.href);
              const isActive =
                location.pathname === itemPath ||
                (item.href === "/" && location.pathname === "/kr");
              return (
                <Link
                  key={item.key}
                  to={itemPath}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "text-accent bg-accent/10"
                      : "text-main hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  <div
                    className={
                      language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                    }
                  >
                    {t(item.key)}
                  </div>
                </Link>
              );
            })}
            <div className="flex space-x-2 px-3 pt-4">
              <Button variant="outline" size="sm" className="flex-1">
                <span
                  className={
                    language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                  }
                >
                  {t("getInvolved.donate")}
                </span>
              </Button>
              <Button variant="cta" size="sm" className="flex-1">
                <span
                  className={
                    language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                  }
                >
                  {t("common.joinUs")}
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
