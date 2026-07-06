import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/faq";

export default function FAQ() {
  return (
    <section className="bg-[#05070d] py-28">
      <div className="mx-auto max-w-5xl px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Frequently Asked Questions
          </p>

          <h2 className="text-5xl font-bold text-white">Got Questions?</h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Here are some of the most common questions about SupremeFX Academy.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-[#11151d] p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {faq.question}
                </h3>

                <ChevronDown className="text-[#D4AF37]" />
              </div>

              <p className="mt-5 leading-8 text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
