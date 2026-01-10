import { useState } from "react";
import { Search, ShieldCheck, Sparkles } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
const API_KEY = process.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenAI({ apiKey: API_KEY });

export const DetectorTool = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!input.trim()) return;

    if (!API_KEY) {
      setError("Konfigurasi API Key belum tersedia. Hubungi administrator.");
      return;
    }
    setLoading(true);
    setResult(null);
    setError("");

    try {
      const prompt = `
        Analisis teks berita ini: "${input}".
        Tentukan apakah berita ini HOAKS ATAU FAKTA.
        Kembalikan JSON dengan struktur:
        {"isHoax": boolean, "score": number, "reasoning": "string"}.
        Berikan skor hoaks 0-100 (makin tinggi = makin hoaks).
        Berikan alasan singkat (maksimal 2 kalimat).
      `;

      const response = await genAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        config: {
          responseMimeType: "application/json",
        },
      });

      const data = JSON.parse(response.text);
      setResult(data);
    } catch (err) {
      setError("Terjadi kesalahan saat menganalisis teks. Silakan coba lagi.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="mx-auto min-h-[85vh] w-full max-w-4xl px-6 py-12">
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-3xl font-semibold text-[#1d1d1f]">
          Analisis Berita
        </h2>
        <p className="text-lg text-[#86868b]">
          Tempelkan teks artikel untuk diperiksa kebenarannya.
        </p>
      </div>

      <div className="relative w-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
        <div className="p-8">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-48 w-full resize-none rounded-xl border-none bg-[#F5F5F7] p-4 text-lg leading-relaxed font-normal text-[#1d1d1f] transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-[#0071e3]/50"
            placeholder="Ketik atau tempel berita yang mencurigakan di sini..."
          ></textarea>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="w-full flex-1">
              {error ? (
                <span className="flex w-full items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-500">
                  <ShieldCheck size={16} /> {error}
                </span>
              ) : (
                <span className="flex items-center gap-1 text-sm font-medium text-gray-400">
                  <Sparkles size={14} className="text-[#0071e3]" /> Gemini AI
                  Ready
                </span>
              )}
            </div>

            <button
              onClick={handleAnalyze}
              disabled={loading || !input}
              className={`flex w-full transform items-center justify-center gap-2 rounded-full px-8 py-3 text-[15px] font-medium text-white transition-all active:scale-95 sm:w-auto ${loading ? "cursor-not-allowed bg-gray-300" : "bg-[#0071e3] shadow-lg shadow-blue-500/20 hover:bg-[#0077ED]"}`}
            >
              {loading ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              ) : (
                <Search size={16} />
              )}
              {loading ? "Memproses..." : "Periksa"}
            </button>
          </div>
        </div>
      </div>

      {/* Result Card */}
      {result && (
        <div className="animate-in slide-in-from-bottom-5 fade-in mt-8 pb-20 duration-500">
          <div
            className={`rounded-3xl border bg-white p-8 ${result.isHoax ? "border-red-100" : "border-green-100"} flex flex-col items-center gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] md:flex-row`}
          >
            {/* Score Ring */}
            <div className="relative flex h-28 w-28 shrink-0 items-center justify-center">
              <svg className="h-full w-full -rotate-90 transform">
                <circle
                  cx="56"
                  cy="56"
                  r="50"
                  stroke="#f5f5f7"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="56"
                  cy="56"
                  r="50"
                  stroke={result.isHoax ? "#ff3b30" : "#34c759"}
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={314}
                  strokeDashoffset={314 - (314 * result.score) / 100}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span
                  className={`text-2xl font-bold ${result.isHoax ? "text-[#ff3b30]" : "text-[#34c759]"}`}
                >
                  {result.score}%
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase">
                  Hoax Lvl
                </span>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3
                className={`mb-2 text-2xl font-semibold ${result.isHoax ? "text-[#ff3b30]" : "text-[#34c759]"}`}
              >
                {result.isHoax ? "Potensi Hoaks Tinggi" : "Terindikasi Valid"}
              </h3>
              <p className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-[15px] leading-relaxed text-[#1d1d1f] italic opacity-80">
                "{result.reasoning}"
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
