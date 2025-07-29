import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CookieConsentBanner from "./CookieConsentBanner";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      once: true, // Animates only once
      duration: 800, // Animation duration in ms
      easing: "ease-out", // Animation easing
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      {children}
      <ScrollToTopButton />
      <Footer />
      <CookieConsentBanner />
    </div>
  );
};

export default AppLayout;
