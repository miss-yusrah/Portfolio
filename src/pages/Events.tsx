import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { eventPics } from "../constants";

const Events = () => {
  useGSAP(() => {
    gsap.from(".events-content", {
      scrollTrigger: {
        trigger: ".events-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="events-section pt-20 md:pt-40 md:p-7">
      <div className="events-content md:mx-20">
        {/* Header */}
        <div className="projects-header space-y-6 p-3 md:p-0">
          <h2 className="text-primary text-5xl font-bold">Events & Programs</h2>
          <p className="text-[#111827] text-sm md:text-2xl">
            Selected community programs, developer events, and onchain
            initiatives that contributed to my growth as a frontend developer.
          </p>
        </div>

        {/* ================= BASE ONCHAIN SUMMER ================= */}
        <div className="bg-tetiary mt-10 md:mt-30 mb-24">
          <p className="text-primary font-bold text-2xl p-3 md:p-10 ml-5 md:ml-10">
            Base Onchain Summer
          </p>

          <p className="text-secondary px-3 md:px-10 ml-5 md:ml-10 mb-6 max-w-4xl">
            Participated in Base’s global Onchain Summer initiative, engaging in
            Web3-focused learning, onchain interactions, and community-driven
            activities. The program exposed me to the Base ecosystem and
            strengthened my understanding of how frontend development connects
            with blockchain-powered applications.
          </p>

          <div className="grid grid-cols-3 gap-4 p-10 md:max-w-7xl mx-auto">
            <div className="rounded-lg col-span-1">
              <img
                src={eventPics?.[0]?.pic}
                alt="Base Onchain Summer Event 1"
                className="w-full aspect-3/4 object-cover rounded-lg"
              />
            </div>

            <div className="rounded-lg col-span-2">
              <img
                src={eventPics?.[1]?.pic}
                alt="Base Onchain Summer Event 2"
                className="w-full h-full aspect-video object-cover rounded-lg"
              />
            </div>

            <div className="rounded-lg col-span-2">
              <img
                src={eventPics?.[2]?.pic}
                alt="Base Onchain Summer Event 3"
                className="w-full h-full aspect-video object-cover rounded-lg"
              />
            </div>

            <div className="rounded-lg col-span-1">
              <img
                src={eventPics?.[3]?.pic}
                alt="Base Onchain Summer Event 4"
                className="w-full aspect-3/4 object-cover rounded-lg"
              />
            </div>

            <div className="rounded-lg col-span-3">
              <img
                src={eventPics?.[4]?.pic}
                alt="Base Onchain Summer Event 5"
                className="w-full h-full aspect-video object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* ================= LINERA AFRICA ================= */}
        <div className="bg-tetiary mb-40">
          <p className="text-primary font-bold text-2xl p-3 md:p-10 ml-5 md:ml-10">
            Linera Africa Program
          </p>

          <p className="text-secondary px-3 md:px-10 ml-5 md:ml-10 mb-6 max-w-4xl">
            Attended Linera Africa community sessions focused on next-generation
            blockchain infrastructure and scalable Web3 systems. The program
            deepened my exposure to decentralized technologies and reinforced my
            interest in building frontend interfaces for onchain and real-time
            applications.
          </p>

          <div className="grid grid-cols-3 gap-4 p-10 md:max-w-7xl mx-auto">
            <div className="rounded-lg col-span-1">
              <img
                src={eventPics?.[5]?.pic}
                alt="Linera Africa Event 1"
                className="w-full aspect-3/4 object-cover rounded-lg"
              />
            </div>

            <div className="rounded-lg col-span-2">
              <img
                src={eventPics?.[6]?.pic}
                alt="Linera Africa Event 2"
                className="w-full h-full aspect-video object-cover rounded-lg"
              />
            </div>

            <div className="rounded-lg col-span-2">
              <img
                src={eventPics?.[7]?.pic}
                alt="Linera Africa Event 3"
                className="w-full h-full aspect-video object-cover rounded-lg"
              />
            </div>

            <div className="rounded-lg col-span-1">
              <img
                src={eventPics?.[8]?.pic}
                alt="Linera Africa Event 4"
                className="w-full aspect-3/4 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
