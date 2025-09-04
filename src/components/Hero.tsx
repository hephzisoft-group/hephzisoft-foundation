import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { language, t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-accent/5 via-white to-main/5 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Minimalist background patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-fade-in"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-main/5 rounded-full blur-3xl animate-fade-in"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-fade-in"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Tagline */}
            <div className="mb-4">
              <span className={`inline-block px-4 py-2 bg-accent/10 rounded-full text-main ${language === 'kr' ? 'font-noto-sans-kr' : 'font-poppins'} text-sm font-semibold border border-accent/20`}>
                {t('footer.tagline')}
              </span>
            </div>

            {/* Main headline */}
            <h1 className={`text-4xl lg:text-6xl font-bold mb-6 leading-tight ${language === 'kr' ? 'font-noto-sans-kr' : 'font-poppins'}`}>
              <span className="text-main">{t('hero.title').split(' ').slice(0, -2).join(' ')}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-main to-accent">
                {t('hero.title').split(' ').slice(-2).join(' ')}
              </span>
            </h1>

            {/* Mission statement */}
            <div className="mb-8 space-y-4">
              <p className={`text-lg text-main/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed ${language === 'kr' ? 'font-noto-sans-kr' : 'font-poppins'}`}>
                {t('hero.subtitle')}
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-accent">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className={`text-sm ${language === 'kr' ? 'font-noto-sans-kr' : 'font-poppins'}`}>
                  Seoul, South Korea
                </span>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="lg" className="group">
                <span className={`font-semibold ${language === 'kr' ? 'font-noto-sans-kr' : 'font-poppins'}`}>
                  {t('hero.cta')}
                </span>
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>

              <Button variant="outline" size="lg" className="group">
                <span className={`font-semibold ${language === 'kr' ? 'font-noto-sans-kr' : 'font-poppins'}`}>
                  {t('hero.learnMore')}
                </span>
                <svg
                  className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Button>
            </div>

            {/* Statistics */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className={`text-3xl font-bold text-main ${language === 'kr' ? 'font-noto-sans-kr' : 'font-poppins'}`}>
                  500+
                </div>
                <div className={`text-sm text-main/60 ${language === 'kr' ? 'font-noto-sans-kr' : 'font-poppins'}`}>
                  {language === 'kr' ? '청년들의 변화' : 'Youth Transformed'}
                </div>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <div className={`text-3xl font-bold text-accent ${language === 'kr' ? 'font-noto-sans-kr' : 'font-poppins'}`}>
                  85%
                </div>
                <div className={`text-sm text-main/60 ${language === 'kr' ? 'font-noto-sans-kr' : 'font-poppins'}`}>
                  {language === 'kr' ? '성공률' : 'Success Rate'}
                </div>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                <div className={`text-3xl font-bold text-main ${language === 'kr' ? 'font-noto-sans-kr' : 'font-poppins'}`}>
                  12
                </div>
                <div className={`text-sm text-main/60 ${language === 'kr' ? 'font-noto-sans-kr' : 'font-poppins'}`}>
                  {language === 'kr' ? '국가' : 'Countries'}
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element - Minimalist Design */}
          <div className="relative flex items-center justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-80 h-80">
              {/* Base glow */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-gradient-to-t from-accent/10 to-transparent rounded-full blur-2xl"></div>

              {/* Main visual element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-accent/20 via-main/10 to-accent/10 rounded-full flex items-center justify-center text-6xl border border-accent/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  🐦‍🔥
                </div>
              </div>

              {/* Minimalist accent lines */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent rounded-full"></div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-main/30 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2 text-main/40">
            <span className={`text-xs ${language === 'kr' ? 'font-noto-sans-kr' : 'font-poppins'}`}>
              {language === 'kr' ? '아래로 스크롤' : 'Scroll down'}
            </span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
