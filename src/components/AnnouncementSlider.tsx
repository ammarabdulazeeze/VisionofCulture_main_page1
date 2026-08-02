import { useEffect, useRef, useState } from 'react';
import { ChevronRight, ChevronLeft, Calendar, ArrowLeft } from 'lucide-react';

type Announcement = {
  id: number;
  badge: string;
  title: string;
  desc: string;
  cta: string;
  image: string;
  date: string;
};

const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 1,
    badge: 'فعالية قادمة',
    title: 'معرض الفنون التشكيلية السعودي المعاصر',
    desc: 'يحتفي المعرض بنخبة من الفنانين السعوديين في تجربة بصرية فريدة تجمع بين الأصالة والحداثة على مدى خمسة أيام.',
    cta: 'سجّل حضورك',
    image: 'https://images.pexels.com/photos/6925106/pexels-photo-6925106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    date: '15 - 19 أغسطس 2026',
  },
  {
    id: 2,
    badge: 'برنامج جديد',
    title: 'ورشة الخط العربي والزخرفة العصرية',
    desc: 'برنامج تدريبي مكثف لاكتشاف جماليات الخط العربي وتطبيقاته المعاصرة على يد نخبة من المختصين في فن الخط.',
    cta: 'اشترك الآن',
    image: 'https://images.pexels.com/photos/12943937/pexels-photo-12943937.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    date: 'بداية من 1 سبتمبر',
  },
  {
    id: 3,
    badge: 'إعلان رسمي',
    title: 'فتح باب الترشّح لجائزة رؤية الثقافة 2026',
    desc: 'تدعو الجمعية المبدعين والمبدعات من جميع مناطق المملكة للتقدّم لنسخة جديدة من جائزة رؤية الثقافة.',
    cta: 'تقديم الطلب',
    image: 'https://images.pexels.com/photos/8730119/pexels-photo-8730119.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    date: 'آخر موعد 30 سبتمبر',
  },
];

export default function AnnouncementSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = ANNOUNCEMENTS.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const single = count <= 1;

  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    if (single || paused) return;
    timer.current = setInterval(next, 6000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [single, paused]);

  return (
    <section id="announcements" className="pt-32 md:pt-36 xl:pt-40 pb-6 md:pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div
          className="relative rounded-[1.5rem] overflow-hidden shadow-lg"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ height: 'clamp(170px, 22vw, 250px)' }}
        >
          {ANNOUNCEMENTS.map((a, i) => (
            <div
              key={a.id}
              className="absolute inset-0 transition-all duration-700 ease-out"
              style={{
                opacity: i === index ? 1 : 0,
                transform: i === index ? 'translateX(0)' : 'translateX(-30px)',
                pointerEvents: i === index ? 'auto' : 'none',
              }}
            >
              <div className="relative h-full flex" style={{ background: 'linear-gradient(135deg, #f4fbf7 0%, #eaf7f0 45%, #d5f0e3 100%)' }}>
                {/* Image */}
                <div className="relative w-[38%] md:w-[34%] flex-shrink-0 overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ transform: i === index ? 'scale(1.05)' : 'scale(1)', transition: 'transform 6s ease' }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent 40%, rgba(244,251,247,0.9) 100%)' }} />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center px-5 md:px-10 py-4 md:py-6 relative">
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <span className="badge badge-gold">
                      <Calendar size={11} />
                      {a.badge}
                    </span>
                    <span className="text-[11px] text-[#0a3d22]/60 font-medium hidden sm:inline">{a.date}</span>
                  </div>
                  <h3 className="text-[15px] md:text-2xl font-extrabold text-[#0a3d22] leading-tight mb-1.5 md:mb-2">
                    {a.title}
                  </h3>
                  <p className="text-[11px] md:text-sm text-[#0a3d22]/70 leading-relaxed mb-3 md:mb-4 line-clamp-2 max-w-xl">
                    {a.desc}
                  </p>
                  <div>
                    <button className="btn-primary !py-2 !px-4 !text-xs md:!text-sm">
                      {a.cta}
                      <ArrowLeft size={14} />
                    </button>
                  </div>
                </div>

                {/* Ornament */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 ornament-dots hidden sm:grid">
                  {Array.from({ length: 12 }).map((_, k) => <span key={k} />)}
                </div>
              </div>
            </div>
          ))}

          {/* Arrows */}
          {!single && (
            <>
              <button onClick={prev} className="carousel-arrow absolute top-1/2 -translate-y-1/2 right-3 md:right-4 z-10" aria-label="السابق">
                <ChevronRight size={18} />
              </button>
              <button onClick={next} className="carousel-arrow absolute top-1/2 -translate-y-1/2 left-3 md:left-4 z-10" aria-label="التالي">
                <ChevronLeft size={18} />
              </button>
            </>
          )}

          {/* Dots */}
          {!single && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {ANNOUNCEMENTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`dot ${i === index ? 'active' : ''}`}
                  aria-label={`الشريحة ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
