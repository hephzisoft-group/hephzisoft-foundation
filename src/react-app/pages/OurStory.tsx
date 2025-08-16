const OurStory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-soft-grey to-hope-blue/3 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-6xl mb-8">📖</div>
        <h1 className="text-4xl lg:text-5xl font-bold font-sora mb-6 text-charcoal-gray">
          Our <span className="text-hope-blue">Story</span>
        </h1>
        <p className="text-xl text-charcoal-gray/70 mb-8 font-noto-serif-kr">
          우리의 이야기
        </p>
        <div className="bg-card p-8 rounded-2xl korean-shadow">
          <p className="text-lg text-charcoal-gray/80 leading-relaxed">
            The founder's story of emotional transformation, brand vision, and
            cultural inspiration behind the logo will be featured here. This
            page will showcase the journey from personal struggle to creating a
            global foundation that empowers youth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
