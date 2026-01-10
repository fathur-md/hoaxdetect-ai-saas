import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-[#F5F5F7] pt-16 pb-12 text-xs text-[#86868b]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 grid gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <div className="mb-4 flex items-center gap-1 font-semibold text-[#1d1d1f]">
              <ShieldCheck size={16} /> HoaxDetect AI
            </div>
            <p className="max-w-xs leading-relaxed">
              Project Technopreneurship.
            </p>
          </div>
          <div>
            <h5 className="mb-3 font-semibold text-[#1d1d1f]">Produk</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/app" className="transition hover:text-[#1d1d1f]">
                  Analisis Berita
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  className="transition hover:text-[#1d1d1f]"
                >
                  Teknologi
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="transition hover:text-[#1d1d1f]">
                  Harga
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-3 font-semibold text-[#1d1d1f]">Legal</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="transition hover:text-[#1d1d1f]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#1d1d1f]">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          <p>Copyright © 2026. All rights reserved.</p>
          <p>Indonesia</p>
        </div>
      </div>
    </footer>
  );
};
