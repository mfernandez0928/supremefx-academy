import { programs } from "../../data/programs";

export default function Programs() {
  return (
    <section className="bg-[#080b12] py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Our Programs
          </p>

          <h2 className="text-5xl font-bold text-white">
            Learn Through A Structured Roadmap
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Whether you're a complete beginner or an experienced trader,
            SupremeFX Academy provides a clear learning path to help you become
            consistently profitable.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-2xl border border-white/10 bg-[#11151d] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]"
            >
              <h3 className="mb-5 text-2xl font-bold text-[#D4AF37]">
                {program.title}
              </h3>

              <p className="leading-8 text-gray-400">{program.description}</p>

              <button className="mt-8 font-semibold text-[#D4AF37]">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
