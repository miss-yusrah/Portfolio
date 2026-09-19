const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const to = "mohammedyusi6@gmail.com";
    const subject = encodeURIComponent(
      `Portfolio contact from ${name || "Visitor"} <${email}>`
    );
    const body = encodeURIComponent(
      `Name: ${name || "-"}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="pb-20 md:pb-28" id="contact">
      <div className="section-shell">
        <div className="border border-line bg-paper rounded-2xl p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="space-y-4">
              <p className="text-sm tracking-[0.16em] uppercase text-muted">
                Let’s build something
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink leading-tight">
                Have an idea, product, or problem you want to work on?
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                Reach out if you want to collaborate, hire, or just talk through
                something you’re building.
              </p>
              <a
                href="mailto:mohammedyusi6@gmail.com"
                className="inline-block text-accent font-medium hover:underline underline-offset-4"
              >
                mohammedyusi6@gmail.com
              </a>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="text-sm font-medium text-ink">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1.5 w-full rounded-md border border-line bg-fog px-3.5 py-3 outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1.5 w-full rounded-md border border-line bg-fog px-3.5 py-3 outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-ink"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1.5 w-full rounded-md border border-line bg-fog px-3.5 py-3 outline-none focus:border-accent resize-y min-h-[110px]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-ink text-fog px-6 py-3 rounded-md font-medium hover:bg-accent transition-colors"
              >
                Get in touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
