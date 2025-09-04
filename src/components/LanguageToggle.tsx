import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'kr' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="font-medium text-main hover:text-accent hover:bg-accent/10"
    >
      {language === 'en' ? (
        <span className="flex items-center space-x-1">
          <span>한국어</span>
          <span className="text-xs">🇰🇷</span>
        </span>
      ) : (
        <span className="flex items-center space-x-1">
          <span>English</span>
          <span className="text-xs">🇺🇸</span>
        </span>
      )}
    </Button>
  );
};

export default LanguageToggle;
