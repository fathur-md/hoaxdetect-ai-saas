import Fathur from "../../Assets/fathur.png";
import Hendri from "../../Assets/hendri.png";
import Alba from "../../Assets/alba.png";

export const AboutPage = () => {
  const teamMembers = [
    {
      name: "Hendri Setyawan",
      role: "Project Manager",
      icon: Hendri,
    },
    {
      name: "Muhammad Fathurrahman",
      role: "Developer",
      icon: Fathur,
    },
    {
      name: "Augitian Alba Setiaji",
      role: "Business Analyst",
      icon: Alba,
    },
  ];
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20">
      <div className="rounded-[40px] border border-gray-100 bg-white p-12 text-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)]">
        <h2 className="mb-8 text-3xl font-semibold text-[#1d1d1f]">
          Tentang Kami
        </h2>
        <p className="mb-12 text-lg leading-relaxed text-[#86868b]">
          HoaxDetect AI adalah platform cerdas yang dirancang untuk membantu
          Anda mengidentifikasi dan memahami informasi dengan lebih baik.
          <br />
          <br />
          Kami percaya bahwa akses ke teknologi yang andal dapat memberdayakan
          setiap orang untuk membuat keputusan yang lebih informed.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="group flex flex-col items-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors duration-300 group-hover:bg-[#0071e3] group-hover:text-white">
                <img
                  src={member.icon}
                  alt={member.name}
                  className="h-20 w-20 rounded-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-[#1d1d1f]">{member.name}</h4>
              <span className="mt-1 text-xs font-medium tracking-wide text-[#0071e3] uppercase">
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
