import { useMemo, useState } from "react";
import { FiFilter, FiSearch, FiX } from "react-icons/fi";

import MovieCard from "../../components/movie/MovieCard";
import MovieDetailsModal from "../../components/movie/MovieDetailsModal";
// import { featuredMovies } from "../../data/homeMovies";
import { useLoaderData } from "react-router-dom";

const ExploreMovies = () => {
  const allMovies = useLoaderData();
  console.log(allMovies);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Get unique genres
  const genres = [
    "All",
    ...new Set(allMovies.map((movie) => movie.genres?.join(", "))),
  ];

  // Search + Filter + Sort
  const filteredMovies = useMemo(() => {
    let movies = [...allMovies];

    // console.log(movies.length);
    // Search by movie title
    if (searchTerm.trim()) {
      movies = movies.filter((movie) =>
        movie.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Filter by genre
    if (selectedGenre !== "All") {
      movies = movies.filter(
        (movie) => movie.genres?.join(", ") === selectedGenre,
      );
    }

    // Sorting
    if (sortBy === "rating-high") {
      movies.sort((a, b) => b.rating.average - a.rating.average);
    }

    if (sortBy === "rating-low") {
      movies.sort((a, b) => a.rating.average - b.rating.average);
    }

    if (sortBy === "year-new") {
      movies.sort((a, b) => b.premiered - a.premiered);
    }

    if (sortBy === "year-old") {
      movies.sort((a, b) => a.premiered - b.premiered);
    }

    if (sortBy === "title-az") {
      movies.sort((a, b) => a.name.localeCompare(b.title));
    }

    if (sortBy === "title-za") {
      movies.sort((a, b) => b.name.localeCompare(a.title));
    }

    // Maximum 20 movies
    return movies.slice(0, 20);
  }, [searchTerm, selectedGenre, sortBy]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedGenre("All");
    setSortBy("default");
  };

  const handleDetailsClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <main className="min-h-screen bg-[#31010f]">
        {/* ================= PAGE HEADER ================= */}
        <section className="border-b border-[#e7e0cb]/10 bg-[#31010f] px-4 pb-12 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#facc3b]">
              Explore Cinevo
            </p>

            <h1 className="mt-3 text-4xl font-black text-[#e7e0cb] sm:text-5xl">
              Explore Movies
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#e7e0cb]/50 sm:text-base">
              Search, filter and discover movies that match your mood. Find
              something worth watching from our collection.
            </p>
          </div>
        </section>

        {/* ================= FILTER SECTION ================= */}
        <section className="sticky top-20 z-30 border-b border-[#e7e0cb]/10 bg-[#31010f]/95 px-4 py-5 backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              {/* Search */}
              <div className="relative flex-1">
                <FiSearch
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#e7e0cb]/35"
                />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search movie by title..."
                  className="h-12 w-full rounded-xl border border-[#e7e0cb]/10 bg-[#1c0712] pl-11 pr-11 text-sm text-[#e7e0cb] outline-none placeholder:text-[#e7e0cb]/30 transition-all duration-300 focus:border-[#facc3b]/40 focus:ring-2 focus:ring-[#facc3b]/10"
                />

                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#e7e0cb]/40 transition-colors hover:text-[#facc3b]"
                  >
                    <FiX size={17} />
                  </button>
                )}
              </div>

              {/* Genre */}
              <div className="relative">
                <FiFilter
                  size={16}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#e7e0cb]/40"
                />

                <select
                  value={selectedGenre}
                  onChange={(event) => setSelectedGenre(event.target.value)}
                  className="h-12 w-full min-w-[180px] appearance-none rounded-xl border border-[#e7e0cb]/10 bg-[#1c0712] px-10 text-sm text-[#e7e0cb] outline-none transition-all duration-300 focus:border-[#facc3b]/40 sm:w-auto"
                >
                  {genres.map((genre) => (
                    <option key={genre} value={genre} className="bg-[#1c0712]">
                      {genre === "All" ? "All Genres" : genre}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="h-12 min-w-[180px] rounded-xl border border-[#e7e0cb]/10 bg-[#1c0712] px-4 text-sm text-[#e7e0cb] outline-none transition-all duration-300 focus:border-[#facc3b]/40"
              >
                <option value="default">Sort By</option>

                <option value="rating-high">Rating: High to Low</option>

                <option value="rating-low">Rating: Low to High</option>

                <option value="year-new">Newest First</option>

                <option value="year-old">Oldest First</option>

                <option value="title-az">Title: A-Z</option>

                <option value="title-za">Title: Z-A</option>
              </select>

              {/* Clear */}
              {(searchTerm ||
                selectedGenre !== "All" ||
                sortBy !== "default") && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="h-12 rounded-xl border border-[#e7e0cb]/10 px-5 text-sm font-semibold text-[#e7e0cb]/65 transition-all duration-300 hover:border-[#e6481b]/40 hover:bg-[#e6481b]/10 hover:text-[#e7e0cb]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ================= MOVIES ================= */}
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Result Header */}
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#e7e0cb]">
                  Movie Collection
                </h2>

                <p className="mt-1 text-xs text-[#e7e0cb]/40">
                  Showing {filteredMovies.length} movies
                </p>
              </div>

              <span className="rounded-full border border-[#e7e0cb]/10 bg-[#e7e0cb]/5 px-3 py-1.5 text-xs text-[#e7e0cb]/50">
                Max 20
              </span>
            </div>

            {/* Movie Grid */}
            {filteredMovies.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredMovies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onDetailsClick={handleDetailsClick}
                  />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="flex min-h-[350px] flex-col items-center justify-center rounded-3xl border border-dashed border-[#e7e0cb]/10 bg-[#1c0712] px-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#9a1840]/20 text-[#facc3b]">
                  <FiSearch size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#e7e0cb]">
                  No movies found
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-[#e7e0cb]/40">
                  We couldn't find any movies matching your search or selected
                  filter.
                </p>

                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="mt-6 rounded-xl bg-[#facc3b] px-5 py-3 text-sm font-bold text-[#31010f] transition-colors hover:bg-[#e6481b] hover:text-[#e7e0cb]"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Movie Details Modal */}
      <MovieDetailsModal movie={selectedMovie} onClose={handleCloseModal} />
    </>
  );
};

export default ExploreMovies;
