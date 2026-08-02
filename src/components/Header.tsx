import { useEffect, useRef, useState } from 'react';
import {
  Menu, X, ChevronDown, Search, Phone,
  Home, Info, Calendar, BookOpen, Users, Heart,
  Handshake, ShoppingBag, UserPlus, Star, Briefcase,
  Tv, Newspaper, Mail, GraduationCap, Megaphone,
  Building2, Award, FileText, Globe, Mic, Radio, Camera,
  ShieldCheck, BarChart3, ClipboardList, Download,
} from 'lucide-react';

/* ─── Types ───────────────────────────────────────────────────── */
type SubItem = { label: string; href: string; icon?: React.ElementType };
type NavItem = {
  label: string;
  href: string;
  icon?: React.ElementType;
  children?: SubItem[];
};

/* ─── Navigation data ─────────────────────────────────────────── */
const NAV: NavItem[] = [
  {
    label: 'الرئيسية',
    href: '#home',
    icon: Home,
  },
  {
    label: 'من نحن',
    href: '#about',
    icon: Info,
    children: [
      { label: 'تأسيس الجمعية', href: '#about-founding', icon: Calendar },
      { label: 'شهادة الجمعية', href: '#about-cert', icon: Award },
      { label: 'مجال العمل', href: '#about-field', icon: Building2 },
      { label: 'الفئة المستهدفة', href: '#about-target', icon: Users },
      { label: 'كلمة رئيس الجمعية', href: '#about-president', icon: Megaphone },
      { label: 'كلمة نائب الرئيس', href: '#about-vp', icon: Megaphone },
      { label: 'أعضاء مجلس الإدارة', href: '#about-board', icon: Users },
      { label: 'بروفايل الجمعية', href: '#about-profile', icon: Download },
      { label: 'الهيكل التنظيمي', href: '#about-org', icon: ClipboardList },
    ],
  },
  {
    label: 'الفعاليات',
    href: '#events',
    icon: Calendar,
    children: [
      { label: 'الفعاليات الوطنية', href: '#events-national', icon: Star },
      { label: 'المناسبات الدينية', href: '#events-religious', icon: Star },
      { label: 'الفعاليات الثقافية', href: '#events-cultural', icon: BookOpen },
      { label: 'الفعاليات المجتمعية', href: '#events-community', icon: Users },
      { label: 'البرامج التدريبية', href: '#events-training', icon: GraduationCap },
      { label: 'تقويم الفعاليات', href: '#events-calendar', icon: Calendar },
    ],
  },
  {
    label: 'البرامج',
    href: '#programs',
    icon: BookOpen,
    children: [
      { label: 'البرامج الترفيهية', href: '#prog-entertainment', icon: Tv },
      { label: 'البرامج الثقافية', href: '#prog-cultural', icon: BookOpen },
      { label: 'البرامج التدريبية', href: '#prog-training', icon: GraduationCap },
      { label: 'البرامج التطوعية', href: '#prog-volunteer', icon: Heart },
      { label: 'البرامج المجتمعية', href: '#prog-community', icon: Users },
      { label: 'برامج تمكين الشباب', href: '#prog-youth', icon: Star },
      { label: 'برامج الأسرة والطفل', href: '#prog-family', icon: Users },
      { label: 'برامج تنمية المهارات', href: '#prog-skills', icon: Award },
      { label: 'البرامج الموسمية', href: '#prog-seasonal', icon: Calendar },
      { label: 'البرامج الإلكترونية', href: '#prog-online', icon: Globe },
      { label: 'دعم البرامج', href: '#prog-support', icon: Heart },
    ],
  },
  {
    label: 'المعارض والملتقيات',
    href: '#exhibitions',
    icon: Building2,
    children: [
      { label: 'المعارض القادمة', href: '#exh-upcoming', icon: Calendar },
      { label: 'التسجيل الإلكتروني', href: '#exh-register', icon: ClipboardList },
      { label: 'أرشيف المعارض', href: '#exh-archive', icon: FileText },
    ],
  },
  {
    label: 'الشراكات المجتمعية',
    href: '#partnerships',
    icon: Handshake,
    children: [
      { label: 'طلب شراكة', href: '#partnerships-request', icon: ClipboardList },
      { label: 'باقات الرعاية', href: '#partnerships-packages', icon: Star },
      { label: 'شركاء النجاح', href: '#partnerships-success', icon: Award },
    ],
  },
  {
    label: 'المتجر الإلكتروني',
    href: '#store',
    icon: ShoppingBag,
    children: [
      { label: 'الملفات الرقمية', href: '#store-digital', icon: Download },
      { label: 'الدراسات والبحوث', href: '#store-research', icon: FileText },
      { label: 'الحقائب التدريبية', href: '#store-kits', icon: BookOpen },
    ],
  },
  {
    label: 'انضم إلينا',
    href: '#membership',
    icon: UserPlus,
    children: [
      { label: 'عضوية سفراء رؤية الثقافة', href: '#membership-ambassador', icon: Star },
      { label: 'العضوية الفخرية', href: '#membership-honorary', icon: Award },
      { label: 'العضوية الشرفية', href: '#membership-honor', icon: Award },
    ],
  },
  {
    label: 'الرعايات',
    href: '#sponsorship',
    icon: Star,
    children: [
      { label: 'باقات الرعاية', href: '#spon-packages', icon: ShoppingBag },
      { label: 'طلب رعاية', href: '#spon-request', icon: ClipboardList },
    ],
  },
  {
    label: 'التطوع',
    href: '#volunteer',
    icon: Heart,
    children: [
      { label: 'الفرق التطوعية', href: '#vol-teams', icon: Users },
      { label: 'التسجيل كمتطوع', href: '#vol-register', icon: UserPlus },
    ],
  },
  {
    label: 'بوابة التوظيف',
    href: '#careers',
    icon: Briefcase,
    children: [
      { label: 'الوظائف الشاغرة', href: '#careers-jobs', icon: Briefcase },
      { label: 'نموذج التقديم', href: '#careers-apply', icon: ClipboardList },
      { label: 'فرص التدريب التعاوني', href: '#careers-training', icon: GraduationCap },
    ],
  },
  {
    label: 'المركز الإعلامي',
    href: '#media',
    icon: Newspaper,
    children: [
      { label: 'الأخبار', href: '#media-news', icon: Newspaper },
      { label: 'البيانات الصحفية', href: '#media-press', icon: FileText },
      { label: 'التغطيات الإعلامية', href: '#media-coverage', icon: Tv },
      { label: 'معرض الصور', href: '#media-gallery', icon: Camera },
      { label: 'مكتبة الفيديو', href: '#media-video', icon: Tv },
      { label: 'البث المباشر', href: '#media-live', icon: Radio },
      { label: 'البودكاست', href: '#media-podcast', icon: Mic },
      { label: 'المدونة', href: '#media-blog', icon: BookOpen },
      { label: 'الهوية الإعلامية', href: '#media-identity', icon: Star },
      { label: 'التقارير السنوية', href: '#media-reports', icon: BarChart3 },
    ],
  },
  {
    label: 'الحوكمة',
    href: '#governance',
    icon: ShieldCheck,
    children: [
      { label: 'اللائحة الأساسية', href: '#gov-bylaw', icon: FileText },
      { label: 'لائحة مجلس الإدارة', href: '#gov-board', icon: FileText },
      { label: 'اللائحة التنفيذية', href: '#gov-exec', icon: FileText },
      { label: 'لائحة الموارد البشرية', href: '#gov-hr', icon: FileText },
      { label: 'اللائحة المالية', href: '#gov-finance', icon: FileText },
      { label: 'لائحة العمل التطوعي', href: '#gov-volunteer', icon: FileText },
      { label: 'سياسة الخصوصية', href: '#gov-privacy', icon: ShieldCheck },
      { label: 'مدونة السلوك المهني', href: '#gov-conduct', icon: ClipboardList },
      { label: 'الشروط والأحكام', href: '#gov-terms', icon: ClipboardList },
      { label: 'مجلس الإدارة', href: '#gov-board-members', icon: Users },
      { label: 'اللجان', href: '#gov-committees', icon: Users },
      { label: 'التقارير', href: '#gov-reports', icon: BarChart3 },
      { label: 'الإفصاح والشفافية', href: '#gov-transparency', icon: Globe },
      { label: 'الشهادات والاعتمادات', href: '#gov-certs', icon: Award },
      { label: 'النماذج', href: '#gov-forms', icon: Download },
      { label: 'المكتبة النظامية', href: '#gov-library', icon: BookOpen },
    ],
  },
  {
    label: 'تواصل معنا',
    href: '#contact',
    icon: Mail,
  },
];

/* ─── Dropdown panel ──────────────────────────────────────────── */
function DropdownMenu({ items, visible }: { items: SubItem[]; visible: boolean }) {
  return (
    <div
      className="absolute top-full right-0 z-50 mt-2 rounded-2xl overflow-hidden transition-all duration-300 origin-top-right"
      style={{
        minWidth: 240,
        maxWidth: 280,
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(-8px)',
        pointerEvents: visible ? 'auto' : 'none',
        background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 20px 60px rgba(10,61,34,0.14), 0 4px 16px rgba(10,61,34,0.08)',
        border: '1px solid rgba(45,150,97,0.12)',
      }}
    >
      <div className="py-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-[#0a3d22] hover:bg-[#eaf7f0] hover:text-[#0f5230] transition-colors group"
            >
              {Icon && (
                <span className="w-7 h-7 rounded-lg bg-[#f4fbf7] group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-colors">
                  <Icon size={14} className="text-[#2d9661] group-hover:text-[var(--gold-500)]" />
                </span>
              )}
              <span className="leading-tight">{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Mobile nav accordion item ──────────────────────────────── */
function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <div className="flex items-center">
        <a
          href={item.href}
          onClick={() => { if (!hasChildren) onClose(); }}
          className="flex-1 py-2.5 px-3 rounded-l-lg text-sm font-semibold text-[#0a3d22] hover:bg-[#eaf7f0] transition-colors flex items-center gap-2"
        >
          {Icon && <Icon size={15} className="text-[#2d9661] flex-shrink-0" />}
          {item.label}
        </a>
        {hasChildren && (
          <button
            onClick={() => setOpen(!open)}
            className="py-2.5 px-3 rounded-r-lg hover:bg-[#eaf7f0] transition-colors"
          >
            <ChevronDown
              size={15}
              className="text-[#0a3d22]/60 transition-transform"
              style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>
        )}
      </div>
      {hasChildren && open && (
        <div className="mr-4 mb-1 border-r-2 border-[var(--gold-200)] pr-3">
          {item.children!.map((child) => {
            const CIcon = child.icon;
            return (
              <a
                key={child.href}
                href={child.href}
                onClick={onClose}
                className="flex items-center gap-2.5 py-2 px-2 text-xs font-medium text-[#0a3d22]/80 hover:text-[#0f5230] hover:bg-[#eaf7f0] rounded-lg transition-colors"
              >
                {CIcon && <CIcon size={13} className="text-[var(--gold-500)] flex-shrink-0" />}
                {child.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ─── Main Header ─────────────────────────────────────────────── */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  /* Split nav into two rows for desktop */
  const visibleNav = NAV;

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all-smooth"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        boxShadow: scrolled ? '0 4px 24px rgba(10,61,34,0.08)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(45,150,97,0.12)' : '1px solid transparent',
      }}
    >
      {/* ── Top utility bar ── */}
      <div
        className="hidden md:block transition-all-smooth overflow-hidden"
        style={{
          maxHeight: scrolled ? 0 : 38,
          opacity: scrolled ? 0 : 1,
          background: '#052816',
          color: 'rgba(255,255,255,0.85)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-5 flex items-center justify-between h-[38px] text-[11px]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone size={11} />
              <span dir="ltr">+966 11 234 5678</span>
            </span>
            <span className="opacity-40">|</span>
            <span>الرياض، المملكة العربية السعودية</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="opacity-60">الأحد، 1 أغسطس 2026</span>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-[var(--gold-300)] transition-colors">بوابة الأعضاء</a>
            <span className="opacity-30">|</span>
            <a href="#contact" className="hover:text-[var(--gold-300)] transition-colors">تواصل معنا</a>
          </div>
        </div>
      </div>

      {/* ── Logo + search row ── */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-5">
        <div className="flex items-center justify-between h-[64px] md:h-[70px]">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-10 h-10 rounded-xl bg-dark-gradient flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
                <path d="M20 4 L32 12 V28 L20 36 L8 28 V12 Z" stroke="#c9a02a" strokeWidth="1.5" fill="rgba(201,160,42,0.12)" />
                <path d="M14 16 Q20 10 26 16 Q26 22 20 26 Q14 22 14 16 Z" fill="#c9a02a" opacity="0.85" />
                <circle cx="20" cy="20" r="2" fill="#fff" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-[14px] font-extrabold text-[#0a3d22]">جمعية رؤية الثقافة</div>
              <div className="text-[9px] font-medium text-[#2d9661] tracking-wide hidden sm:block">RUYAT ALTHAQAFA ASSOCIATION</div>
            </div>
          </a>

          {/* Desktop right actions */}
          <div className="hidden xl:flex items-center gap-2">
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#0a3d22] hover:bg-[#eaf7f0] transition-colors">
              <Search size={16} />
            </button>
            <a href="#membership" className="btn-gold !py-1.5 !px-4 !text-xs">انضم إلينا</a>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 xl:hidden">
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#0a3d22] hover:bg-[#eaf7f0] transition-colors">
              <Search size={16} />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[#0a3d22] hover:bg-[#eaf7f0] transition-colors"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Desktop nav bar ── */}
      <div
        className="hidden xl:block border-t"
        style={{
          borderColor: scrolled ? 'rgba(45,150,97,0.1)' : 'rgba(45,150,97,0.06)',
          background: scrolled ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.35)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-5">
          <nav className="flex items-center gap-0 h-11 overflow-x-auto scrollbar-none">
            {visibleNav.map((item) => {
              const Icon = item.icon;
              const hasChildren = item.children && item.children.length > 0;
              const isActive = activeDropdown === item.label;
              return (
                <div
                  key={item.href}
                  className="relative flex-shrink-0"
                  onMouseEnter={() => hasChildren && openDropdown(item.label)}
                  onMouseLeave={closeDropdown}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-3 h-11 text-[12.5px] font-semibold text-[#0a3d22] hover:text-[#0f5230] relative group transition-colors whitespace-nowrap"
                  >
                    {Icon && <Icon size={13} className="text-[#2d9661] opacity-80" />}
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        size={11}
                        className="opacity-50 transition-transform"
                        style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0)' }}
                      />
                    )}
                    {/* Underline */}
                    <span className="absolute bottom-0 right-3 left-3 h-[2px] bg-[var(--gold-400)] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                  </a>
                  {hasChildren && (
                    <div onMouseEnter={cancelClose} onMouseLeave={closeDropdown}>
                      <DropdownMenu items={item.children!} visible={isActive} />
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      {/* ── Mobile full-screen menu ── */}
      <div
        className="xl:hidden fixed inset-0 top-[64px] z-40 transition-all-smooth overflow-y-auto"
        style={{
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          pointerEvents: menuOpen ? 'auto' : 'none',
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="px-4 py-4 pb-16 max-w-sm mx-auto">
          <div className="flex flex-col gap-0.5">
            {visibleNav.map((item) => (
              <MobileNavItem key={item.href} item={item} onClose={() => setMenuOpen(false)} />
            ))}
          </div>
          <a
            href="#membership"
            onClick={() => setMenuOpen(false)}
            className="btn-gold w-full justify-center mt-5"
          >
            انضم إلينا
          </a>
        </div>
      </div>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          className="xl:hidden fixed inset-0 top-[64px] z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
