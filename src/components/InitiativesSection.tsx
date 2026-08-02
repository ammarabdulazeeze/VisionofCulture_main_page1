import { Sparkles, Target, Rocket } from 'lucide-react';
import { useScrollReveal } from '@/hooks';

const INITIATIVES = [
  {
    icon: Sparkles,
    tag: 'مبادرة وطنية',
    title: 'موهبة في كل بيت',
    desc: 'مبادرة لاكتشاف المواهب الثقافية في جميع مناطق المملكة وربطها بالفرص المناسبة لتنمية إبداعها.',
    progress: 78,
    image: 'https://images.pexels.com/photos/32218711/pexels-photo-32218711.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: Target,
    tag: 'برنامج نوعي',
    title: 'صانع المحتوى الثقافي',
    desc: 'برنامج تدريبي متكامل لإعداد جيل من صنّاع المحتوى الثقافي السعودي على المستوى الاحترافي.',
    progress: 62,
    image: 'https://images.pexels.com/photos/9283867/pexels-photo-9283867.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: Rocket,
    tag: 'مشروع تنموي',
    title: 'حاضنة رؤية الثقافة',
    desc: 'حاضنة متخصصة لدعم المشاريع الثقافية الناشئة وتقديم التمويل والتوجيه اللازم لرواد الأعمال الثقافيين.',
    progress: 45,
    image: 'https://images.pexels.com/photos/6925106/pexels-photo-6925106.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
];

export default function InitiativesSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-16 md:py-24 bg-green-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div ref={ref} className={`text-center mb-12 md:mb-16 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="badge badge-gold mb-3">مبادراتنا</span>
          <h2 className="text-heading text-[#052816] mb-3">مبادرات وطنية نوعية</h2>
          <div className="sep-gold mx-auto" />
          <p className="text-body-lg text-[#0a3d22]/70 max-w-2xl mx-auto mt-4">
            مبادرات استراتيجية تهدف إلى بناء منظومة إبداعية متكاملة ودعم المواهب في مختلف المجالات الثقافية.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {INITIATIVES.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className={`card overflow-hidden group ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={it.image} alt={it.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(5,40,22,0.3) 0%, rgba(5,40,22,0.7) 100%)' }} />
                  <div className="absolute top-3 right-3">
                    <span className="badge badge-gold !bg-white/90">{it.tag}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 w-11 h-11 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <Icon className="text-[var(--gold-300)]" size={20} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-[#052816] mb-2">{it.title}</h3>
                  <p className="text-sm text-[#0a3d22]/70 leading-relaxed mb-4 line-clamp-2">{it.desc}</p>
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0a3d22]/70">نسبة الإنجاز</span>
                    <span className="font-bold text-[var(--gold-600)]">{it.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#eaf7f0] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gold-gradient transition-all duration-1000"
                      style={{ width: visible ? `${it.progress}%` : '0%' }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
