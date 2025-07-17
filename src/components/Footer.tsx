const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Torres Pest Control</h3>
            <p className="text-gray-300">Professional pest control services in Davao with 14-15 years of experience.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Cockroach Control</li>
              <li>Termite Treatment</li>
              <li>Rodent Removal</li>
              <li>Dengue Fogging</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">Phone: +63 917 139 1908</p>
            <p className="text-gray-300">Service Area: Davao, Philippines</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2025 Torres Pest Control. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;