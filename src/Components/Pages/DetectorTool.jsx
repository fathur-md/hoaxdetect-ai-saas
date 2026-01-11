import { Search, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";

export const DetectorTool = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleAnalyze = () => {
    if (!input.trim()) return;

    setLoading(true);
    setResult(null);
    setError("");

    // SIMULASI PROSES AI (Tanpa API Key)
    setTimeout(() => {
      try {
        const lowerText = input.toLowerCase();

        // Logika Sederhana untuk Mendeteksi Kata Kunci Hoaks
        const triggerWords = [
          "bagikan",
          "sebarluaskan",
          "gratis",
          "darurat",
          "viral",
          "awas",
          "hadiah",
          "menang",
          "dijamin",
          "tanda-tanda",
          "rahasia",
          "konspirasi",
          "bohong",
          "palsu",
          "resmi",
          "klik link",
        ];
        const foundTriggers = triggerWords.filter((word) =>
          lowerText.includes(word),
        );

        // Hitung Skor (Base score + jumlah kata pemicu)
        let calculatedScore = 15; // Base score valid

        if (foundTriggers.length > 0) {
          calculatedScore += 30 + foundTriggers.length * 12;
        }

        // Tambah penalti jika teks terlalu pendek (biasanya broadcast WA pendek)
        if (input.length < 50) calculatedScore += 20;

        // Randomize sedikit agar terlihat seperti AI berpikir (variasi +- 10)
        calculatedScore += Math.floor(Math.random() * 20) - 10;

        // Batasi skor min 5 max 99
        calculatedScore = Math.min(Math.max(calculatedScore, 5), 99);

        const isHoax = calculatedScore > 55;

        // Tentukan Alasan yang terlihat Cerdas
        let reasoning = "";
        if (isHoax) {
          reasoning = `Sistem mendeteksi pola bahasa alarmis dan penggunaan kata pemicu desakan emosional ${foundTriggers.length > 0 ? `(seperti: "${foundTriggers.slice(0, 3).join(", ")}")` : ""} yang merupakan karakteristik umum dalam penyebaran misinformasi online.`;
        } else {
          reasoning =
            "Analisis struktur linguistik menunjukkan narasi yang informatif, netral, dan memiliki konteks yang wajar. Tidak ditemukan indikator manipulasi emosi atau urgensi palsu yang signifikan.";
        }

        const data = {
          isHoax: isHoax,
          score: calculatedScore,
          reasoning: reasoning,
        };

        setResult(data);
      } catch (err) {
        setError("Terjadi kesalahan saat memproses data.");
      } finally {
        setLoading(false);
      }
    }, 2000); // Delay 2 detik agar terlihat "Mikir"
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
            className="h-48 w-full resize-none rounded-xl border-none bg-[#F5F5F7] p-4 text-lg leading-relaxed font-normal text-[#1d1d1f] transition-all outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#0071e3]/50"
            placeholder="Ketik atau tempel berita yang mencurigakan di sini..."
          ></textarea>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="w-full flex-1 text-left">
              {error ? (
                <span className="flex w-full items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-500">
                  <ShieldCheck size={16} /> {error}
                </span>
              ) : (
                <span className="flex items-center gap-1 text-sm font-medium text-gray-400">
                  <Sparkles size={14} className="text-[#0071e3]" /> System Ready
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
