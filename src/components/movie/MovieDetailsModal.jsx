import { useEffect } from "react";
import { FiX, FiStar, FiCalendar, FiClock, FiFilm } from "react-icons/fi";

const MovieDetailsModal = ({ movie, onClose }) => {
  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Prevent background scrolling
  useEffect(() => {
    if (!movie) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [movie]);

  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="movie-modal-title"
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-[#e7e0cb]/10 bg-[#1c0712] shadow-2xl shadow-black/50"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close movie details"
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-[#e7e0cb]/15 bg-[#31010f]/80 text-[#e7e0cb] backdrop-blur-md transition-all duration-300 hover:border-[#facc3b]/40 hover:bg-[#facc3b] hover:text-[#31010f]"
        >
          <FiX size={20} />
        </button>

        {/* Content */}
        <div className="max-h-[90vh] overflow-y-auto">
          {/* Movie Image */}
          <div className="relative h-[280px] w-full sm:h-[350px]">
            <img
              src={movie.image?.medium}
              alt={movie.name}
              className="h-full w-full object-cover"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c0712] via-[#31010f]/20 to-transparent" />

            {/* Movie Title on Image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#facc3b]">
                Movie Details
              </p>

              <h2
                id="movie-modal-title"
                className="max-w-2xl text-3xl font-black text-[#e7e0cb] sm:text-4xl"
              >
                {movie.name}
              </h2>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap gap-3">
              {/* Rating */}
              <div className="flex items-center gap-2 rounded-full border border-[#facc3b]/20 bg-[#facc3b]/10 px-4 py-2 text-sm font-semibold text-[#facc3b]">
                <FiStar size={15} className="fill-[#facc3b]" />

                {movie.rating?.average}
              </div>

              {/* Release Year / Date */}
              <div className="flex items-center gap-2 rounded-full border border-[#e7e0cb]/10 bg-[#e7e0cb]/5 px-4 py-2 text-sm text-[#e7e0cb]/70">
                <FiCalendar size={15} />

                {movie.premiered.slice(0, 4) || movie.ended}
              </div>

              {/* Genre */}
              {movie.genres?.join(", ") && (
                <div className="flex items-center gap-2 rounded-full border border-[#e7e0cb]/10 bg-[#e7e0cb]/5 px-4 py-2 text-sm text-[#e7e0cb]/70">
                  <FiFilm size={15} />

                  {movie.genres?.join(", ")}
                </div>
              )}

              {/* Duration */}
              {movie.averageRuntime && (
                <div className="flex items-center gap-2 rounded-full border border-[#e7e0cb]/10 bg-[#e7e0cb]/5 px-4 py-2 text-sm text-[#e7e0cb]/70">
                  <FiClock size={15} />

                  {movie.averageRuntime}
                </div>
              )}
            </div>

            {/* Overview */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-[#e7e0cb]">Overview</h3>

              <p className="mt-3 text-sm leading-7 text-[#e7e0cb]/55">
                {movie.summary
                  .replace(/<b>/g, "")
                  .replace(/<\/b>/g, "")
                  .replace(/<p>/g, "")
                  .replace(/<\/p>/g, "") ||
                  movie.overview ||
                  "No overview is available for this movie yet."}
              </p>
            </div>

            {/* Additional Information */}
            {(movie.director || movie.language || movie.status) && (
              <div className="mt-8 border-t border-[#e7e0cb]/10 pt-6">
                <h3 className="text-lg font-bold text-[#e7e0cb]">
                  Additional Information
                </h3>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {movie.director && (
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#e7e0cb]/30">
                        Director
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#e7e0cb]/75">
                        {movie.director}
                      </p>
                    </div>
                  )}

                  {movie.language && (
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#e7e0cb]/30">
                        Language
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#e7e0cb]/75">
                        {movie.language}
                      </p>
                    </div>
                  )}

                  {movie.status && (
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#e7e0cb]/30">
                        Status
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#e7e0cb]/75">
                        {movie.status}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="mt-8 w-full rounded-xl bg-[#facc3b] px-5 py-3 text-sm font-bold text-[#31010f] transition-all duration-300 hover:bg-[#e6481b] hover:text-[#e7e0cb]"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
