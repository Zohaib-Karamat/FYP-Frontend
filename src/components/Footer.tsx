import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white mt-auto">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="">
              <Logo variant="light" height="h-[100px]" />
            </div>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed max-w-xs">
              Supporting maternal mental health through evidence-based assessments, resources, and care.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/dashboard" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/assessments" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Assessments
                </Link>
              </li>
              <li>
                <Link to="/mood-tracker" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Mood Tracker
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Mental Health Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-400" />
                <a href="mailto:support@maternalcare.com" className="text-sm text-gray-300 hover:text-white transition-colors">
                  support@maternalcare.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-400" />
                <a href="tel:+1234567890" className="text-sm text-gray-300 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-400" />
                <span className="text-sm text-gray-300 leading-relaxed">
                  123 Healthcare Ave<br />
                  Medical City, MC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="bg-destructive/20 border border-destructive/30 rounded-lg p-6">
            <p className="text-sm text-center leading-relaxed">
              <strong>Crisis Support:</strong> If you're experiencing a mental health emergency, please call the National Suicide Prevention Lifeline at{" "}
              <a href="tel:988" className="underline font-semibold hover:text-accent transition-colors text-white">
                988
              </a>{" "}
              or seek immediate medical attention.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-300 text-center sm:text-left">
              © {new Date().getFullYear()} Maternal Mind Care. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-6">
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Cookies
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
