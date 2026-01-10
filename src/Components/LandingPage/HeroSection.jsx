import { Activity, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative z-10 w-full bg-linear-to-b from-transparent to-gray-100 px-6 py-36 text-center dark:to-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-pulse">
          <Activity className="size-6" />
          <span>Versi Beta 1.0: Tersedia untuk Publik</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 dark:text-white">
          Lawan Misinformasi dengan <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
            Kecerdasan Buatan
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
          Platform SaaS terpercaya untuk memvalidasi artikel, berita, dan pesan
          berantai secara instan. Tingkatkan kredibilitas informasi Anda
          sekarang.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={() => navigate("/app")}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-blue-200 flex items-center justify-center gap-2 group"
          >
            <Search className="size-6 group-hover:scale-110 transition" />
            Analisis Berita Sekarang
          </button>

          <button
            onClick={() => navigate("/methodology")}
            className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 flex items-center justify-center gap-2"
          >
            Pelajari Cara Kerja
          </button>
        </div>
      </div>
    </section>
  );
};
