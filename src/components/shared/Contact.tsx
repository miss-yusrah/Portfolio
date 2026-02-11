import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const to = "mohammedyusi6@gmail.com";
    const subject = encodeURIComponent(`Portfolio contact from ${name || "Visitor"} <${email}>`);
    const body = encodeURIComponent(`Name: ${name || "—"}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".contact-header", {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power2.out",
    })
      .from(
        ".form-field",
        { opacity: 0, x: -30, stagger: 0.2, duration: 0.6 },
        "-=0.5"
      )
      .from(".submit-btn", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3");
  }, []);

  return (
    <section className="contact-section bg-tetiary  gap-50 md:my-10 md:mx-30 p-7 md:p-10 space-y-7">
      <div className="contact-header">
        <h3 className="text-primary font-bold text-3xl">Let’s Talk</h3>
        <p className="text-secondary text-sm md:text-2xl">
          Let’s collaborate! Reach out if you would like to work on a project.
        </p>
      </div>
      <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            name="name"
            id="name"
            className="bg-white rounded-lg w-full p-4 mt-2"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email Address</label> <br />
          <input
            type="email"
            name="email"
            id="email"
            className="bg-white rounded-lg w-full p-4 mt-2"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message</label> <br />
          <textarea
            name="message"
            id="message"
            className="bg-white rounded-lg w-full p-4 mt-2 h-50 "
            required
          />
        </div>

        <div className="submit-btn">
          <button
            type="submit"
            className="bg-primary text-white px-20 py-4 rounded-lg w-full md:w-fit cursor-pointer hover:scale-105"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
export default Contact;
