import { eventPics } from "../constants";
import { useSectionReveal } from "../hooks/useSectionReveal";

const Events = () => {
  useSectionReveal(".events-header");
  useSectionReveal(".events-base");
  useSectionReveal(".events-linera");

  return (
    <div className="pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="section-shell">
        <div className="events-header max-w-2xl space-y-3 mb-10 md:mb-14">
          <p className="reveal-item label-mono">events & programs</p>
          <h1 className="reveal-item font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink">
            Community, builders, and onchain learning
          </h1>
          <p className="reveal-item text-muted text-base md:text-lg leading-relaxed">
            Programs that pushed me from interfaces into blockchain ecosystems
            and collaborative building.
          </p>
        </div>

        <div className="events-base border border-line bg-paper rounded-2xl overflow-hidden mb-8 md:mb-10">
          <div className="reveal-item p-5 sm:p-6 md:p-8 space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink">
              Base Onchain Summer
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-3xl leading-relaxed">
              Learning sessions, onchain challenges, and community work around
              building frontend for blockchain-powered apps on Base.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 sm:p-6 md:p-8 pt-0">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`reveal-item rounded-lg overflow-hidden ${
                  i === 4 ? "col-span-2 md:col-span-3" : ""
                }`}
              >
                <img
                  src={eventPics?.[i]?.pic}
                  alt=""
                  className={`w-full object-cover rounded-lg ${
                    i === 4 ? "aspect-video" : "aspect-[4/3]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="events-linera border border-line bg-paper rounded-2xl overflow-hidden">
          <div className="reveal-item p-5 sm:p-6 md:p-8 space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink">
              Linera Africa Program
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-3xl leading-relaxed">
              Community sessions on infrastructure and scalable Web3 systems.
              More exposure to how frontend sits on decentralized and real-time
              apps.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 sm:p-6 md:p-8 pt-0">
            {[5, 6, 7, 8].map((i) => (
              <div key={i} className="reveal-item rounded-lg overflow-hidden">
                <img
                  src={eventPics?.[i]?.pic}
                  alt=""
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
