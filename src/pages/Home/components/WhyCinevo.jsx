import { FiSearch, FiLayers, FiStar, FiCompass } from "react-icons/fi";

const features = [
  {
    number: "01",
    icon: FiSearch,
    title: "Discover Easily",
    description:
      "Search and explore movies without wasting time navigating complicated interfaces.",
  },
  {
    number: "02",
    icon: FiLayers,
    title: "Everything in One Place",
    description:
      "Keep movie information, ratings, genres and details together in one simple experience.",
  },
  {
    number: "03",
    icon: FiStar,
    title: "Explore Ratings",
    description:
      "Check ratings and movie information before deciding what deserves your watch time.",
  },
  {
    number: "04",
    icon: FiCompass,
    title: "Find Something New",
    description:
      "Go beyond familiar titles and discover movies you may not have found otherwise.",
  },
];

const WhyCinevo = () => {
  return (
    <section className="border-y border-[#e7e0cb]/5 bg-[#1c0712] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#facc3b]">
            The Cinevo Experience
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#e7e0cb] sm:text-4xl">
            Made for People Who Love Movies
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#e7e0cb]/50">
            A simple movie discovery experience designed to help you spend less
            time searching and more time watching.
          </p>
        </div>

        {/* Features */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[#e7e0cb]/10 bg-[#e7e0cb]/10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.number}
                className="group bg-[#31010f] p-7 transition-colors duration-300 hover:bg-[#9a1840]/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#facc3b]/10 text-[#facc3b] transition-all duration-300 group-hover:bg-[#facc3b] group-hover:text-[#31010f]">
                    <Icon size={21} />
                  </div>

                  <span className="text-xs font-bold text-[#e7e0cb]/15">
                    {feature.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold text-[#e7e0cb]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#e7e0cb]/45">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyCinevo;
