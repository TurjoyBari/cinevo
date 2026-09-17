import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import MovieCard from "../../../components/movie/MovieCard";
import MovieDetailsModal from "../../../components/movie/MovieDetailsModal";

// import { featuredMovies } from "../../../data/homeMovies";

const FeaturedMovies = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleDetailsClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <section className="bg-[#31010f] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#facc3b]">
                Handpicked For You
              </p>

              <h2 className="mt-2 text-3xl font-black text-[#e7e0cb] sm:text-4xl">
                Featured Movies
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#e7e0cb]/50">
                Discover stories worth watching, carefully selected for your
                next movie night.
              </p>
            </div>

            <Link
              to="/explore"
              className="group flex w-fit items-center gap-2 text-sm font-semibold text-[#e7e0cb]/70 transition-colors hover:text-[#facc3b]"
            >
              View All Movies
              <FiArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Movies */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {movies.slice(0, 8).map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onDetailsClick={handleDetailsClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Movie Details Modal */}
      <MovieDetailsModal movie={selectedMovie} onClose={handleCloseModal} />
    </>
  );
};

export default FeaturedMovies;
