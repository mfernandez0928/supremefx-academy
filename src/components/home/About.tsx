import { aboutCards } from "../../data/about";

export default function About() {
  return (
    <section className="bg-[#080b12] py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            About SupremeFX Academy
          </p>

          <h2 className="mb-6 text-5xl font-bold text-white">
            More Than Just A Trading Community
          </h2>

          <p className="max-w-3xl text-lg leading-8 text-gray-400">
            SupremeFX Academy is built to help traders develop discipline,
            confidence, and consistency through structured education,
            mentorship, live analysis, and an active trading community.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {aboutCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-[#11151d] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]"
            >
              <h3 className="mb-4 text-2xl font-bold text-[#D4AF37]">
                {card.title}
              </h3>

              <p className="leading-8 text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
