import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlay, FiStar, FiFilm } from "react-icons/fi";

import { featuredMovies } from "../../../data/homeMovies";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const activeMovie = featuredMovies[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#31010f]">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#9a1840]/20 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#e6481b]/10 blur-[140px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        {/* ================= LEFT CONTENT ================= */}
        <div className="max-w-2xl">
          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e7e0cb]/10 bg-[#e7e0cb]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#facc3b]"
          >
            <FiFilm size={14} />
            Your Movie Universe
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-black leading-[1.05] tracking-tight text-[#e7e0cb] sm:text-6xl lg:text-7xl"
          >
            Discover.
            <br />
            <span className="text-[#facc3b]">Watch.</span>
            <br />
            <span className="text-[#e7e0cb]">Enjoy.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-7 text-[#e7e0cb]/60 sm:text-lg"
          >
            Explore movies, discover new stories, and find something worth
            watching. Cinevo brings your next movie experience into one
            beautiful place.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/explore"
              className="group flex items-center gap-2 rounded-xl bg-[#facc3b] px-6 py-3.5 text-sm font-bold text-[#31010f] transition-all duration-300 hover:bg-[#e6481b] hover:text-[#e7e0cb] hover:shadow-lg hover:shadow-[#e6481b]/20"
            >
              Explore Movies
              <FiArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/explore"
              className="flex items-center gap-2 rounded-xl border border-[#e7e0cb]/15 bg-[#e7e0cb]/5 px-6 py-3.5 text-sm font-semibold text-[#e7e0cb] backdrop-blur-sm transition-all duration-300 hover:border-[#facc3b]/40 hover:bg-[#facc3b]/10"
            >
              <FiPlay size={16} className="fill-[#facc3b] text-[#facc3b]" />
              Start Exploring
            </Link>
          </motion.div>

          {/* Current movie info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMovie.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="h-12 w-1 rounded-full bg-[#facc3b]" />

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#e7e0cb]/35">
                  Now Featuring
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <h3 className="text-sm font-bold text-[#e7e0cb]">
                    {activeMovie.title}
                  </h3>

                  <span className="text-[#e7e0cb]/25">•</span>

                  <span className="flex items-center gap-1 text-xs text-[#facc3b]">
                    <FiStar className="fill-[#facc3b]" />
                    {activeMovie.rating}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div className="relative mx-auto flex w-full max-w-[430px] items-center justify-center">
          {/* Glow behind poster */}
          <div className="absolute h-[75%] w-[65%] rounded-full bg-[#c71d1c]/20 blur-[100px]" />

          {/* Poster container */}
          <div className="relative h-[560px] w-[350px] sm:h-[600px] sm:w-[380px]">
            {/* Back poster - decorative */}
            <motion.div
              animate={{
                rotate: 7,
                x: 25,
                y: 10,
              }}
              transition={{
                duration: 0.8,
              }}
              className="absolute inset-0 overflow-hidden rounded-[2rem] border border-[#e7e0cb]/10 bg-[#1c0712] shadow-2xl"
            >
              <img
                src={
                  featuredMovies[(activeIndex + 1) % featuredMovies.length]
                    .image
                }
                alt=""
                className="h-full w-full object-cover opacity-50"
              />

              <div className="absolute inset-0 bg-[#31010f]/50" />
            </motion.div>

            {/* Main poster */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMovie.id}
                initial={{
                  x: 100,
                  opacity: 0,
                  rotate: 5,
                  scale: 0.94,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  x: -100,
                  opacity: 0,
                  rotate: -5,
                  scale: 0.94,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 z-10 overflow-hidden rounded-[2rem] border border-[#e7e0cb]/15 bg-[#1c0712] shadow-2xl shadow-black/50"
              >
                {/* Poster */}
                <img
                  src={activeMovie.image}
                  alt={activeMovie.title}
                  className="h-full w-full object-cover"
                />

                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#31010f] via-[#31010f]/10 to-transparent" />

                {/* Top badge */}
                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-[#e7e0cb]/20 bg-[#31010f]/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#e7e0cb] backdrop-blur-md">
                    Featured
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full bg-[#31010f]/80 px-3 py-2 text-xs font-bold text-[#facc3b] backdrop-blur-md">
                  <FiStar className="fill-[#facc3b]" size={13} />
                  {activeMovie.rating}
                </div>

                {/* Movie information */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#facc3b]">
                    {activeMovie.genre}
                  </p>

                  <h2 className="text-3xl font-black leading-tight text-[#e7e0cb] sm:text-4xl">
                    {activeMovie.title}
                  </h2>

                  <div className="mt-3 flex items-center gap-3 text-xs text-[#e7e0cb]/55">
                    <span>{activeMovie.year}</span>

                    <span className="h-1 w-1 rounded-full bg-[#e7e0cb]/30" />

                    <span>{activeMovie.duration}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Floating index indicator */}
            <div className="absolute -bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#e7e0cb]/10 bg-[#31010f]/90 px-4 py-2.5 backdrop-blur-xl">
              {featuredMovies.map((movie, index) => (
                <button
                  key={movie.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${movie.title}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-7 bg-[#facc3b]"
                      : "w-1.5 bg-[#e7e0cb]/30 hover:bg-[#e7e0cb]/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
