import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-hope-blue/8 via-soft-grey to-emerald-growth/4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Korean-inspired patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-soft-orchid/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-golden-light/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-hope-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Tagline in Korean */}
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-soft-orchid/15 rounded-full text-soft-orchid font-noto-serif-kr text-sm font-semibold border border-soft-orchid/20">
                청년의 성장과 자유를 위하여
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl lg:text-7xl font-bold font-sora mb-6 leading-tight">
              <span className="text-charcoal-gray">Empowering</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hope-blue via-emerald-growth to-golden-light">
                Youth to Rise
              </span>
            </h1>

            {/* Mission statement */}
            <div className="mb-8 space-y-4">
              <p className="text-xl text-charcoal-gray/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We guide emotionally and socially isolated youth (ages 15–25) on a transformative journey 
                to discover purpose, build confidence, and achieve financial freedom.
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-emerald-growth">
                <div className="w-2 h-2 bg-emerald-growth rounded-full"></div>
                <span className="font-noto-serif-kr text-sm">
                  서울에서 시작된 희망의 여정
                </span>
                <div className="w-2 h-2 bg-emerald-growth rounded-full"></div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hope" size="lg" className="group">
                <span className="font-sora font-semibold">Join Our Community</span>
                <svg 
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <span className="font-sora font-semibold">Support Our Mission</span>
                <svg 
                  className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Button>
            </div>

            {/* Statistics */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div className="animate-slide-up">
                <div className="text-3xl font-bold font-sora text-hope-blue">500+</div>
                <div className="text-sm text-charcoal-gray/60 font-noto-serif-kr">청년들의 변화</div>
                <div className="text-xs text-charcoal-gray/60">Youth Transformed</div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold font-sora text-emerald-growth">85%</div>
                <div className="text-sm text-charcoal-gray/60 font-noto-serif-kr">성공률</div>
                <div className="text-xs text-charcoal-gray/60">Success Rate</div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold font-sora text-golden-light">12</div>
                <div className="text-sm text-charcoal-gray/60 font-noto-serif-kr">국가</div>
                <div className="text-xs text-charcoal-gray/60">Countries</div>
              </div>
            </div>
          </div>

          {/* Visual Element - Phoenix Rising */}
          <div className="relative flex items-center justify-center lg:justify-end animate-phoenix-rise">
            <div className="relative w-96 h-96">
              {/* Lotus base */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-40 bg-gradient-to-t from-emerald-growth/20 to-transparent rounded-full blur-sm"></div>
              
              {/* Phoenix placeholder - you can replace with actual SVG */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-golden-light via-hope-blue to-soft-orchid rounded-full flex items-center justify-center text-8xl">
                  🐦‍🔥
                </div>
              </div>
              
              {/* Hanok roofline silhouette */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-full h-16">
                <div className="w-full h-4 bg-gradient-to-r from-transparent via-charcoal-gray/20 to-transparent rounded-full"></div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-gradient-to-r from-transparent via-golden-light/30 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2 text-charcoal-gray/40">
            <span className="text-xs font-noto-serif-kr">아래로 스크롤</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
