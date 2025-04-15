import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
  } from "lucide-react";
  
  const Footer = () => {
    return (
      <footer className="h-full mt-10 text-gray-300 bg-gray-800 w-1000 py-fixed px-fixed">
        <div className="flex gap-20 ml-58">
          {/* Company Info */}
          <div className="mt-5">
            <h2 className="mb-4 text-xl font-semibold text-white">BizManagePro</h2>
            <p className="mb-4 text-sm">
              Simplifying your client management.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} /> support@bizmanagepro.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} /> +1 234 567 890
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} /> New York, NY
              </div>
            </div>
          </div>
  
          {/* Quick Links */}
          <div className="mt-5">
            <h3 className="mb-3 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">🏠 Dashboard</a></li>
              <li><a href="/clients" className="hover:text-white">👥 Clients</a></li>
              <li><a href="/reports" className="hover:text-white">📊 Reports</a></li>
              <li><a href="/settings" className="hover:text-white">⚙️ Settings</a></li>
            </ul>
          </div>
  
          {/* Support */}
          <div className="mt-5">
            <h3 className="mb-3 text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/help" className="hover:text-white">❓ Help Center</a></li>
              <li><a href="/contact" className="hover:text-white">📩 Contact Us</a></li>
              <li><a href="/faq" className="hover:text-white">🔍 FAQs</a></li>
              <li><a href="/privacy" className="hover:text-white">🔒 Privacy Policy</a></li>
            </ul>
          </div>
  
          {/* Newsletter & Socials */}
          <div className="mt-5">
            <h3 className="mb-3 text-lg font-semibold text-white">Stay Updated</h3>
            <p className="mb-3 text-sm">Subscribe to our newsletter for tips and updates.</p>
            <form className="flex flex-col items-start gap-2 mb-4 sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 text-gray-900 rounded-md sm:w-auto"
              />
              <button className="px-4 py-2 bg-blue-600 rounded-md -ml-50 texmt-white hover:bg-blue-700">
                Subscribe
              </button>
            </form>
            <div className="flex gap-4 mt-2 text-gray-400">
              <a href="#"><Facebook size={20} className="hover:text-white" /></a>
              <a href="#"><Twitter size={20} className="hover:text-white" /></a>
              <a href="#"><Linkedin size={20} className="hover:text-white" /></a>
            </div>
          </div>
        </div>
    
  
        {/* Bottom Bar */}
         
        <div className="    mt-20      border-t border-gray-700 text-white text-[20px] ">
         <p className="ml-120"> © {new Date().getFullYear()} BizManagePro. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  