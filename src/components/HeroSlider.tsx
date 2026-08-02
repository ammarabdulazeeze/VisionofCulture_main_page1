import { useEffect, useRef, useState } from 'react';
import { ChevronRight, ChevronLeft, BookOpen, Quote, ArrowLeft } from 'lucide-react';

type Slide = {
  id: number;
  badge: string;
  heading: string;
  excerpt: string;
  cta: string;
  image: string;
  imageAlt: string;
  icon: typeof BookOpen;
};

const SLIDES: Slide[] = [
  {
    id: 1,
    badge: 'كلمة خادم الحرمين الشريفين',
    heading: 'الملك سلمان بن عبدالعزيز',
    excerpt: 'إنّ هذه الوطن الغالي سيبقى - بحول الله - منارة للإسلام والعروبة، حريصة على خدمة المسلمين، معتزة بقيمها وثوابتها، متطلعة بمستقبلها نحو آفاق أرحب من التطور والبناء.',
    cta: 'قراءة الكلمة كاملة',
    image: 'https://images.pexels.com/photos/34171676/pexels-photo-34171676.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    imageAlt: 'خادم الحرمين الشريفين',
    icon: BookOpen,
  },
  {
    id: 2,
    badge: 'كلمة صاحب السمو الملكي ولي العهد',
    heading: 'الأمير محمد بن سلمان',
    excerpt: 'إنّ رؤيتنا أن نُمكّن الإنسان في هذه البلاد الطيبة من أن يكون فاعلاً ومبدعاً ومساهماً في بناء الحضارة الإنسانية، وأن نفتح له أبواب الإبداع في كل المجالات.',
    cta: 'قراءة الكلمة كاملة',
    image: 'https://images.pexels.com/photos/34171712/pexels-photo-34171712.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    imageAlt: 'ولي العهد',
    icon: BookOpen,
  },
  {
    id: 3,
    badge: 'كلمة رئيس الجمعية',
    heading: 'رسالة الجمعية الثقافية',
    excerpt: 'نسعى في جمعية رؤية الثقافة إلى بناء جيل واعٍ بثقافته، معتزٍّ بهويته، منفتح على العالم، عبر برامج نوعية تُجسّد رؤية المملكة 2030 في الإبداع والثقافة.',
    cta: 'تعرّف على الجمعية',
    image: 'https://images.pexels.com/photos/34171704/pexels-photo-34171704.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    imageAlt: 'رئيس الجمعية',
    icon: Quote,
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setIndex((i) => (i + 1) % SLIDES.length);
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(next, 7000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [paused]);

  return (
    <section id="home" className="relative py-6 md:py-10 bg-hero-gradient overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, #85d4a8 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #d4ae47 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div
          className="relative rounded-[1.75rem] overflow-hidden"
          style={{
            height: 'clamp(280px, 42vw, 450px)',
            background: 'linear-gradient(135deg, rgba(234,247,240,0.6) 0%, rgba(213,240,227,0.4) 100%)',
            boxShadow: '0 20px 60px rgba(10,61,34,0.12)',
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {SLIDES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  opacity: i === index ? 1 : 0,
                  transform: i === index ? 'translateX(0)' : 'translateX(40px)',
                  pointerEvents: i === index ? 'auto' : 'none',
                }}
              >
                <div className="h-full flex flex-col md:flex-row items-stretch gap-4 md:gap-8 p-4 md:p-8 lg:p-10">
                  {/* Image ~40% */}
                  <div className="relative w-full md:w-[40%] h-[42%] md:h-full flex-shrink-0">
                    <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden shadow-xl group">
                      <img
                        src={s.image}
                        alt={s.imageAlt}
                        loading={i === 0 ? 'eager' : 'lazy'}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(5,40,22,0.5) 100%)' }} />
                      {/* Gold frame */}
                      <div className="absolute inset-3 rounded-[1rem] border border-[var(--gold-300)]/40 pointer-events-none" />
                    </div>
                  </div>

                  {/* Text ~60% */}
                  <div className="flex-1 flex flex-col justify-center min-w-0">
                    <div className="flex items-center gap-2 mb-3 md:mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                      <span className="badge badge-gold">
                        <Icon size={11} />
                        {s.badge}
                      </span>
                    </div>
                    <h1 className="text-display text-[#052816] mb-3 md:mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      {s.heading}
                    </h1>
                    <div className="sep-gold mb-3 md:mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }} />
                    <p className="text-body-lg text-[#0a3d22]/80 mb-5 md:mb-6 line-clamp-4 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
                      {s.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
                      <button className="btn-primary">
                        {s.cta}
                        <ArrowLeft size={15} />
                      </button>
                      <button className="btn-outline">
                        تصفّح البرامج
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Arrows */}
          <button onClick={prev} className="carousel-arrow carousel-arrow-lg absolute top-1/2 -translate-y-1/2 right-3 md:right-5 z-10" aria-label="السابق">
            <ChevronRight size={20} />
          </button>
          <button onClick={next} className="carousel-arrow carousel-arrow-lg absolute top-1/2 -translate-y-1/2 left-3 md:left-5 z-10" aria-label="التالي">
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`dot ${i === index ? 'active' : ''}`}
                aria-label={`الشريحة ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
