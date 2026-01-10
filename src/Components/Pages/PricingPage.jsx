import { CheckCircle2 } from "lucide-react";

export const PricingPage = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 text-center">
      <h2 className="mb-4 text-4xl font-semibold text-[#1d1d1f]">
        Pilih Paket.
      </h2>
      <p className="mb-16 text-xl text-[#86868b]">
        Investasi cerdas untuk kebenaran informasi.
      </p>

      <div className="grid items-start gap-6 md:grid-cols-3">
        <PricingCard
          title="Student"
          price="Rp 0"
          features={["Akses Web", "10 Analisis/hari", "Iklan Ringan"]}
        />
        <PricingCard
          title="Journalist"
          price="Rp 49rb"
          active
          features={[
            "Unlimited Analisis",
            "API Access",
            "Export PDF",
            "No Ads",
          ]}
        />
        <PricingCard
          title="Enterprise"
          price="Custom"
          features={[
            "Dedicated Server",
            "Custom Dataset",
            "SLA Support",
            "On-Premise",
          ]}
        />
      </div>
    </section>
  );
};

const PricingCard = ({ title, price, features, active }) => (
  <div
    className={`flex h-full flex-col rounded-[30px] p-8 text-left transition-all duration-300 ${active ? "z-10 scale-105 bg-[#1d1d1f] text-white shadow-2xl" : "border border-gray-100 bg-white text-[#1d1d1f] shadow-sm"}`}
  >
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <div className="mb-8 text-4xl font-bold tracking-tight">
      {price}
      <span className="text-lg font-normal opacity-60">/bln</span>
    </div>
    <ul className="mb-8 grow space-y-4">
      {features.map((f, i) => (
        <li
          key={i}
          className="flex items-center gap-3 text-[15px] font-medium opacity-80"
        >
          <CheckCircle2
            size={18}
            className={active ? "text-[#2997ff]" : "text-[#0071e3]"}
          />{" "}
          {f}
        </li>
      ))}
    </ul>
    <button
      className={`mt-auto w-full rounded-full py-3.5 text-[15px] font-medium transition-colors ${active ? "bg-[#2997ff] text-white hover:bg-[#0071e3]" : "bg-[#F5F5F7] text-[#1d1d1f] hover:bg-[#e8e8ed]"}`}
    >
      Pilih {title}
    </button>
  </div>
);
