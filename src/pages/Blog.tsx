import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", korean: "모든 글" },
    { id: "success-stories", name: "Success Stories", korean: "성공 이야기" },
    { id: "mental-health", name: "Mental Health", korean: "정신 건강" },
    { id: "career-tips", name: "Career Tips", korean: "진로 조언" },
    {
      id: "financial-literacy",
      name: "Financial Literacy",
      korean: "금융 지식",
    },
    { id: "leadership", name: "Leadership", korean: "리더십" },
  ];

  const blogPosts = [
    {
      id: 1,
      category: "success-stories",
      title: "From Gaming Addiction to Tech Entrepreneur: Min-jun's Journey",
      titleKr: "게임 중독에서 테크 기업가로: 민준이의 여정",
      author: "김민준",
      authorEn: "Min-jun Kim",
      date: "2025-01-15",
      readTime: "8 min read",
      image: "🚀",
      excerpt:
        "How a 19-year-old overcame severe gaming addiction to launch a successful mobile app company, transforming not just his life but inspiring hundreds of other youth.",
      excerptKr:
        "19세 청년이 심각한 게임 중독을 극복하고 성공적인 모바일 앱 회사를 설립하여 자신의 삶뿐만 아니라 수백 명의 다른 청년들에게 영감을 준 이야기.",
      tags: [
        "Entrepreneurship",
        "Recovery",
        "Technology",
        "기업가정신",
        "회복",
      ],
      featured: true,
    },
    {
      id: 2,
      category: "mental-health",
      title: "5 Daily Practices for Emotional Resilience",
      titleKr: "감정 회복력을 위한 5가지 일일 실천법",
      author: "Dr. Sarah Johnson",
      authorEn: "Dr. Sarah Johnson",
      date: "2025-01-12",
      readTime: "6 min read",
      image: "🧘",
      excerpt:
        "Simple yet powerful daily habits that can help young adults build emotional strength and navigate life's challenges with greater confidence.",
      excerptKr:
        "젊은 성인들이 감정적 힘을 키우고 더 큰 자신감으로 인생의 도전을 헤쳐나갈 수 있도록 돕는 간단하지만 강력한 일상 습관들.",
      tags: [
        "Mental Health",
        "Daily Habits",
        "Resilience",
        "정신건강",
        "일상습관",
      ],
    },
    {
      id: 3,
      category: "career-tips",
      title: "Building Your Personal Brand as a Young Professional",
      titleKr: "젊은 전문가로서 개인 브랜드 구축하기",
      author: "이수현",
      authorEn: "Su-hyeon Lee",
      date: "2025-01-10",
      readTime: "7 min read",
      image: "💼",
      excerpt:
        "A comprehensive guide to establishing yourself in your field, networking effectively, and creating opportunities for career advancement.",
      excerptKr:
        "자신의 분야에서 자리잡고, 효과적으로 네트워킹하며, 경력 발전을 위한 기회를 창출하는 포괄적인 가이드.",
      tags: [
        "Career Development",
        "Personal Branding",
        "Networking",
        "경력개발",
        "개인브랜딩",
      ],
    },
    {
      id: 4,
      category: "financial-literacy",
      title: "Investment Basics: Your First Steps to Financial Freedom",
      titleKr: "투자 기초: 경제적 자유를 향한 첫걸음",
      author: "박지민",
      authorEn: "Ji-min Park",
      date: "2025-01-08",
      readTime: "10 min read",
      image: "📈",
      excerpt:
        "Learn the fundamentals of investing, from understanding different asset classes to building your first portfolio as a young investor.",
      excerptKr:
        "다양한 자산 클래스 이해부터 젊은 투자자로서 첫 포트폴리오 구성까지, 투자의 기초를 배워보세요.",
      tags: [
        "Investing",
        "Financial Planning",
        "Wealth Building",
        "투자",
        "재정계획",
      ],
    },
    {
      id: 5,
      category: "leadership",
      title: "Leading Without Authority: Influence in the Modern Workplace",
      titleKr: "권한 없는 리더십: 현대 직장에서의 영향력",
      author: "Chen Wei",
      authorEn: "Chen Wei",
      date: "2025-01-05",
      readTime: "9 min read",
      image: "🌟",
      excerpt:
        "How to develop leadership skills and create positive change even when you don't have formal authority or a management position.",
      excerptKr:
        "공식적인 권한이나 관리직이 없어도 리더십 스킬을 개발하고 긍정적인 변화를 만드는 방법.",
      tags: ["Leadership", "Influence", "Career Growth", "리더십", "영향력"],
    },
    {
      id: 6,
      category: "success-stories",
      title: "Breaking Cultural Barriers: A Korean-Canadian Success Story",
      titleKr: "문화적 장벽 극복: 한국계 캐나다인 성공 스토리",
      author: "Sarah Chen",
      authorEn: "Sarah Chen",
      date: "2025-01-03",
      readTime: "12 min read",
      image: "🌏",
      excerpt:
        "Sarah's journey from social anxiety and cultural identity struggles to becoming a confident leader running her own youth advocacy organization.",
      excerptKr:
        "사회적 불안과 문화적 정체성 고민에서 자신감 있는 리더로 성장하여 자신만의 청소년 권익 단체를 운영하게 된 Sarah의 여정.",
      tags: [
        "Cultural Identity",
        "Leadership",
        "Social Impact",
        "문화적정체성",
        "사회적영향",
      ],
      featured: true,
    },
    {
      id: 7,
      category: "mental-health",
      title: "Understanding and Overcoming Social Isolation",
      titleKr: "사회적 고립 이해하고 극복하기",
      author: "Dr. Kim Tae-ho",
      authorEn: "Dr. Kim Tae-ho",
      date: "2025-01-01",
      readTime: "11 min read",
      image: "🤝",
      excerpt:
        "A deep dive into the causes of social isolation among youth and practical strategies for building meaningful connections and community.",
      excerptKr:
        "청년층의 사회적 고립 원인에 대한 심층 분석과 의미 있는 관계와 공동체를 형성하기 위한 실용적인 전략들.",
      tags: [
        "Social Connection",
        "Mental Health",
        "Community",
        "사회적연결",
        "정신건강",
      ],
    },
    {
      id: 8,
      category: "financial-literacy",
      title: "The Psychology of Money: Why We Make Bad Financial Decisions",
      titleKr: "돈의 심리학: 왜 우리는 나쁜 금융 결정을 하는가",
      author: "Alex Thompson",
      authorEn: "Alex Thompson",
      date: "2024-12-28",
      readTime: "8 min read",
      image: "🧠",
      excerpt:
        "Explore the psychological factors that influence our financial choices and learn strategies to make better money decisions.",
      excerptKr:
        "우리의 금융 선택에 영향을 미치는 심리적 요인들을 탐구하고 더 나은 돈 결정을 내리는 전략을 배워보세요.",
      tags: [
        "Financial Psychology",
        "Decision Making",
        "Money Management",
        "금융심리학",
        "돈관리",
      ],
    },
  ];

  const featuredPosts = blogPosts.filter((post) => post.featured);

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const resources = [
    {
      title: "Mental Health Resources",
      titleKr: "정신건강 자료",
      description:
        "Professional support, helplines, and self-help resources for mental wellness.",
      descriptionKr:
        "정신적 웰빙을 위한 전문 지원, 헬프라인, 자가 도움 자료들.",
      icon: "🧠",
      color: "hope-blue",
      items: [
        "24/7 Crisis Hotline: 988",
        "Online therapy platforms",
        "Meditation and mindfulness apps",
        "Support group directories",
      ],
    },
    {
      title: "Career Development Tools",
      titleKr: "진로개발 도구",
      description:
        "Resources to help you build skills, find opportunities, and advance your career.",
      descriptionKr:
        "스킬을 구축하고, 기회를 찾고, 경력을 발전시키는 데 도움이 되는 자료들.",
      icon: "🚀",
      color: "emerald-growth",
      items: [
        "Resume and interview guides",
        "Skill assessment tools",
        "Industry networking events",
        "Mentorship program matching",
      ],
    },
    {
      title: "Financial Education",
      titleKr: "금융 교육",
      description:
        "Learn about budgeting, investing, and building wealth for your future.",
      descriptionKr:
        "예산 관리, 투자, 미래를 위한 자산 구축에 대해 배워보세요.",
      icon: "💰",
      color: "golden-light",
      items: [
        "Budgeting calculators and templates",
        "Investment simulation tools",
        "Scholarship and grant databases",
        "Financial literacy courses",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-soft-grey to-golden-light/3">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-golden-light/8 via-soft-grey to-hope-blue/4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-golden-light/15 rounded-full text-golden-light font-noto-serif-kr text-lg font-semibold border border-golden-light/20 mb-6">
              영감을 주는 이야기와 유용한 정보
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold font-sora mb-6 text-charcoal-gray">
            Stories of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden-light via-emerald-growth to-hope-blue">
              Transformation
            </span>
          </h1>
          <p className="text-xl text-charcoal-gray/70 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover inspiring success stories, practical life advice, and
            valuable resources to support your journey toward personal and
            professional growth.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-sora mb-6 text-charcoal-gray">
                Featured <span className="text-golden-light">Stories</span>
              </h2>
              <p className="text-lg font-noto-serif-kr text-soft-orchid mb-4">
                주목할 만한 이야기들
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="korean-shadow hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-4xl">{post.image}</div>
                      <div className="text-right">
                        <div className="text-sm text-charcoal-gray/60">
                          {post.date}
                        </div>
                        <div className="text-xs text-emerald-growth">
                          {post.readTime}
                        </div>
                      </div>
                    </div>

                    <h3 className="font-sora font-bold text-xl text-charcoal-gray mb-2 group-hover:text-hope-blue transition-colors">
                      {post.title}
                    </h3>
                    <div className="font-noto-serif-kr text-soft-orchid text-sm mb-4">
                      {post.titleKr}
                    </div>

                    <p className="text-charcoal-gray/80 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    {post.excerptKr && (
                      <p className="text-soft-orchid/80 text-sm font-noto-serif-kr leading-relaxed mb-6">
                        {post.excerptKr}
                      </p>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <div className="font-semibold text-charcoal-gray">
                          {post.author}
                        </div>
                        {post.authorEn && post.author !== post.authorEn && (
                          <div className="text-charcoal-gray/60 text-xs">
                            {post.authorEn}
                          </div>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-hope-blue group-hover:text-white transition-colors"
                      >
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-sora mb-6 text-charcoal-gray">
              All <span className="text-emerald-growth">Articles</span>
            </h2>
            <p className="text-lg font-noto-serif-kr text-soft-orchid mb-8">
              카테고리별 글 모아보기
            </p>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-sora font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-emerald-growth text-white shadow-lg"
                    : "bg-card text-charcoal-gray hover:bg-muted"
                }`}
              >
                <div>{category.name}</div>
                <div className="text-xs font-noto-serif-kr opacity-80">
                  {category.korean}
                </div>
              </button>
            ))}
          </div>

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="korean-shadow hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{post.image}</div>
                    <div className="text-right">
                      <div className="text-xs text-charcoal-gray/60">
                        {post.date}
                      </div>
                      <div className="text-xs text-emerald-growth">
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <h3 className="font-sora font-bold text-lg text-charcoal-gray mb-2 group-hover:text-hope-blue transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="font-noto-serif-kr text-soft-orchid text-sm mb-3 line-clamp-1">
                    {post.titleKr}
                  </div>

                  <p className="text-charcoal-gray/80 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-background text-xs text-charcoal-gray/60 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <div className="font-medium text-charcoal-gray text-xs">
                        {post.author}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:bg-hope-blue group-hover:text-white transition-colors"
                    >
                      Read →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-sora mb-6 text-charcoal-gray">
              Helpful <span className="text-hope-blue">Resources</span>
            </h2>
            <p className="text-lg font-noto-serif-kr text-soft-orchid mb-4">
              여러분에게 도움이 되는 자료들
            </p>
            <p className="text-lg text-charcoal-gray/70">
              Curated tools and resources to support your growth journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="korean-shadow hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <CardContent className="p-8">
                  <div className="text-5xl mb-6">{resource.icon}</div>
                  <h3 className="font-sora font-bold text-xl text-charcoal-gray mb-2">
                    {resource.title}
                  </h3>
                  <div className="font-noto-serif-kr text-soft-orchid text-sm mb-4 font-semibold">
                    {resource.titleKr}
                  </div>
                  <p className="text-charcoal-gray/80 text-sm leading-relaxed mb-6">
                    {resource.description}
                  </p>
                  <div className="font-noto-serif-kr text-soft-orchid/80 text-sm leading-relaxed mb-6">
                    {resource.descriptionKr}
                  </div>

                  <div className="space-y-2 mb-6">
                    {resource.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 text-sm text-charcoal-gray/70"
                      >
                        <div
                          className={`w-2 h-2 bg-${resource.color} rounded-full`}
                        ></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className={`hover:bg-${resource.color} hover:text-white transition-colors w-full`}
                  >
                    Explore Resources
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-hope-blue/5 to-emerald-growth/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card rounded-2xl korean-shadow p-8">
            <div className="text-5xl mb-6">📧</div>
            <h3 className="text-3xl font-bold font-sora mb-4 text-charcoal-gray">
              Stay <span className="text-emerald-growth">Connected</span>
            </h3>
            <p className="text-lg font-noto-serif-kr text-soft-orchid mb-6">
              최신 이야기와 자료를 받아보세요
            </p>
            <p className="text-lg text-charcoal-gray/70 mb-8">
              Get the latest success stories, resources, and program updates
              delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 border border-border rounded-lg focus:ring-2 focus:ring-emerald-growth focus:border-transparent"
              />
              <Button variant="growth" size="lg">
                Subscribe
              </Button>
            </div>

            <p className="text-xs text-charcoal-gray/60 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
