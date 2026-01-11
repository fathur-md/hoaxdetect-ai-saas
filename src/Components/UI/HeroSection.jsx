import { Activity, ArrowRight, Sparkles, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden pt-16 pb-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <h1 className="mb-6 text-5xl leading-[1.05] font-semibold tracking-tighter text-[#1d1d1f] md:text-7xl">
          Kebenaran. <br />
          <span className="bg-linear-to-br from-[#2997ff] to-[#0071e3] bg-clip-text text-transparent">
            Lebih Cepat dari Hoaks.
          </span>
        </h1>

        <p className="mb-12 max-w-2xl text-xl leading-relaxed font-medium tracking-tight text-[#86868b] md:text-2xl">
          Verifikasi berita dan pesan broadcast secara instan menggunakan
          kecerdasan buatan. Tanpa bias. Tanpa ragu.
        </p>

        <div className="mb-20 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <button
            onClick={() => navigate("/app")}
            className="flex items-center justify-center gap-2 rounded-full bg-[#0071e3] px-8 py-4 text-[17px] font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] hover:bg-[#0077ED] active:scale-[0.98]"
          >
            Mulai Analisis
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => navigate("/technology")}
            className="flex items-center justify-center gap-2 rounded-full border border-[#0071e3]/20 bg-white px-8 py-4 text-[17px] font-medium text-[#0071e3] transition-all hover:bg-[#F5F5F7] hover:text-[#0077ED]"
          >
            Pelajari Teknologi
          </button>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          <BentoCard
            title="Akurasi Tinggi"
            value="98%"
            desc="Algoritma Text Mining."
            icon={<Activity className="text-green-500" />}
          />
          <BentoCard
            title="Kecepatan"
            value="<1s"
            desc="Analisis real-time."
            icon={<Zap className="text-amber-500" />}
          />
          <BentoCard
            title="Teknologi"
            value="NLP"
            desc="Natural Language Proc."
            icon={<Sparkles className="text-purple-500" />}
          />
        </div>
      </div>
    </section>
  );
};

const BentoCard = ({ title, value, desc, icon }) => (
  <div className="flex flex-col items-center justify-center rounded-3xl border border-white/50 bg-white p-8 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:scale-[1.02]">
    <div className="mb-4 rounded-full bg-gray-50 p-3">{icon}</div>
    <h3 className="mb-1 text-4xl font-bold tracking-tight text-[#1d1d1f]">
      {value}
    </h3>
    <p className="mb-1 text-sm font-semibold text-[#1d1d1f]">{title}</p>
    <p className="text-xs text-[#86868b]">{desc}</p>
  </div>
);
