import {
  Tv, BookOpen, GraduationCap, Heart, Users, Star,
  Baby, Award, Calendar, Globe, HandHeart, ArrowLeft
} from 'lucide-react';
import { useScrollReveal } from '@/hooks';

const PROGRAMS = [
  { icon: Tv, title: 'البرامج الترفيهية', desc: 'برامج ترفيهية هادفة تجمع بين المتعة والفائدة وتعزيز القيم المجتمعية.', color: 'from-emerald-500 to-green-700', count: '8 برامج' },
  { icon: BookOpen, title: 'البرامج الثقافية', desc: 'برامج ثقافية متنوعة لتعزيز الوعي الثقافي والاطلاع على الإنتاج الفكري.', color: 'from-green-600 to-emerald-800', count: '12 برنامجاً' },
  { icon: GraduationCap, title: 'البرامج التدريبية', desc: 'دورات تدريبية متخصصة لتأهيل الكوادر في المجال الثقافي والإبداعي.', color: 'from-teal-600 to-green-800', count: '15 برنامجاً' },
  { icon: Heart, title: 'البرامج التطوعية', desc: 'برامج تطوعية تتيح للأعضاء والمتطوعين المشاركة في خدمة المجتمع.', color: 'from-green-700 to-emerald-900', count: '6 برامج' },
  { icon: Users, title: 'البرامج المجتمعية', desc: 'برامج موجّهة لخدمة المجتمع وتعزيز التماسك الاجتماعي بين أفراده.', color: 'from-emerald-600 to-teal-800', count: '10 برامج' },
  { icon: Star, title: 'برامج تمكين الشباب', desc: 'برامج متخصصة لتمكين الشباب وتطوير مهاراتهم في المجالات الإبداعية.', color: 'from-green-800 to-emerald-900', count: '7 برامج' },
  { icon: Baby, title: 'برامج الأسرة والطفل', desc: 'برامج موجّهة للأسرة والطفل لتعزيز القيم وبناء جيل واعٍ ومبدع.', color: 'from-teal-500 to-green-700', count: '5 برامج' },
  { icon: Award, title: 'برامج تنمية المهارات', desc: 'برامج لتنمية المهارات الشخصية والمهنية للمشاركين في مختلف المجالات.', color: 'from-emerald-700 to-green-900', count: '9 برامج' },
  { icon: Calendar, title: 'البرامج الموسمية', desc: 'برامج موسمية تُنفّذ في المناسبات الوطنية والدينية والثقافية.', color: 'from-green-600 to-teal-800', count: '4 برامج' },
  { icon: Globe, title: 'البرامج الإلكترونية', desc: 'برامج إلكترونية وتفاعلية متاحة عبر المنصات الرقمية لجميع المناطق.', color: 'from-teal-600 to-emerald-800', count: '11 برنامجاً' },
  { icon: HandHeart, title: 'دعم البرامج', desc: 'برامج لدعم ومساندة المواهب والمشاريع الثقافية الناشئة في المملكة.', color: 'from-emerald-800 to-green-900', count: '3 برامج' },
];

export default function ProgramsSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="programs" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div ref={ref} className={`text-center mb-12 md:mb-16 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="badge badge-green mb-3">برامجنا الثقافية</span>
          <h2 className="text-heading text-[#052816] mb-3">برامج الجمعية المتنوعة</h2>
          <div className="sep-gold mx-auto" />
          <p className="text-body-lg text-[#0a3d22]/70 max-w-2xl mx-auto mt-4">
            باقة متنوعة من البرامج الثقافية والترفيهية والتدريبية المصمّمة لاكتشاف المواهب ودعم المبدعين في مختلف المجالات.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {PROGRAMS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`card p-6 group cursor-pointer ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <span className="badge badge-gold !text-[10px]">{p.count}</span>
                </div>
                <h3 className="text-lg font-bold text-[#052816] mb-2">{p.title}</h3>
                <p className="text-sm text-[#0a3d22]/70 leading-relaxed mb-4 line-clamp-3">{p.desc}</p>
                <div className="flex items-center gap-1.5 text-[var(--gold-600)] font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>تعرّف على البرنامج</span>
                  <ArrowLeft size={15} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
