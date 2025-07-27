import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      {children}
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default AppLayout;
