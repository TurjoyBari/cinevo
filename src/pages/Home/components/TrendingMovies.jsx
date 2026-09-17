import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import MovieCard from "../../../components/movie/MovieCard";
// import { featuredMovies } from "../../../data/homeMovies";

const TrendingMovies = ({ movies }) => {
  const trendingMovies = [...movies].reverse();
  console.log(trendingMovies);
  return (
    <section className="bg-[#31010f] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#e6481b] shadow-lg shadow-[#e6481b]/40" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e6481b]">
                What's Hot
              </p>
            </div>

            <h2 className="mt-2 text-3xl font-black text-[#e7e0cb] sm:text-4xl">
              Trending Now
            </h2>
          </div>

          <Link
            to="/explore"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-[#e7e0cb]/70 hover:text-[#facc3b]"
          >
            Explore More
            <FiArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trendingMovies.slice(0, 4).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingMovies;
