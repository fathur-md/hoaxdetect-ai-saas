import { useState } from "react";
import { Link, Links, useLocation } from "react-router-dom";
import { Logo } from "../UI/Logo";
import { Grip, X } from "lucide-react";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/technology", label: "Technology" },
    { to: "/pricing", label: "Pricing" },
    { to: "/about", label: "About" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex flex-col transition-all duration-300">
      {/* Glass Effect */}
      <div className="flex h-14 w-full border-b border-gray-200/50 bg-white/70 backdrop-blur-xl supports-backdrop-filter:bg-white/60">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <Logo />
          {/* Desktop Menu */}
          <div className="hidden items-center gap-2 md:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200 hover:bg-black/5 ${isActive(link.to) ? "text-black" : "text-[#6e6e73]"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/app"
              className="ml-4 transform rounded-full bg-[#0071e3] px-5 py-1.5 text-[13px] font-medium text-white shadow-sm transition duration-200 hover:bg-[0077ED] active:scale-95"
            >
              Coba Demo
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-full p-2 text-[#1d1d1f] transition hover:bg-gray-100"
            >
              {isOpen ? <X className="size-5" /> : <Grip className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="animate-in slide-in-from-top-5 flex w-full flex-col space-y-2 border-b border-gray-200 bg-white/95 p-6 shadow-lg backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                isActive(link.to)
                  ? "bg-gray-100 text-[#0071e3]"
                  : "text-[#1d1d1f] hover:bg-gray-50"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/app"
            onClick={() => setIsOpen(false)}
            className="mt-4 block w-full rounded-xl bg-[#0071e3] py-3 text-center text-sm font-semibold text-white"
          >
            Launch App
          </Link>
        </div>
      )}
    </nav>
  );
};
