import { FiArrowRight, FiFilm, FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";

const MovieCTA = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#e7e0cb]/10 bg-[#9a1840]/20">
        {/* Background glow */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#e6481b]/20 blur-[100px]" />

        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#facc3b]/10 blur-[100px]" />

        <div className="relative px-6 py-16 text-center sm:px-12 lg:px-20 lg:py-20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#facc3b] text-[#31010f]">
            <FiFilm size={25} />
          </div>

          <h2 className="mx-auto mt-7 max-w-2xl text-3xl font-black leading-tight text-[#e7e0cb] sm:text-4xl lg:text-5xl">
            Your Next Favorite Movie
            <span className="text-[#facc3b]"> Is Waiting.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#e7e0cb]/55 sm:text-base">
            Ready to discover something worth watching? Explore our movie
            collection and find your next story.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/explore"
              className="group flex items-center gap-2 rounded-xl bg-[#facc3b] px-6 py-3.5 text-sm font-bold text-[#31010f] transition-all duration-300 hover:bg-[#e6481b] hover:text-[#e7e0cb]"
            >
              Explore Movies
              <FiArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/about"
              className="flex items-center gap-2 rounded-xl border border-[#e7e0cb]/15 px-6 py-3.5 text-sm font-semibold text-[#e7e0cb] transition-all duration-300 hover:border-[#facc3b]/40 hover:bg-[#e7e0cb]/5"
            >
              <FiPlay size={15} />
              Learn About Cinevo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieCTA;
