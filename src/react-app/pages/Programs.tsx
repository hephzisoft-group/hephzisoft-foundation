import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Programs = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      number: 1,
      title: "Self-Discovery",
      korean: "자아 발견",
      tagline: "Know Yourself, Find Your Purpose",
      taglineKr: "자신을 알고, 목적을 찾다",
      description: "Our journey begins with deep introspection and guided self-exploration. Youth learn to identify their core values, unique strengths, and authentic desires while developing emotional intelligence and self-awareness.",
      duration: "3-6 months",
      sessions: "Weekly 1-on-1 mentoring + Bi-weekly group sessions",
      color: "hope-blue",
      icon: "🔍",
      keyAreas: [
        {
          title: "Personal Values Clarification",
          korean: "개인 가치 명확화",
          description: "Identify what truly matters to you through reflective exercises and value assessment tools."
        },
        {
          title: "Strength Identification", 
          korean: "강점 발견",
          description: "Discover your natural talents and abilities using proven assessment methods."
        },
        {
          title: "Emotional Intelligence Development",
          korean: "감정 지능 개발", 
          description: "Learn to understand, manage, and express emotions in healthy ways."
        },
        {
          title: "Goal Setting Framework",
          korean: "목표 설정 체계",
          description: "Create meaningful, achievable goals aligned with your values and strengths."
        }
      ],
      outcomes: [
        "Clear understanding of personal identity and values",
        "Identification of natural strengths and talents", 
        "Improved emotional awareness and regulation",
        "Personal mission statement and life vision"
      ]
    },
    {
      number: 2,
      title: "Worldview Shift",
      korean: "세계관 전환", 
      tagline: "Expand Your Perspective, Embrace Possibility",
      taglineKr: "관점을 넓히고, 가능성을 받아들이다",
      description: "Challenge limiting beliefs and expand your understanding of what's possible. Through cultural exchange, global awareness, and critical thinking development, youth break free from constrained mindsets.",
      duration: "2-4 months",
      sessions: "Bi-weekly workshops + Monthly cultural immersion experiences",
      color: "soft-orchid",
      icon: "🌍",
      keyAreas: [
        {
          title: "Cultural Competency Development",
          korean: "문화적 역량 개발",
          description: "Gain appreciation and understanding of diverse cultures and perspectives."
        },
        {
          title: "Critical Thinking Skills",
          korean: "비판적 사고 능력",
          description: "Learn to analyze information objectively and make informed decisions."
        },
        {
          title: "Growth Mindset Cultivation", 
          korean: "성장 마인드셋 함양",
          description: "Develop belief in your ability to learn, grow, and overcome challenges."
        },
        {
          title: "Global Perspective Building",
          korean: "세계적 관점 구축", 
          description: "Understand your role in the global community and interconnected world."
        }
      ],
      outcomes: [
        "Expanded worldview and cultural awareness",
        "Enhanced critical thinking abilities",
        "Stronger growth mindset and resilience",
        "Global citizenship perspective"
      ]
    },
    {
      number: 3,
      title: "Mindset Shift",
      korean: "사고방식 변화",
      tagline: "Transform Your Thinking, Transform Your Life", 
      taglineKr: "생각을 바꾸면, 인생이 바뀐다",
      description: "Develop the mental frameworks for success through resilience training, confidence building, and leadership development. Learn to overcome fear, embrace challenges, and lead with purpose.",
      duration: "4-6 months",
      sessions: "Weekly coaching sessions + Monthly leadership workshops",
      color: "emerald-growth",
      icon: "🧠",
      keyAreas: [
        {
          title: "Resilience Building",
          korean: "회복력 구축",
          description: "Develop the ability to bounce back from setbacks and adapt to change."
        },
        {
          title: "Confidence Coaching",
          korean: "자신감 코칭", 
          description: "Build unshakeable self-confidence through proven psychological techniques."
        },
        {
          title: "Leadership Development",
          korean: "리더십 개발",
          description: "Learn to inspire and influence others while developing your leadership style."
        },
        {
          title: "Communication Mastery",
          korean: "의사소통 숙련",
          description: "Master verbal and non-verbal communication for personal and professional success."
        }
      ],
      outcomes: [
        "Unshakeable resilience and adaptability",
        "High self-confidence and self-esteem",
        "Strong leadership and influence skills", 
        "Excellent communication abilities"
      ]
    },
    {
      number: 4,
      title: "Money Mastery",
      korean: "경제적 자립",
      tagline: "Build Wealth, Create Freedom",
      taglineKr: "부를 쌓고, 자유를 창조하다", 
      description: "Develop financial literacy and entrepreneurial skills to achieve sustainable economic independence. Learn investment strategies, business development, and wealth-building principles.",
      duration: "6-12 months", 
      sessions: "Weekly financial workshops + Monthly business mentoring",
      color: "golden-light",
      icon: "💰",
      keyAreas: [
        {
          title: "Financial Literacy Foundation",
          korean: "금융 이해력 기초",
          description: "Master budgeting, saving, investing, and financial planning fundamentals."
        },
        {
          title: "Entrepreneurship Training",
          korean: "창업 교육",
          description: "Learn to identify opportunities, validate ideas, and build sustainable businesses."
        },
        {
          title: "Career Development Strategy",
          korean: "경력 개발 전략", 
          description: "Create a strategic career path aligned with your goals and market demands."
        },
        {
          title: "Investment & Wealth Building",
          korean: "투자 및 자산 구축",
          description: "Understand investment principles and strategies for long-term wealth creation."
        }
      ],
      outcomes: [
        "Strong financial literacy and money management skills",
        "Entrepreneurial mindset and business acumen",
        "Clear career strategy and professional growth plan",
        "Investment knowledge and wealth-building foundation"
      ]
    }
  ];

  const successStories = [
    {
      name: "김민준",
      nameEn: "Min-jun Kim",
      age: 23,
      phase: "Graduate", 
      image: "👨‍💼",
      story: "Started as a withdrawn college student struggling with direction. Through our 4-phase program, discovered his passion for design and launched a successful creative studio in Seoul.",
      storyKr: "방향성을 찾지 못해 고민하던 대학생에서 시작해, 4단계 프로그램을 통해 디자인에 대한 열정을 발견하고 서울에서 성공적인 창작 스튜디오를 운영하게 되었습니다.",
      outcome: "Founded design studio with 15+ employees",
      outcomeKr: "15명 이상의 직원을 둔 디자인 스튜디오 창립"
    },
    {
      name: "Sarah Chen", 
      age: 22,
      phase: "Phase 4",
      image: "👩‍🎓",
      story: "Overcame social anxiety and cultural barriers to become a confident leader. Now runs a successful youth advocacy organization in Vancouver while completing her MBA.",
      outcome: "Leading youth advocacy org + MBA candidate",
      outcomeKr: "청소년 권익 단체 운영 + MBA 과정 중"
    },
    {
      name: "이수현",
      nameEn: "Su-hyeon Lee", 
      age: 20,
      phase: "Phase 3",
      image: "👨‍💻",
      story: "Transformed from a gaming-addicted teenager to a motivated entrepreneur. Developed a mobile app that now has over 50,000 users.",
      storyKr: "게임 중독에 빠진 십대에서 동기부여된 기업가로 변신했습니다. 현재 5만 명 이상의 사용자를 보유한 모바일 앱을 개발했습니다.",
      outcome: "Mobile app with 50K+ users",
      outcomeKr: "5만명 이상 사용자의 모바일 앱 개발"
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Initial Assessment",
      korean: "초기 평가",
      description: "Complete our comprehensive questionnaire and have a video interview with our intake coordinator.",
      duration: "1-2 weeks"
    },
    {
      step: 2, 
      title: "Program Matching",
      korean: "프로그램 매칭",
      description: "Based on your assessment, we'll recommend the best starting phase and mentor pairing.",
      duration: "1 week"
    },
    {
      step: 3,
      title: "Mentor Introduction", 
      korean: "멘토 소개",
      description: "Meet your assigned mentor and begin building the relationship that will guide your journey.",
      duration: "1 week"
    },
    {
      step: 4,
      title: "Program Kickoff",
      korean: "프로그램 시작",
      description: "Start your transformation journey with a personalized roadmap and support system.",
      duration: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-soft-grey to-hope-blue/3">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-hope-blue/8 via-soft-grey to-emerald-growth/4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-emerald-growth/15 rounded-full text-emerald-growth font-noto-serif-kr text-lg font-semibold border border-emerald-growth/20 mb-6">
              변화의 여정을 시작하세요
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold font-sora mb-6 text-charcoal-gray">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-hope-blue via-emerald-growth to-golden-light">4-Phase</span> Programs
          </h1>
          <p className="text-xl text-charcoal-gray/70 max-w-4xl mx-auto mb-12 leading-relaxed">
            A comprehensive transformation journey designed specifically for youth aged 15-25. 
            Each phase builds upon the previous, creating lasting change and sustainable success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hope" size="lg">
              Apply Now
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Phase Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-sora mb-6 text-charcoal-gray">
              Transform Your Life in <span className="text-emerald-growth">Four Phases</span>
            </h2>
            <p className="text-lg text-charcoal-gray/70 max-w-3xl mx-auto">
              Each phase is carefully designed to build upon the previous, ensuring comprehensive growth and development.
            </p>
          </div>

          {/* Phase Navigation */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {phases.map((phase, index) => (
              <button
                key={phase.number}
                onClick={() => setActivePhase(index)}
                className={`px-6 py-3 rounded-lg font-sora font-semibold transition-all duration-300 ${
                  activePhase === index
                    ? `bg-${phase.color} text-white shadow-lg`
                    : 'bg-card text-charcoal-gray hover:bg-muted'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{phase.icon}</span>
                  <span>{phase.title}</span>
                </div>
                <div className="text-xs font-noto-serif-kr opacity-80">{phase.korean}</div>
              </button>
            ))}
          </div>

          {/* Active Phase Details */}
          <div className="bg-card rounded-2xl korean-shadow p-8 mb-16">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Phase Info */}
              <div className="lg:col-span-1">
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 bg-${phases[activePhase].color} rounded-full flex items-center justify-center text-white text-3xl mb-4 mx-auto shadow-lg`}>
                    {phases[activePhase].icon}
                  </div>
                  <div className={`text-3xl font-bold font-sora text-${phases[activePhase].color} mb-2`}>
                    Phase {phases[activePhase].number}
                  </div>
                  <h3 className="text-2xl font-bold font-sora text-charcoal-gray mb-2">
                    {phases[activePhase].title}
                  </h3>
                  <div className="font-noto-serif-kr text-soft-orchid text-lg font-semibold mb-4">
                    {phases[activePhase].korean}
                  </div>
                  <div className="text-sm text-charcoal-gray/60 mb-2">
                    {phases[activePhase].tagline}
                  </div>
                  <div className="text-sm font-noto-serif-kr text-soft-orchid/80">
                    {phases[activePhase].taglineKr}
                  </div>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className={`p-3 bg-${phases[activePhase].color}/10 rounded-lg`}>
                    <div className="font-semibold text-charcoal-gray">Duration</div>
                    <div className="text-charcoal-gray/70">{phases[activePhase].duration}</div>
                  </div>
                  <div className={`p-3 bg-${phases[activePhase].color}/10 rounded-lg`}>
                    <div className="font-semibold text-charcoal-gray">Format</div>
                    <div className="text-charcoal-gray/70">{phases[activePhase].sessions}</div>
                  </div>
                </div>
              </div>

              {/* Phase Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h4 className="text-xl font-bold font-sora text-charcoal-gray mb-4">Overview</h4>
                  <p className="text-charcoal-gray/80 leading-relaxed">
                    {phases[activePhase].description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold font-sora text-charcoal-gray mb-6">Key Learning Areas</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {phases[activePhase].keyAreas.map((area, idx) => (
                      <div key={idx} className="p-4 bg-background rounded-lg border border-border">
                        <h5 className="font-semibold text-charcoal-gray mb-1">{area.title}</h5>
                        <div className="text-sm font-noto-serif-kr text-soft-orchid/80 mb-2">{area.korean}</div>
                        <p className="text-sm text-charcoal-gray/70">{area.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold font-sora text-charcoal-gray mb-4">Expected Outcomes</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {phases[activePhase].outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-${phases[activePhase].color} rounded-full`}></div>
                        <span className="text-charcoal-gray/80 text-sm">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-sora mb-6 text-charcoal-gray">
              Success <span className="text-golden-light">Stories</span>
            </h2>
            <p className="text-lg font-noto-serif-kr text-emerald-growth mb-4">
              실제 변화를 이룬 청년들의 이야기
            </p>
            <p className="text-lg text-charcoal-gray/70">
              Real transformations from real people in our programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="korean-shadow hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{story.image}</div>
                    <h4 className="font-sora font-bold text-xl text-charcoal-gray">{story.name}</h4>
                    {story.nameEn && (
                      <div className="text-charcoal-gray/60 text-sm">{story.nameEn}</div>
                    )}
                    <div className="text-emerald-growth font-medium text-sm mt-1">
                      Age {story.age} • {story.phase}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <blockquote className="text-charcoal-gray/80 italic leading-relaxed text-sm">
                      "{story.story}"
                    </blockquote>
                    
                    {story.storyKr && (
                      <blockquote className="text-soft-orchid/80 italic text-sm font-noto-serif-kr leading-relaxed">
                        "{story.storyKr}"
                      </blockquote>
                    )}

                    <div className="border-t border-border pt-4">
                      <div className="text-xs text-charcoal-gray/60 mb-1">Current Achievement</div>
                      <div className="font-semibold text-charcoal-gray text-sm">{story.outcome}</div>
                      {story.outcomeKr && (
                        <div className="text-soft-orchid text-sm font-noto-serif-kr">{story.outcomeKr}</div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-sora mb-6 text-charcoal-gray">
              Application <span className="text-hope-blue">Process</span>
            </h2>
            <p className="text-lg font-noto-serif-kr text-soft-orchid mb-4">
              간단한 4단계로 시작하세요
            </p>
            <p className="text-lg text-charcoal-gray/70">
              Getting started is easier than you think
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {applicationProcess.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-hope-blue text-white rounded-full flex items-center justify-center text-xl font-bold font-sora mx-auto shadow-lg">
                    {step.step}
                  </div>
                  {index < applicationProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-8 w-full h-0.5 bg-hope-blue/20"></div>
                  )}
                </div>
                <h4 className="font-sora font-bold text-lg text-charcoal-gray mb-2">{step.title}</h4>
                <div className="font-noto-serif-kr text-soft-orchid text-sm mb-3">{step.korean}</div>
                <p className="text-charcoal-gray/70 text-sm leading-relaxed mb-3">{step.description}</p>
                <div className="text-xs text-charcoal-gray/50">Timeline: {step.duration}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-hope-blue/10 to-emerald-growth/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-sora mb-4 text-charcoal-gray">Ready to Begin?</h3>
              <p className="text-lg font-noto-serif-kr text-soft-orchid mb-6">
                당신의 변화의 여정이 기다리고 있습니다
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hope" size="lg">
                  Start Your Application
                </Button>
                <Button variant="outline" size="lg">
                  Download Program Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
