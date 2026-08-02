import { useScrollReveal } from '@/hooks';

const PARTNERS = [
  'وزارة الثقافة',
  'هيئة الفنون البصرية',
  'هيئة الأدب والنشر',
  'هيئة الموسيقى',
  'هيئة المسرح والفنون الأدائية',
  'جامعة الملك سعود',
  'مركز الملك عبدالعزيز',
  'صندوق التنمية الثقافية',
];

export default function PartnersSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-16 md:py-20 bg-green-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div ref={ref} className={`text-center mb-10 md:mb-12 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="badge badge-gold mb-3">شركاؤنا</span>
          <h2 className="text-heading text-[#052816] mb-3">شركاء النجاح</h2>
          <div className="sep-gold mx-auto" />
          <p className="text-body-lg text-[#0a3d22]/70 max-w-2xl mx-auto mt-4">
            نفخر بشراكاتنا الاستراتيجية مع نخبة من الجهات الحكومية والمؤسسات الثقافية في المملكة.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {PARTNERS.map((p, i) => (
            <div
              key={p}
              className={`partner-card ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-dark-gradient flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                    <path d="M12 2 L20 7 V17 L12 22 L4 17 V7 Z" stroke="#c9a02a" strokeWidth="1.5" fill="rgba(201,160,42,0.15)" />
                  </svg>
                </div>
                <span className="text-xs md:text-sm font-bold text-[#0a3d22] leading-tight">{p}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
