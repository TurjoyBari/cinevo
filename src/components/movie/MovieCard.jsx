import { FiArrowUpRight, FiStar, FiClock } from "react-icons/fi";

const MovieCard = ({ movie, onDetailsClick }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#e7e0cb]/10 bg-[#1c0712] transition-all duration-300 hover:-translate-y-1 hover:border-[#facc3b]/25 hover:shadow-xl hover:shadow-black/20">
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.image?.medium}
          alt={movie.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#31010f] via-transparent to-transparent opacity-80" />

        {/* Rating */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full  text-[#facc3b] bg-[#31010f]/85 px-3 py-1.5 text-xs font-bold backdrop-blur-md">
          <FiStar size={13} className="fill-[#facc3b]" />

          <span>{movie.rating?.average}</span>
        </div>

        {/* Genre */}
        <div className="absolute bottom-3 left-3">
          <span className="rounded-full border border-[#e7e0cb]/20  text-[#facc3b] bg-[#31010f]/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md">
            {movie.genres?.join(", ")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="truncate text-base font-bold text-[#e7e0cb]">
          {movie.name}
        </h3>

        <div className="mt-2 flex items-center gap-3 text-xs text-[#e7e0cb]/45">
          <span>{movie.premiered.slice(0, 4)}</span>

          <span className="h-1 w-1 rounded-full bg-[#e7e0cb]/30" />

          <span className="flex items-center gap-1">
            <FiClock size={12} />
            {movie.averageRuntime}
          </span>
        </div>

        {/* Details Button */}
        <button
          type="button"
          onClick={() => onDetailsClick(movie)}
          className="group/button mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-[#e7e0cb]/10 py-2.5 text-xs font-semibold text-[#e7e0cb]/80 transition-all duration-300 hover:border-[#facc3b]/30 hover:bg-[#facc3b] hover:text-[#31010f]"
        >
          See Details
          <FiArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
          />
        </button>
      </div>
    </article>
  );
};

export default MovieCard;
