import React from "react";
import Navigation from "./Navigation";
import { useLanguage } from "../contexts/LanguageContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navigation />
      <main className="pt-16">{children}</main>
      <footer className="py-16 text-white bg-main">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-8 mb-12 md:grid-cols-4">
            {/* Logo and mission */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6 space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-accent to-main">
                  <div className="flex items-center justify-center w-6 h-6 text-lg font-bold text-white">
                    🐦
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white font-poppins">
                    Hephzisoft Foundation
                  </div>
                  <div
                    className={`text-sm text-accent ${
                      language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                    }`}
                  >
                    {t("footer.tagline")}
                  </div>
                </div>
              </div>
              <p
                className={`mb-6 leading-relaxed text-white/80 ${
                  language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                }`}
              >
                {t("footer.description")}
              </p>
              <div className="flex space-x-4">
                {/* Social media icons */}
                <div className="flex items-center justify-center w-10 h-10 transition-all duration-200 rounded-full cursor-pointer bg-accent/20 hover:bg-accent/30 hover:scale-110">
                  <span className="text-accent">📘</span>
                </div>
                <div className="flex items-center justify-center w-10 h-10 transition-all duration-200 rounded-full cursor-pointer bg-accent/20 hover:bg-accent/30 hover:scale-110">
                  <span className="text-accent">📷</span>
                </div>
                <div className="flex items-center justify-center w-10 h-10 transition-all duration-200 rounded-full cursor-pointer bg-accent/20 hover:bg-accent/30 hover:scale-110">
                  <span className="text-accent">🐦</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3
                className={`mb-4 text-lg font-semibold text-white ${
                  language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                }`}
              >
                {t("footer.quickLinks")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href={language === "kr" ? "/kr/programs" : "/programs"}
                    className={`transition-colors text-white/70 hover:text-accent ${
                      language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                    }`}
                  >
                    {t("nav.programs")}
                  </a>
                </li>
                <li>
                  <a
                    href={language === "kr" ? "/kr/our-story" : "/our-story"}
                    className={`transition-colors text-white/70 hover:text-accent ${
                      language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                    }`}
                  >
                    {t("nav.ourStory")}
                  </a>
                </li>
                <li>
                  <a
                    href={
                      language === "kr" ? "/kr/get-involved" : "/get-involved"
                    }
                    className={`transition-colors text-white/70 hover:text-accent ${
                      language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                    }`}
                  >
                    {t("nav.getInvolved")}
                  </a>
                </li>
                <li>
                  <a
                    href={language === "kr" ? "/kr/blog" : "/blog"}
                    className={`transition-colors text-white/70 hover:text-accent ${
                      language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                    }`}
                  >
                    {t("nav.blog")}
                  </a>
                </li>
                <li>
                  <a
                    href={language === "kr" ? "/kr/contact" : "/contact"}
                    className={`transition-colors text-white/70 hover:text-accent ${
                      language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                    }`}
                  >
                    {t("nav.contact")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3
                className={`mb-4 text-lg font-semibold text-white ${
                  language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                }`}
              >
                {t("footer.contact")}
              </h3>
              <div className="space-y-3 text-white/70">
                <div>
                  <div
                    className={`mb-1 text-accent ${
                      language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                    }`}
                  >
                    {t("footer.seoulOffice")}
                  </div>
                  <div
                    className={`text-sm ${
                      language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                    }`}
                  >
                    Seoul, South Korea
                  </div>
                </div>
                <div>
                  <div className="text-sm font-poppins">
                    info@hephzisoftfoundation.org
                  </div>
                </div>
                <div>
                  <div className="text-sm font-poppins">+82 (0)2 XXXX XXXX</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <div
                className={`text-sm text-white/60 ${
                  language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                }`}
              >
                {t("footer.rights")}
              </div>
              <div className="flex space-x-6 text-sm">
                <a
                  href="/privacy"
                  className={`transition-colors text-white/60 hover:text-accent ${
                    language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                  }`}
                >
                  {t("footer.privacy")}
                </a>
                <a
                  href="/terms"
                  className={`transition-colors text-white/60 hover:text-accent ${
                    language === "kr" ? "font-noto-serif-kr" : "font-poppins"
                  }`}
                >
                  {t("footer.terms")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
