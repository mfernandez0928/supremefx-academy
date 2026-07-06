import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-[#080b12] py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold text-white">
            What Our Members Say
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-white/10 bg-[#11151d] p-8"
            >
              <p className="leading-8 text-gray-300">"{item.message}"</p>

              <div className="mt-8">
                <h3 className="font-bold text-white">{item.name}</h3>

                <p className="text-[#D4AF37]">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
