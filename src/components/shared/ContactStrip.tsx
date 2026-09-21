import { useSectionReveal } from "../../hooks/useSectionReveal";

const ContactStrip = () => {
  useSectionReveal(".contact-strip");

  return (
    <section className="contact-strip py-14 md:py-20" id="contact">
      <div className="section-shell">
        <div className="reveal-item flex flex-col md:flex-row md:items-center justify-between gap-6 border border-line bg-paper rounded-lg p-6 md:p-8">
          <div className="space-y-2">
            <p className="label-mono">03 / contact</p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
              Have something to build?
            </h2>
            <p className="text-muted text-base max-w-md">
              Open to web apps, product work, frontend engineering, and Web3
              collaboration.
            </p>
          </div>
          <a
            href="mailto:mohammedyusi6@gmail.com"
            className="inline-flex items-center justify-center bg-ink text-fog px-5 py-3 rounded-md text-sm font-medium hover:bg-accent hover:text-fog transition-colors shrink-0"
          >
            mohammedyusi6@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
