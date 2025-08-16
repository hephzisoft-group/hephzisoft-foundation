import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Button } from "./ui/button";

const Programs = () => {
  const phases = [
    {
      number: 1,
      title: "Self-Discovery",
      korean: "자아 발견",
      description:
        "Helping youth understand their unique strengths, values, and potential through guided reflection and assessment.",
      duration: "3-6 months",
      benefits: [
        "Personal values clarification",
        "Strength identification",
        "Goal setting framework",
        "Emotional awareness",
      ],
      color: "hope-blue",
      icon: "🔍",
    },
    {
      number: 2,
      title: "Worldview Shift",
      korean: "세계관 전환",
      description:
        "Expanding perspectives and challenging limiting beliefs to create a foundation for growth and opportunity.",
      duration: "2-4 months",
      benefits: [
        "Cultural competency",
        "Critical thinking skills",
        "Growth mindset development",
        "Global perspective",
      ],
      color: "soft-orchid",
      icon: "🌍",
    },
    {
      number: 3,
      title: "Mindset Shift",
      korean: "사고방식 변화",
      description:
        "Developing resilience, confidence, and a success-oriented mindset to overcome challenges and seize opportunities.",
      duration: "4-6 months",
      benefits: [
        "Resilience building",
        "Confidence coaching",
        "Leadership skills",
        "Communication mastery",
      ],
      color: "emerald-growth",
      icon: "🧠",
    },
    {
      number: 4,
      title: "Money Mastery",
      korean: "경제적 자립",
      description:
        "Building financial literacy and entrepreneurial skills to achieve sustainable financial independence.",
      duration: "6-12 months",
      benefits: [
        "Financial literacy",
        "Entrepreneurship training",
        "Career development",
        "Investment basics",
      ],
      color: "golden-light",
      icon: "💰",
    },
  ];

  const testimonials = [
    {
      name: "김민준",
      nameEn: "Kim Min-jun",
      age: 23,
      quote:
        "The Self-Discovery phase helped me understand my true passions. I went from feeling lost to launching my own design studio.",
      quoteKr:
        "자아 발견 단계에서 제 진정한 열정을 발견했습니다. 방황하던 제가 이제는 디자인 스튜디오를 운영하고 있어요.",
      phase: "Graduate",
    },
    {
      name: "Sarah Chen",
      age: 22,
      quote:
        "The Mindset Shift program gave me confidence to pursue my dreams. I'm now leading a youth advocacy group in Canada.",
      phase: "Phase 3",
    },
    {
      name: "이수현",
      nameEn: "Lee Su-hyeon",
      age: 20,
      quote:
        "Money Mastery taught me skills I never learned in school. I'm building my first business while still in university.",
      quoteKr:
        "경제적 자립 프로그램에서 학교에서 배우지 못한 것들을 배웠어요. 대학생이면서도 첫 번째 사업을 시작했습니다.",
      phase: "Phase 4",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-soft-grey to-hope-blue/3">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-emerald-growth/10 text-emerald-growth font-noto-serif-kr">
              변화의 여정
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl font-sora text-charcoal-gray">
            Our <span className="text-emerald-growth">4-Phase</span> Empowerment
            Model
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-charcoal-gray/70">
            A structured journey designed to transform isolated youth into
            confident, financially independent leaders ready to make their mark
            on the world.
          </p>
        </div>

        {/* Phases Grid */}
        <div className="grid gap-8 mb-20 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase, index) => (
            <Card
              key={phase.number}
              className={`group relative overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up border-l-4 border-l-${phase.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Phase number indicator */}
              <div
                className={`absolute top-4 right-4 w-8 h-8 bg-${phase.color} text-white rounded-full flex items-center justify-center text-sm font-bold font-sora`}
              >
                {phase.number}
              </div>

              <CardHeader className="pb-4">
                <div className="mb-4 text-4xl transition-transform group-hover:scale-110">
                  {phase.icon}
                </div>
                <CardTitle className="mb-2 text-lg">{phase.title}</CardTitle>
                <div className="mb-2 text-sm font-noto-serif-kr text-soft-orchid">
                  {phase.korean}
                </div>
                <CardDescription className="text-sm">
                  {phase.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <div
                    className={`text-xs font-semibold text-${phase.color} mb-2`}
                  >
                    Duration: {phase.duration}
                  </div>
                  <div className="mb-3 text-xs text-charcoal-gray/60">
                    Key Benefits:
                  </div>
                  <ul className="space-y-1">
                    {phase.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs text-charcoal-gray/70"
                      >
                        <div
                          className={`w-1.5 h-1.5 bg-${phase.color} rounded-full mr-2`}
                        ></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Program Flow Visualization */}
        <div className="mb-20">
          <div className="relative">
            {/* Connection lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-hope-blue via-emerald-growth to-golden-light opacity-30"></div>

            {/* Milestone markers */}
            <div className="flex items-center justify-between">
              {phases.map((phase) => (
                <div
                  key={phase.number}
                  className="relative flex flex-col items-center"
                >
                  <div
                    className={`w-16 h-16 bg-${phase.color} rounded-full flex items-center justify-center text-white text-xl mb-4 shadow-lg`}
                  >
                    {phase.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold font-sora text-charcoal-gray">
                      {phase.title}
                    </div>
                    <div className="text-xs font-noto-serif-kr text-soft-orchid">
                      {phase.korean}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="mb-12 text-3xl font-bold text-center font-sora text-charcoal-gray">
            Success Stories
            <span className="block mt-2 text-lg font-noto-serif-kr text-emerald-growth">
              성공 이야기
            </span>
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="transition-shadow duration-300 korean-shadow hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold font-sora text-charcoal-gray">
                          {testimonial.name}
                        </h4>
                        {testimonial.nameEn && (
                          <div className="text-sm text-charcoal-gray/60">
                            {testimonial.nameEn}
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-emerald-growth">
                          Age {testimonial.age}
                        </div>
                        <div className="text-xs text-soft-orchid">
                          {testimonial.phase}
                        </div>
                      </div>
                    </div>
                  </div>

                  <blockquote className="mb-4 italic text-charcoal-gray/80">
                    "{testimonial.quote}"
                  </blockquote>

                  {testimonial.quoteKr && (
                    <blockquote className="text-sm italic text-soft-orchid/80 font-noto-serif-kr">
                      "{testimonial.quoteKr}"
                    </blockquote>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-12 text-center bg-gradient-to-r from-hope-blue/10 to-emerald-growth/10 rounded-2xl">
          <h3 className="mb-4 text-3xl font-bold font-sora text-charcoal-gray">
            Ready to Begin Your Journey?
          </h3>
          <p className="mb-8 text-lg text-charcoal-gray/70 font-noto-serif-kr">
            당신의 변화의 여정을 시작해보세요
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="hope" size="lg">
              Apply for Programs
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
