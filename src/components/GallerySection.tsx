import { useState } from 'react';
import { useScrollReveal } from '@/hooks';

const GALLERY = [
  { src: 'https://images.pexels.com/photos/6925106/pexels-photo-6925106.jpeg?auto=compress&cs=tinysrgb&h=600&w=800', label: 'معرض الفنون التشكيلية', span: 'lg:col-span-2 lg:row-span-2' },
  { src: 'https://images.pexels.com/photos/12943937/pexels-photo-12943937.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', label: 'الخط العربي', span: '' },
  { src: 'https://images.pexels.com/photos/32218711/pexels-photo-32218711.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', label: 'برنامج القراءة', span: '' },
  { src: 'https://images.pexels.com/photos/34283180/pexels-photo-34283180.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', label: 'تجمع ثقافي', span: '' },
  { src: 'https://images.pexels.com/photos/9283867/pexels-photo-9283867.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', label: 'استوديو الفنون', span: '' },
  { src: 'https://images.pexels.com/photos/38036757/pexels-photo-38036757.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', label: 'عرض تراثي', span: 'lg:col-span-2' },
];

export default function GallerySection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div ref={ref} className={`text-center mb-12 md:mb-16 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="badge badge-green mb-3">معرض الصور</span>
          <h2 className="text-heading text-[#052816] mb-3">لحظات من فعالياتنا</h2>
          <div className="sep-gold mx-auto" />
          <p className="text-body-lg text-[#0a3d22]/70 max-w-2xl mx-auto mt-4">
            أرشيف بصري يحتفي بمسيرة الجمعية وفعالياتها وبرامجها الثقافية المتنوعة.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {GALLERY.map((g, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${g.span} ${visible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.08}s` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(180deg, transparent 40%, rgba(5,40,22,0.8) 100%)',
                  opacity: hovered === i ? 1 : 0.6,
                }}
              />
              <div className={`absolute bottom-0 inset-x-0 p-4 transition-all duration-500 ${hovered === i ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'}`}>
                <span className="badge badge-gold !bg-white/90 !text-[10px] mb-2">فعالية</span>
                <h4 className="text-sm md:text-base font-bold text-white">{g.label}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
