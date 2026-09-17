import {
  FiFilm,
  FiHeart,
  FiZap,
  FiCompass,
  FiSmile,
  FiMoon,
} from "react-icons/fi";

const genres = [
  {
    name: "Action",
    description: "Adrenaline & adventure",
    icon: FiZap,
  },
  {
    name: "Drama",
    description: "Stories that move you",
    icon: FiHeart,
  },
  {
    name: "Comedy",
    description: "Laugh & enjoy",
    icon: FiSmile,
  },
  {
    name: "Adventure",
    description: "Explore new worlds",
    icon: FiCompass,
  },
  {
    name: "Thriller",
    description: "Keep you guessing",
    icon: FiMoon,
  },
  {
    name: "Sci-Fi",
    description: "Beyond imagination",
    icon: FiFilm,
  },
];

const BrowseGenres = () => {
  return (
    <section className="border-y border-[#e7e0cb]/5 bg-[#1c0712] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#facc3b]">
            Find Your Mood
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#e7e0cb] sm:text-4xl">
            Browse by Genre
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#e7e0cb]/50">
            Whether you want action, drama, comedy or something completely
            different, there is always something to discover.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {genres.map((genre) => {
            const Icon = genre.icon;

            return (
              <button
                key={genre.name}
                type="button"
                className="group rounded-2xl border border-[#e7e0cb]/10 bg-[#31010f] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#facc3b]/30 hover:bg-[#9a1840]/15"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#9a1840]/20 text-[#facc3b] transition-colors duration-300 group-hover:bg-[#facc3b] group-hover:text-[#31010f]">
                  <Icon size={20} />
                </div>

                <h3 className="mt-5 text-sm font-bold text-[#e7e0cb]">
                  {genre.name}
                </h3>

                <p className="mt-1 text-xs leading-5 text-[#e7e0cb]/40">
                  {genre.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrowseGenres;
