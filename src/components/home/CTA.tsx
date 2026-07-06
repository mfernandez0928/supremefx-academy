export default function CTA() {
  return (
    <section className="bg-[#080b12] py-28">
      <div className="mx-auto max-w-6xl rounded-3xl border border-[#D4AF37]/20 bg-[#11151d] px-12 py-20 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
          Join SupremeFX Academy
        </p>

        <h2 className="mx-auto max-w-3xl text-5xl font-bold text-white">
          Start Your Trading Journey With The Right Community
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Learn from experienced mentors, participate in live market analysis,
          and grow together with traders who share the same goals.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <button className="rounded-xl bg-[#D4AF37] px-10 py-4 font-semibold text-black">
            Apply Now
          </button>

          <button className="rounded-xl border border-[#D4AF37] px-10 py-4 font-semibold text-[#D4AF37]">
            Join Discord
          </button>
        </div>
      </div>
    </section>
  );
}
