import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
export const Logo = () => {
  return (
    <>
      <Link to="/" className="group flex cursor-pointer items-center gap-2">
        <ShieldCheck className="text-[#0071e3] transition-transform group-hover:scale-110" />
        <span className="text-[19px] font-semibold tracking-tight text-[#1d1d1f]">
          HoaxDetect<span className="text-[#0071e3]">AI</span>
        </span>
      </Link>
    </>
  );
};
