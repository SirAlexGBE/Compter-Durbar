import {Link} from "react-router-dom";
import {Mail, Phone, MapPin} from "lucide-react";
import {FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#1B1B1F] text-gray-800 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 px-4 md:px-12 py-10">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4">
        {/* Logo & Description */}
        <div className="space-y-4">
          <img src="/logo.png" alt="Logo" className="h-18 dark:bg-white" />

          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">Best computer store in Nepal for all kinds of laptops, desktops, accessories, and expert support.</p>
        </div>

        {/* Explore Links */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-gray-800 dark:text-white">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-blue-500">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-blue-500">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Care Links */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-gray-800 dark:text-white">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/account" className="hover:text-blue-500">
                My Account
              </Link>
            </li>
            <li>
              <Link to="/order-tracking" className="hover:text-blue-500">
                Track Your Order
              </Link>
            </li>
            <li>
              <Link to="/customer-service" className="hover:text-blue-500">
                Customer Service
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-blue-500">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-blue-500">
                Product Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-gray-800 dark:text-white">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <Mail size={16} />
              <span>info@computerdurbar.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+977 981-8085380</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Putalisadak, Kathmandu</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Computer Durbar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
