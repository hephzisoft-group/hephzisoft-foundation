import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <footer className="bg-charcoal-gray text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo and mission */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-hope-blue to-emerald-growth rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 text-white flex items-center justify-center text-lg font-bold">
                    🐦
                  </div>
                </div>
                <div>
                  <div className="font-sora font-bold text-xl text-white">
                    Hephzisoft Foundation
                  </div>
                  <div className="text-sm text-emerald-growth font-noto-serif-kr">
                    청년의 성장과 자유를 위하여
                  </div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Empowering emotionally and socially isolated youth (ages 15–25) 
                to discover purpose, build confidence, and achieve financial freedom 
                through our comprehensive 4-phase program.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons */}
                <div className="w-10 h-10 bg-hope-blue/20 hover:bg-hope-blue/30 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-hope-blue">📘</span>
                </div>
                <div className="w-10 h-10 bg-hope-blue/20 hover:bg-hope-blue/30 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-hope-blue">📷</span>
                </div>
                <div className="w-10 h-10 bg-hope-blue/20 hover:bg-hope-blue/30 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-hope-blue">🐦</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-sora font-semibold text-lg mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/programs" className="text-white/70 hover:text-hope-blue transition-colors">Programs</a></li>
                <li><a href="/our-story" className="text-white/70 hover:text-hope-blue transition-colors">Our Story</a></li>
                <li><a href="/get-involved" className="text-white/70 hover:text-hope-blue transition-colors">Get Involved</a></li>
                <li><a href="/blog" className="text-white/70 hover:text-hope-blue transition-colors">Blog</a></li>
                <li><a href="/contact" className="text-white/70 hover:text-hope-blue transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-sora font-semibold text-lg mb-4 text-white">Contact</h3>
              <div className="space-y-3 text-white/70">
                <div>
                  <div className="font-noto-serif-kr text-emerald-growth mb-1">서울 본부</div>
                  <div className="text-sm">Seoul, South Korea</div>
                </div>
                <div>
                  <div className="text-sm">info@hephzisoftfoundation.org</div>
                </div>
                <div>
                  <div className="text-sm">+82 (0)2 XXXX XXXX</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60 text-sm">
                © 2025 Hephzisoft Foundation. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="/privacy" className="text-white/60 hover:text-hope-blue transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-white/60 hover:text-hope-blue transition-colors">
                  Terms of Service
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
