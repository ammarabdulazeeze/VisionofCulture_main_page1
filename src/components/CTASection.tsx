import { UserPlus, Heart, HandHeart, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useScrollReveal } from '@/hooks';

const CARDS = [
  {
    icon: UserPlus,
    title: 'العضوية',
    desc: 'انضم إلى عضوية الجمعية وكن جزءاً من مجتمع رؤية الثقافة. استفد من البرامج والفعاليات والورش الحصرية.',
    benefits: ['وصول حصري للبرامج', 'دعوات للفعاليات', 'خصومات على الدورات', 'بطاقة عضوية رسمية'],
    cta: 'سجّل عضويتك',
    variant: 'primary',
  },
  {
    icon: HandHeart,
    title: 'التطوع',
    desc: 'شارك كمتطوع في فعالياتنا وبرامجنا الثقافية واكتسب خبرة عملية في تنظيم الفعاليات الثقافية.',
    benefits: ['ساعات تطوع معتمدة', 'شهادات مشاركة', 'تدريب وتأهيل', 'فرص تواصل واسعة'],
    cta: 'سجّل كمتطوع',
    variant: 'outline',
  },
  {
    icon: Heart,
    title: 'التبرع',
    desc: 'ادعم مسيرة الجمعية في نشر الإبداع الثقافي ودعم المواهب ودعم المواهب في جميع مناطق المملكة العربية السعودية.',
    benefits: ['دعم المواهب', 'إيصال سريع وآمن', 'تقارير دورية', 'إعفاء ضريبي'],
    cta: 'تبرّع الآن',
    variant: 'gold',
  },
];

export default function CTASection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="membership" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div ref={ref} className={`text-center mb-12 md:mb-16 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="badge badge-green mb-3">انضم إلينا</span>
          <h2 className="text-heading text-[#052816] mb-3">كن جزءاً من رحلتنا</h2>
          <div className="sep-gold mx-auto" />
          <p className="text-body-lg text-[#0a3d22]/70 max-w-2xl mx-auto mt-4">
            ثلاث طرق لتكون جزءاً من مجتمع رؤية الثقافة - اختر ما يناسبك وابدأ رحلتك معنا.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            const isPrimary = c.variant === 'primary';
            const isGold = c.variant === 'gold';
            return (
              <div
                key={c.title}
                className={`rounded-[1.5rem] p-7 transition-all duration-500 hover:-translate-y-2 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{
                  animationDelay: `${i * 0.12}s`,
                  background: isPrimary ? 'linear-gradient(135deg, #052816 0%, #0a3d22 50%, #0f5230 100%)' : isGold ? 'linear-gradient(135deg, #fdf8e8 0%, #f5e9be 100%)' : 'linear-gradient(135deg, #f4fbf7 0%, #eaf7f0 100%)',
                  boxShadow: isPrimary ? '0 20px 50px rgba(5,40,22,0.25)' : isGold ? '0 12px 36px rgba(201,160,42,0.2)' : '0 12px 36px rgba(10,61,34,0.08)',
                  border: isPrimary ? 'none' : isGold ? '1px solid rgba(201,160,42,0.3)' : '1px solid rgba(45,150,97,0.12)',
                }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: isPrimary ? 'rgba(255,255,255,0.12)' : isGold ? 'linear-gradient(135deg, #c9a02a, #b8900f)' : 'white', boxShadow: isPrimary ? 'none' : 'var(--shadow-sm)' }}>
                  <Icon className={isPrimary ? 'text-[var(--gold-300)]' : isGold ? 'text-white' : 'text-[#0a3d22]'} size={24} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isPrimary ? 'text-white' : 'text-[#052816]'}`}>{c.title}</h3>
                <p className={`text-sm leading-relaxed mb-5 ${isPrimary ? 'text-white/75' : 'text-[#0a3d22]/70'}`}>{c.desc}</p>
                <div className="space-y-2.5 mb-6">
                  {c.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2">
                      <CheckCircle2 size={15} className={isPrimary ? 'text-[var(--gold-300)]' : isGold ? 'text-[var(--gold-600)]' : 'text-[#2d9661]'} />
                      <span className={`text-sm font-medium ${isPrimary ? 'text-white/85' : 'text-[#0a3d22]/80'}`}>{b}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full justify-center ${isPrimary ? 'btn-gold' : isGold ? 'btn-gold' : 'btn-primary'}`}
                >
                  {c.cta}
                  <ArrowLeft size={15} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
