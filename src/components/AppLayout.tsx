import Header from './Header';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import BenefitsSection from './BenefitsSection';
import TestimonialSection from './TestimonialSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;