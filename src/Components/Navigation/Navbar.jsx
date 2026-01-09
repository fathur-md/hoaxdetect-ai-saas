import { useState } from "react";
import { Link } from "react-router-dom";
import { Grip, ShieldCheck, X } from "lucide-react";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-30 flex flex-col">
      <div className="flex h-12 w-full bg-gray-50/80 backdrop-blur-[14px] dark:bg-zinc-800/70 border-b border-gray-200 dark:border-zinc-800">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-0.5">
            <ShieldCheck className="text-blue-500" />
            <span className="font-bold">
              HoaxDetect
              <span className="text-blue-500 font-black">AI</span>
            </span>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium items-center">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="mx-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen((prev) => !prev)}>
              {isOpen ? <X className="size-6" /> : <Grip className="size-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="w-full bg-gray-50/80 backdrop-blur-[14px] dark:bg-zinc-800/70 border-b border-gray-200 dark:border-zinc-800 flex flex-col p-4 space-y-4 shadow-sm">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="w-full text-center py-2  text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-zinc-700"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
