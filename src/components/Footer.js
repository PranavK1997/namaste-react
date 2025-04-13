const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h4 className="text-lg font-semibold mb-3">About Us</h4>
          <p className="text-sm mb-1">1234 Foodie Street, Yum City, 456789</p>
          <p className="text-sm mb-1">Email: contact@foodiez.com</p>
          <p className="text-sm">Phone: +91 9404375177</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Careers</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            <li className="hover:text-gray-300 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Why Choose Us?</h4>
          <ul className="space-y-2 text-sm">
            <li>✔ Fast Delivery</li>
            <li>✔ Fresh Ingredients</li>
            <li>✔ Great Discounts</li>
            <li>✔ 24/7 Support</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} Foodiez. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
