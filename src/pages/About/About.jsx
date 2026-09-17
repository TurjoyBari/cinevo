import {
  FiArrowRight,
  FiCompass,
  FiFilm,
  FiHeart,
  FiPlay,
  FiSearch,
  FiStar,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: FiSearch,
      title: "Easy Discovery",
      description:
        "Search and explore movies through a simple and intuitive experience.",
    },
    {
      icon: FiCompass,
      title: "Explore Stories",
      description:
        "Discover movies across different genres and find stories that match your mood.",
    },
    {
      icon: FiStar,
      title: "Movie Ratings",
      description:
        "Get useful movie information and ratings before deciding what to watch.",
    },
    {
      icon: FiHeart,
      title: "Made for Movie Lovers",
      description:
        "Cinevo is designed around one simple idea — making movie discovery enjoyable.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#31010f]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative border-b border-[#e7e0cb]/10 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#9a1840]/20 blur-[120px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#e6481b]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e7e0cb]/10 bg-[#e7e0cb]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#facc3b]">
                <FiFilm size={14} />
                About Cinevo
              </div>

              <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-[#e7e0cb] sm:text-5xl lg:text-6xl">
                More Than Just
                <br />
                <span className="text-[#facc3b]">Movies.</span>
                <br />
                It's About Stories.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#e7e0cb]/55">
                Cinevo is a movie discovery platform built to make finding your
                next movie simple, enjoyable and effortless.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
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
                  to="/contact"
                  className="flex items-center gap-2 rounded-xl border border-[#e7e0cb]/15 px-6 py-3.5 text-sm font-semibold text-[#e7e0cb] transition-all duration-300 hover:border-[#facc3b]/40 hover:bg-[#e7e0cb]/5"
                >
                  <FiPlay size={15} />
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#e7e0cb]/10 bg-[#1c0712] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=85"
                  alt="Cinema"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#31010f] via-[#31010f]/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#facc3b]">
                    The Cinevo Idea
                  </p>

                  <h2 className="mt-2 text-2xl font-black text-[#e7e0cb]">
                    Discover Your Next Story.
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[#e7e0cb]/55">
                    Because every great movie starts with a story worth
                    discovering.
                  </p>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-[#e7e0cb]/10 bg-[#31010f]/90 px-5 py-4 shadow-xl backdrop-blur-xl sm:-left-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#facc3b] text-[#31010f]">
                  <FiStar size={18} className="fill-[#31010f]" />
                </div>

                <div>
                  <p className="text-xs text-[#e7e0cb]/40">Built for</p>

                  <p className="text-sm font-bold text-[#e7e0cb]">
                    Movie Lovers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT CINEVO
      ===================================================== */}
      <section className="bg-[#1c0712] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Heading */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#facc3b]">
                What is Cinevo?
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#e7e0cb] sm:text-4xl">
                A Better Way to Discover Movies.
              </h2>
            </div>

            {/* Content */}
            <div className="space-y-5 text-sm leading-7 text-[#e7e0cb]/50 sm:text-base">
              <p>
                Finding a good movie should not feel complicated. Cinevo brings
                movie discovery into a clean and focused experience where you
                can search, explore and learn more about movies from one place.
              </p>

              <p>
                From popular titles to different genres, Cinevo is designed to
                help you quickly discover something interesting to watch.
              </p>

              <p>
                The goal is simple: make the journey from "What should I watch?"
                to "Let's watch this." much easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION
      ===================================================== */}
      <section className="bg-[#31010f] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#9a1840]/25 text-[#facc3b]">
            <FiFilm size={25} />
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#facc3b]">
            Our Mission
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black leading-tight text-[#e7e0cb] sm:text-4xl lg:text-5xl">
            Make Movie Discovery
            <span className="text-[#facc3b]"> Simple.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#e7e0cb]/50 sm:text-base">
            We want Cinevo to be a place where anyone can discover movies
            effortlessly, explore new stories and make confident choices about
            what to watch next.
          </p>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}
      <section className="border-y border-[#e7e0cb]/5 bg-[#1c0712] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#facc3b]">
              Why Cinevo
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#e7e0cb] sm:text-4xl">
              Everything You Need to Explore.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-[#e7e0cb]/10 bg-[#e7e0cb]/10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group bg-[#31010f] p-7 transition-colors duration-300 hover:bg-[#9a1840]/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#facc3b]/10 text-[#facc3b] transition-all duration-300 group-hover:bg-[#facc3b] group-hover:text-[#31010f]">
                      <Icon size={21} />
                    </div>

                    <span className="text-xs font-bold text-[#e7e0cb]/15">
                      0{index + 1}
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

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#e7e0cb]/10 bg-[#9a1840]/20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#e6481b]/20 blur-[100px]" />

          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#facc3b]/10 blur-[100px]" />

          <div className="relative px-6 py-16 text-center sm:px-12 lg:px-20 lg:py-20">
            <h2 className="mx-auto max-w-2xl text-3xl font-black leading-tight text-[#e7e0cb] sm:text-4xl">
              Ready to Find Your
              <span className="text-[#facc3b]"> Next Movie?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#e7e0cb]/50 sm:text-base">
              Explore Cinevo and discover a story that is worth your time.
            </p>

            <Link
              to="/explore"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#facc3b] px-7 py-3.5 text-sm font-bold text-[#31010f] transition-all duration-300 hover:bg-[#e6481b] hover:text-[#e7e0cb]"
            >
              Start Exploring
              <FiArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
