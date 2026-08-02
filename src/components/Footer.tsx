import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Send, ArrowUp } from 'lucide-react';

const LINKS = {
  'روابط سريعة': [
    { label: 'الرئيسية', href: '#home' },
    { label: 'من نحن', href: '#about' },
    { label: 'الفعاليات', href: '#events' },
    { label: 'البرامج', href: '#programs' },
    { label: 'المعارض والملتقيات', href: '#exhibitions' },
  ],
  'الخدمات': [
    { label: 'المتجر الإلكتروني', href: '#store' },
    { label: 'الشراكات المجتمعية', href: '#partnerships' },
    { label: 'باقات الرعاية', href: '#sponsorship' },
    { label: 'المركز الإعلامي', href: '#media' },
    { label: 'المدونة', href: '#media-blog' },
  ],
  'انضم إلينا': [
    { label: 'عضوية سفراء الثقافة', href: '#membership' },
    { label: 'التطوع', href: '#volunteer' },
    { label: 'بوابة التوظيف', href: '#careers' },
    { label: 'التدريب التعاوني', href: '#careers-training' },
    { label: 'الحوكمة', href: '#governance' },
  ],
};

const SOCIAL = [
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Youtube, href: '#' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark-gradient text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #c9a02a 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #2d9661 0%, transparent 70%)' }} />

      {/* Newsletter strip */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-right">
              <h3 className="text-xl md:text-2xl font-bold mb-2">اشترك في نشرتنا البريدية</h3>
              <p className="text-sm text-white/65">كن أول من يعلم عن فعالياتنا وبرامجنا الجديدة</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md gap-2">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm outline-none focus:border-[var(--gold-400)] transition-colors"
              />
              <button className="btn-gold flex-shrink-0">
                <Send size={16} />
                <span className="hidden sm:inline">اشتراك</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
                  <path d="M20 4 L32 12 V28 L20 36 L8 28 V12 Z" stroke="#c9a02a" strokeWidth="1.5" fill="rgba(201,160,42,0.1)" />
                  <path d="M14 16 Q20 10 26 16 Q26 22 20 26 Q14 22 14 16 Z" fill="#c9a02a" opacity="0.85" />
                  <circle cx="20" cy="20" r="2" fill="#fff" />
                </svg>
              </div>
              <div>
                <div className="text-base font-extrabold">جمعية رؤية الثقافة</div>
                <div className="text-[10px] text-[var(--gold-300)] tracking-wide">RUYAT ALTHAQAFA ASSOCIATION</div>
              </div>
            </div>
            <p className="text-sm text-white/65 leading-relaxed mb-6 max-w-sm">
              جمعية ثقافية سعودية غير ربحية، تسعى إلى دعم الإبداع الوطني وتعزيز الهوية الثقافية وبناء جيل واعٍ بثقافته، انطلاقاً من رؤية المملكة 2030.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-sm text-white/70">
                <Phone size={15} className="text-[var(--gold-300)]" />
                <span dir="ltr">+966 11 234 5678</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/70">
                <Mail size={15} className="text-[var(--gold-300)]" />
                <span>info@cultural-association.org.sa</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/70">
                <MapPin size={15} className="text-[var(--gold-300)]" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="text-sm font-bold mb-4 text-white">{title}</h4>
              <nav className="flex flex-col gap-0">
                {items.map((l) => (
                  <a key={l.label} href={l.href} className="footer-link">{l.label}</a>
                ))}
              </nav>
            </div>
          ))}

          {/* Social + app */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold mb-4 text-white">تابعنا</h4>
            <div className="flex gap-2 mb-6">
              {SOCIAL.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a key={i} href={s.href} className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center hover:bg-[var(--gold-500)] hover:border-[var(--gold-500)] transition-all duration-300 group">
                    <Icon size={17} className="text-white/80 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
            <div className="glass-dark rounded-xl p-4 border border-white/10">
              <div className="text-xs text-white/70 mb-2">ساعات العمل</div>
              <div className="text-sm font-semibold text-white">الأحد - الخميس</div>
              <div className="text-xs text-white/60">8 صباحاً - 4 عصراً</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/55 text-center md:text-right">
            © 2026 جمعية رؤية الثقافة. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/55">
            <a href="#" className="hover:text-[var(--gold-300)] transition-colors">سياسة الخصوصية</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-[var(--gold-300)] transition-colors">شروط الاستخدام</a>
            <a href="#home" className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-[var(--gold-500)] hover:border-[var(--gold-500)] transition-all ml-2">
              <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
