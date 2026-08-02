import { Users, Calendar, Award, MapPin } from 'lucide-react';
import { useScrollReveal, useCountUp } from '@/hooks';

const STATS = [
  { icon: Users, value: 12500, suffix: '+', label: 'عضو ومتطوع' },
  { icon: Calendar, value: 320, suffix: '+', label: 'فعالية وبرنامج' },
  { icon: Award, value: 48, suffix: '', label: 'جائزة وتكريم' },
  { icon: MapPin, value: 13, suffix: '', label: 'منطقة ومحافظة' },
];

function StatCard({ icon: Icon, value, suffix, label, start }: { icon: typeof Users; value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, 2000, start);
  return (
    <div className="card-green p-6 md:p-8 text-center relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" style={{ background: 'radial-gradient(circle, #c9a02a 0%, transparent 70%)' }} />
      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-500">
        <Icon className="text-[#0a3d22]" size={24} />
      </div>
      <div className="stat-number mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-semibold text-[#0a3d22]/80">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-16 md:py-20 bg-green-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #85d4a8 0%, transparent 70%)' }} />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div ref={ref} className={`text-center mb-10 md:mb-12 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="badge badge-gold mb-3">إنجازاتنا بالأرقام</span>
          <h2 className="text-heading text-[#052816]">أثر الجمعية في أرقام</h2>
          <div className="sep-gold mx-auto mt-3" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((s, i) => (
            <div key={s.label} className={visible ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: `${i * 0.12}s` }}>
              <StatCard {...s} start={visible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
