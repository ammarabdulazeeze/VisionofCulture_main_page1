import {
  Target, Eye, Award, CheckCircle2, Calendar,
  Users, Megaphone, Building2, UserCheck, Download,
  ClipboardList, ArrowLeft
} from 'lucide-react';
import { useScrollReveal } from '@/hooks';

const VALUES = [
  { icon: Target, label: 'رسالتنا', text: 'تمكين المبدعين والمبدعات وتعزيز الهوية الوطنية عبر برامج ثقافية نوعية.' },
  { icon: Eye, label: 'رؤيتنا', text: 'أن نكون منصة رؤية الثقافة الأولى في المملكة العربية السعودية بحلول 2030.' },
  { icon: Award, label: 'قيمنا', text: 'الأصالة، الانتماء، الإبداع، الشفافية، والتميز في خدمة المجتمع.' },
];

const POINTS = [
  'جمعية مرخّصة من وزارة الثقافة',
  'أكثر من 50 برنامجاً ثقافياً نوعياً',
  'شراكات استراتيجية مع الجهات الحكومية والخاصة',
  'مشاركة واسعة في الفعاليات الوطنية والدولية',
];

const ABOUT_LINKS = [
  { id: 'about-founding', icon: Calendar, label: 'تأسيس الجمعية', desc: 'نبذة عن تأسيس الجمعية وتاريخها' },
  { id: 'about-cert', icon: Award, label: 'شهادة الجمعية', desc: 'التراخيص والاعتمادات الرسمية' },
  { id: 'about-field', icon: Building2, label: 'مجال العمل', desc: 'مجالات عمل الجمعية وأنشطتها' },
  { id: 'about-target', icon: Users, label: 'الفئة المستهدفة', desc: 'الشرائح التي تخدمها الجمعية' },
  { id: 'about-president', icon: Megaphone, label: 'كلمة رئيس الجمعية', desc: 'كلمة الرئيس الموجّهة للأعضاء' },
  { id: 'about-vp', icon: Megaphone, label: 'كلمة نائب الرئيس', desc: 'كلمة النائب الموجّهة للأعضاء' },
  { id: 'about-board', icon: UserCheck, label: 'أعضاء مجلس الإدارة', desc: 'أعضاء مجلس الإدارة الحالي' },
  { id: 'about-profile', icon: Download, label: 'بروفايل الجمعية', desc: 'تحميل البروفايل التعريفي' },
  { id: 'about-org', icon: ClipboardList, label: 'الهيكل التنظيمي', desc: 'الهيكل التنظيمي للجمعية' },
];

export default function AboutSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className={`text-center mb-12 md:mb-16 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="badge badge-green mb-3">من نحن</span>
          <h2 className="text-heading text-[#052816] mb-3">جمعية رؤية الثقافة</h2>
          <div className="sep-gold mx-auto" />
          <p className="text-body-lg text-[#0a3d22]/70 max-w-2xl mx-auto mt-4">
            جمعية ثقافية سعودية تأسست لتعزيز الإبداع الوطني ودعم المواهب في مختلف المجالات الثقافية والفنية، انطلاقاً من رؤية المملكة 2030.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image side */}
          <div className={`relative reveal-left ${visible ? 'visible' : ''}`}>
            <div className="relative rounded-[1.75rem] overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/38096888/pexels-photo-38096888.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="المملكة العربية السعودية"
                loading="lazy"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(5,40,22,0.4) 0%, transparent 50%)' }} />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 glass rounded-2xl p-4 md:p-5 shadow-lg max-w-[220px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={22} />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#0a3d22]">+15</div>
                  <div className="text-xs text-[#0a3d22]/60 font-medium">عاماً من العطاء</div>
                </div>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 ornament-dots hidden md:grid">
              {Array.from({ length: 16 }).map((_, k) => <span key={k} />)}
            </div>
          </div>

          {/* Text side */}
          <div className={`reveal-right ${visible ? 'visible' : ''}`}>
            <h3 className="text-subheading text-[#052816] mb-4">من نحن</h3>
            <p className="text-body-lg text-[#0a3d22]/80 mb-6 leading-relaxed">
              جمعية رؤية الثقافة جمعية سعودية غير ربحية، تأسست عام 2010 م، وتهدف إلى دعم المبدعين والمبدعات في المملكة العربية السعودية، وتعزيز الحركة الثقافية الوطنية، وبناء جيل واعٍ بثقافته ومعتزٍّ بهويته الوطنية.
            </p>
            <div className="space-y-3 mb-8">
              {POINTS.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[var(--gold-500)] flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm text-[#0a3d22]/85 font-medium">{p}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button className="btn-primary">تعرّف علينا أكثر</button>
              <button className="btn-outline">كلمة الرئيس</button>
            </div>
          </div>
        </div>

        {/* Values cards */}
        <div className="grid md:grid-cols-3 gap-5 mt-16 md:mt-20">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.label}
                className="card p-6 text-center group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#eaf7f0] flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-gradient transition-all duration-500">
                  <Icon className="text-[#0a3d22] group-hover:text-white transition-colors" size={24} />
                </div>
                <h4 className="text-base font-bold text-[#052816] mb-2">{v.label}</h4>
                <p className="text-sm text-[#0a3d22]/70 leading-relaxed">{v.text}</p>
              </div>
            );
          })}
        </div>

        {/* About sub-sections grid */}
        <div className="mt-16 md:mt-20">
          <div className="text-center mb-8">
            <span className="badge badge-gold mb-3">تفاصيل عن الجمعية</span>
            <h3 className="text-subheading text-[#052816]">استكشف المزيد عن الجمعية</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ABOUT_LINKS.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`card p-5 flex items-center gap-4 group ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#eaf7f0] flex items-center justify-center flex-shrink-0 group-hover:bg-gold-gradient transition-all duration-500">
                    <Icon className="text-[#0a3d22] group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[#052816] mb-0.5">{link.label}</h4>
                    <p className="text-xs text-[#0a3d22]/60">{link.desc}</p>
                  </div>
                  <ArrowLeft size={16} className="text-[var(--gold-500)] opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all flex-shrink-0" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
