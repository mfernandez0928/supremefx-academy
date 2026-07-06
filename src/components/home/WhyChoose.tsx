import { CheckCircle2 } from "lucide-react";
import { features } from "../../data/features";

export default function WhyChoose() {
  return (
    <section className="bg-[#05070d] py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Why Choose SupremeFX
          </p>

          <h2 className="mb-6 text-5xl font-bold text-white">
            Everything You Need To Become A Better Trader
          </h2>

          <p className="text-lg leading-8 text-gray-400">
            We focus on practical education, live market experience, risk
            management, and a supportive community to help traders build
            consistency over the long term.
          </p>
        </div>

        <div className="grid gap-5">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#11151d] p-5"
            >
              <CheckCircle2 className="text-[#D4AF37]" size={24} />

              <span className="text-lg text-white">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
