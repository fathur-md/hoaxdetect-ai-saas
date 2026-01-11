import { BrainCircuit, Cpu, Database } from "lucide-react";

export const Technology = () => (
  <section className="mx-auto max-w-5xl px-6 py-20">
    <div className="mb-16 max-w-2xl">
      <h2 className="mb-4 text-4xl font-semibold text-[#1d1d1f]">
        Under the Hood.
      </h2>
      <p className="text-xl text-[#86868b]">
        Bagaimana HoaxDetect menggabungkan pemrosesan bahasa alami dengan
        algoritma cerdas.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Big Card */}
      <div className="col-span-1 rounded-[30px] border border-gray-100 bg-white p-10 shadow-sm transition-shadow hover:shadow-md md:col-span-2">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#0071e3]">
          <BrainCircuit size={32} />
        </div>
        <h3 className="mb-3 text-2xl font-semibold tracking-tight">
          Algoritma Hybrid
        </h3>
        <p className="text-[17px] leading-relaxed text-[#86868b]">
          Kami menggunakan pendekatan hibrida yang menggabungkan pencocokan pola
          kata kunci (Keyword Pattern Matching) dengan analisis heuristik untuk
          mendeteksi anomali dalam struktur teks berita.
        </p>
      </div>

      {/* Small Cards */}
      <div className="rounded-[30px] border border-gray-100 bg-white p-10 shadow-sm transition-shadow hover:shadow-md">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
          <Cpu size={24} />
        </div>
        <h3 className="mb-2 text-xl font-semibold">Fast Processing</h3>
        <p className="text-[#86868b]">
          Analisis instan tanpa bergantung pada latensi jaringan eksternal.
        </p>
      </div>

      <div className="rounded-[30px] border border-gray-100 bg-white p-10 shadow-sm transition-shadow hover:shadow-md">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
          <Database size={24} />
        </div>
        <h3 className="mb-2 text-xl font-semibold">Privacy First</h3>
        <p className="text-[#86868b]">
          Data yang Anda masukkan diproses langsung dan tidak disimpan di server
          pihak ketiga.
        </p>
      </div>
    </div>
  </section>
);
