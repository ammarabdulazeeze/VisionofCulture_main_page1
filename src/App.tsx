import Header from '@/components/Header';
import AnnouncementSlider from '@/components/AnnouncementSlider';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import ProgramsSection from '@/components/ProgramsSection';
import InitiativesSection from '@/components/InitiativesSection';
import NewsEvents from '@/components/NewsEvents';
import GallerySection from '@/components/GallerySection';
import PartnersSection from '@/components/PartnersSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AnnouncementSlider />
        <HeroSlider />
        <AboutSection />
        <StatsSection />
        <ProgramsSection />
        <InitiativesSection />
        <NewsEvents />
        <GallerySection />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
