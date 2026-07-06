import { coreTeam } from "../../data/team";

export default function CoreTeam() {
  return (
    <section className="bg-[#05070d] py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Meet Our Core Team
          </p>

          <h2 className="text-5xl font-bold text-white">
            The People Behind SupremeFX Academy
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Our team is committed to helping every member become a disciplined,
            consistent, and confident trader through education, mentorship, and
            real market experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {coreTeam.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#11151d] transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-[380px] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>

                <p className="mt-2 text-[#D4AF37]">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
