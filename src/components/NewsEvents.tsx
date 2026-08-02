import { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowLeft, ChevronRight, ChevronLeft, Star, BookOpen, Users, GraduationCap } from 'lucide-react';
import { useScrollReveal } from '@/hooks';

const EVENT_CATEGORIES = [
  { id: 'all', label: 'الكل', icon: Calendar },
  { id: 'national', label: 'وطنية', icon: Star },
  { id: 'religious', label: 'دينية', icon: Star },
  { id: 'cultural', label: 'ثقافية', icon: BookOpen },
  { id: 'community', label: 'مجتمعية', icon: Users },
  { id: 'training', label: 'تدريبية', icon: GraduationCap },
];

const NEWS = [
  {
    id: 1,
    tag: 'أخبار',
    title: 'الجمعية تختتم فعاليات معرض رؤية الثقافة بنجاح',
    date: '28 يوليو 2026',
    image: 'https://images.pexels.com/photos/6925106/pexels-photo-6925106.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    id: 2,
    tag: 'برامج',
    title: 'انطلاق الدورة الثانيةة من برنامج اكتشاف المواهب',
    date: '25 يوليو 2026',
    image: 'https://images.pexels.com/photos/32218711/pexels-photo-32218711.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    id: 3,
    tag: 'شراكات',
    title: 'توقيع اتفاقية تعاون مع وزارة الثقافة',
    date: '20 يوليو 2026',
    image: 'https://images.pexels.com/photos/8730119/pexels-photo-8730119.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    id: 4,
    tag: 'أخبار',
    title: 'تكريم الفائزين بجائزة رؤية الثقافة 2026',
    date: '15 يوليو 2026',
    image: 'https://images.pexels.com/photos/6607751/pexels-photo-6607751.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
];

const EVENTS = [
  { day: '15', month: 'أغسطس', title: 'معرض الفنون التشكيلية', time: '6:00 مساءً', location: 'الرياض - مركز الملك عبدالعزيز', cat: 'cultural' },
  { day: '22', month: 'أغسطس', title: 'أمسية شعرية مفتوحة', time: '8:00 مساءً', location: 'جدة - بيت الثقافة', cat: 'cultural' },
  { day: '05', month: 'سبتمبر', title: 'ورشة الخط العربي', time: '4:00 عصراً', location: 'الدمام - المركز الثقافي', cat: 'training' },
  { day: '12', month: 'سبتمبر', title: 'مهرجان الموسيقى المعاصرة', time: '7:00 مساءً', location: 'الرياض - مسرح البوليفارد', cat: 'national' },
  { day: '20', month: 'سبتمبر', title: 'حفل تكريم المتطوعين', time: '7:30 مساءً', location: 'الرياض - مقر الجمعية', cat: 'community' },
];

export default function NewsEvents() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const [eventCat, setEventCat] = useState('all');
  const news = NEWS[active];
  const filteredEvents = eventCat === 'all' ? EVENTS : EVENTS.filter((e) => e.cat === eventCat);

  return (
    <section id="news" className="py-16 md:py-24 bg-green-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div ref={ref} className={`text-center mb-12 md:mb-16 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="badge badge-gold mb-3">آخر المستجدات</span>
          <h2 className="text-heading text-[#052816] mb-3">الأخبار والفعاليات</h2>
          <div className="sep-gold mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Featured news */}
          <div className="lg:col-span-2">
            <div className={`card overflow-hidden ${visible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img src={news.image} alt={news.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(5,40,22,0.85) 100%)' }} />
                <div className="absolute top-4 right-4">
                  <span className="badge badge-gold !bg-white/90">{news.tag}</span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5 md:p-7">
                  <div className="flex items-center gap-3 text-white/80 text-xs mb-2">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {news.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">{news.title}</h3>
                  <button className="btn-gold !py-2 !px-4 !text-xs">اقرأ المزيد <ArrowLeft size={13} /></button>
                </div>
              </div>
            </div>

            {/* News thumbnails */}
            <div className="flex gap-3 mt-4 overflow-x-auto scrollbar-none">
              {NEWS.map((n, i) => (
                <button
                  key={n.id}
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${i === active ? 'border-[var(--gold-400)]' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={n.image} alt={n.title} loading="lazy" className="w-24 h-16 object-cover" />
                </button>
              ))}
            </div>

            {/* News list */}
            <div className="mt-6 space-y-3">
              {NEWS.map((n) => (
                <div key={n.id} className="news-card" onClick={() => setActive(NEWS.findIndex((x) => x.id === n.id))}>
                  <img src={n.image} alt={n.title} loading="lazy" className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="badge badge-green !text-[10px] !py-0.5">{n.tag}</span>
                      <span className="text-[11px] text-[#0a3d22]/50">{n.date}</span>
                    </div>
                    <h4 className="text-sm font-bold text-[#052816] line-clamp-2">{n.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events sidebar */}
          <div className={`${visible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div id="events" className="card p-5 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-[#052816]">الفعاليات القادمة</h3>
                <div className="flex gap-1.5">
                  <button className="carousel-arrow !w-8 !h-8"><ChevronRight size={14} /></button>
                  <button className="carousel-arrow !w-8 !h-8"><ChevronLeft size={14} /></button>
                </div>
              </div>
              {/* Event category tabs */}
              <div className="flex gap-1.5 mb-4 overflow-x-auto scrollbar-none pb-1">
                {EVENT_CATEGORIES.map((c) => {
                  const CIcon = c.icon;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setEventCat(c.id)}
                      className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all ${eventCat === c.id ? 'bg-dark-gradient text-white shadow-sm' : 'bg-[#f4fbf7] text-[#0a3d22]/70 hover:bg-[#eaf7f0]'}`}
                    >
                      <CIcon size={11} />
                      {c.label}
                    </button>
                  );
                })}
              </div>
              <div className="space-y-4">
                {filteredEvents.map((e) => (
                  <div key={e.title} className="flex gap-3 group cursor-pointer pb-4 border-b border-[#0a3d22]/8 last:border-0 last:pb-0">
                    <div className="event-date">
                      <span className="text-xl font-extrabold leading-none">{e.day}</span>
                      <span className="text-[10px] font-medium mt-0.5">{e.month}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-[#052816] mb-1.5 group-hover:text-[var(--gold-600)] transition-colors">{e.title}</h4>
                      <div className="flex flex-col gap-1 text-[11px] text-[#0a3d22]/60">
                        <span className="flex items-center gap-1"><Clock size={11} /> {e.time}</span>
                        <span className="flex items-center gap-1"><MapPin size={11} /> {e.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn-outline w-full justify-center mt-5 !text-xs">عرض التقويم الكامل</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
