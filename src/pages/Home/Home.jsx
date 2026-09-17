import Hero from "./components/Hero";
import FeaturedMovies from "./components/FeaturedMovies";
import BrowseGenres from "./components/BrowseGenres";
import TrendingMovies from "./components/TrendingMovies";
import WhyCinevo from "./components/WhyCinevo";
import MovieCTA from "./components/MovieCTA";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const movies = useLoaderData();

  // console.log(movies);

  return (
    <div className="overflow-hidden bg-[#31010f]">
      <Hero />

      <FeaturedMovies movies={movies} />

      <BrowseGenres />

      <TrendingMovies movies={movies} />

      <WhyCinevo />

      <MovieCTA />
    </div>
  );
};

export default Home;
