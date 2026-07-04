// Footer.js
// import Image from "next/image";
import logo from "../assets/logo (2).png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10 sm:py-12">
      <h2 className="mx-auto max-w-3xl px-4 text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
        Explore the world with My Dream place
      </h2>
      <div className="mx-auto mt-8 grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_2fr] lg:px-8">
        <div className="text-center md:text-left">
          <img src={logo} alt="Logo" className="mx-auto h-8 w-auto md:mx-0" />
          <p className="mx-auto mt-3 max-w-xs text-gray-600 md:mx-0">
            Your next go-to companion for travel
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-2 md:grid-cols-4 md:text-base">
          {/* Company Links */}
          <div className="min-w-0">
            <h3 className="mb-4 text-base font-semibold text-gray-800 sm:text-lg">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Advertising
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Links */}
          <div className="min-w-0">
            <h3 className="mb-4 text-base font-semibold text-gray-800 sm:text-lg">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Australia
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  New Zealand
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  United States America (USA)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Greece
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Maldives
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Singapore
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  See more
                </a>
              </li>
            </ul>
          </div>

          {/* Terms and Policies Links */}
          <div className="min-w-0">
            <h3 className="mb-4 text-base font-semibold text-gray-800 sm:text-lg">
              Terms and Policies
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Reward system policy
                </a>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="min-w-0">
            <h3 className="mb-4 text-base font-semibold text-gray-800 sm:text-lg">
              Help
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Cancel your bookings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Use Coupon
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Refund Policies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  International Travel Documents
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
