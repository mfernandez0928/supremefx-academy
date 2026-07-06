import heroImage from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#05070d]">
      {/* LEFT CONTENT */}
      <div className="relative z-20 flex h-full w-[42%] min-w-[620px] flex-col justify-center pl-20">
        <span className="mb-6 text-sm font-semibold tracking-[0.4em] text-[#D4AF37]">
          SUPREMEFX ACADEMY
        </span>

        <h1 className="leading-[0.9] font-black text-white">
          <span className="block text-[110px]">TRADE</span>

          <span className="block text-[110px] text-[#D4AF37]">SMARTER.</span>

          <span className="block text-[110px]">LEARN</span>

          <span className="block text-[110px] text-[#D4AF37]">TOGETHER.</span>

          <span className="block text-[110px]">GROW</span>

          <span className="block text-[110px] text-[#D4AF37]">
            CONSISTENTLY.
          </span>
        </h1>

        <p className="mt-10 max-w-[560px] text-lg leading-9 text-gray-300">
          SupremeFX Academy is a professional trading community helping aspiring
          and experienced traders master the financial markets through
          structured education, live analysis and mentorship.
        </p>

        <div className="mt-10 flex gap-5">
          <button className="rounded-xl bg-[#D4AF37] px-10 py-4 font-semibold text-black">
            Apply Now
          </button>

          <button className="rounded-xl border border-[#D4AF37] px-10 py-4 font-semibold text-[#D4AF37]">
            Join Discord
          </button>
        </div>
      </div>

      {/* HERO IMAGE */}

      <img
        src={heroImage}
        alt="Hero"
        className="
absolute
right-[-6%]
top-1/2
z-10
w-[62%]
-translate-y-1/2
object-contain
select-none
pointer-events-none
"
      />

      {/* GOLD GLOW */}

      <div className="absolute right-[10%] top-1/2 h-[850px] w-[850px] -translate-y-1/2 rounded-full bg-[#D4AF37]/20 blur-[180px]" />
    </section>
  );
}
