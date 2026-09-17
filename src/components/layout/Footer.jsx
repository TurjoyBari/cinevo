import {
  FiArrowUpRight,
  FiFilm,
  FiGithub,
  FiInstagram,
  FiMail,
  FiTwitter,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e7e0cb]/10 bg-[#1c0712]">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="group inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#facc3b] text-[#31010f] transition-transform duration-300 group-hover:rotate-3">
                <FiFilm size={22} />
              </div>

              <span className="text-2xl font-black tracking-tight text-[#e7e0cb]">
                Cine<span className="text-[#facc3b]">vo</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#e7e0cb]/45">
              Discover movies, explore new stories and find something worth
              watching — all in one place.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e7e0cb]/10 text-[#e7e0cb]/50 transition-all duration-300 hover:border-[#facc3b]/30 hover:bg-[#facc3b] hover:text-[#31010f]"
              >
                <FiGithub size={17} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e7e0cb]/10 text-[#e7e0cb]/50 transition-all duration-300 hover:border-[#facc3b]/30 hover:bg-[#facc3b] hover:text-[#31010f]"
              >
                <FiTwitter size={17} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e7e0cb]/10 text-[#e7e0cb]/50 transition-all duration-300 hover:border-[#facc3b]/30 hover:bg-[#facc3b] hover:text-[#31010f]"
              >
                <FiInstagram size={17} />
              </a>

              <a
                href="mailto:hello@cinevo.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e7e0cb]/10 text-[#e7e0cb]/50 transition-all duration-300 hover:border-[#facc3b]/30 hover:bg-[#facc3b] hover:text-[#31010f]"
              >
                <FiMail size={17} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-bold text-[#e7e0cb]">Explore</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-[#e7e0cb]/45 transition-colors hover:text-[#facc3b]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/explore"
                  className="text-sm text-[#e7e0cb]/45 transition-colors hover:text-[#facc3b]"
                >
                  Explore Movies
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm text-[#e7e0cb]/45 transition-colors hover:text-[#facc3b]"
                >
                  About Cinevo
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-[#e7e0cb]/45 transition-colors hover:text-[#facc3b]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-sm font-bold text-[#e7e0cb]">Discover</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/explore"
                  className="text-sm text-[#e7e0cb]/45 transition-colors hover:text-[#facc3b]"
                >
                  Popular Movies
                </Link>
              </li>

              <li>
                <Link
                  to="/explore"
                  className="text-sm text-[#e7e0cb]/45 transition-colors hover:text-[#facc3b]"
                >
                  Trending Now
                </Link>
              </li>

              <li>
                <Link
                  to="/explore"
                  className="text-sm text-[#e7e0cb]/45 transition-colors hover:text-[#facc3b]"
                >
                  Browse Genres
                </Link>
              </li>

              <li>
                <Link
                  to="/explore"
                  className="text-sm text-[#e7e0cb]/45 transition-colors hover:text-[#facc3b]"
                >
                  Top Rated
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <div className="rounded-2xl border border-[#e7e0cb]/10 bg-[#31010f] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#facc3b]/10 text-[#facc3b]">
                <FiFilm size={19} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#e7e0cb]">
                Find Something
                <span className="text-[#facc3b]"> Worth Watching.</span>
              </h3>

              <p className="mt-3 text-xs leading-6 text-[#e7e0cb]/40">
                Explore our movie collection and discover your next favorite
                story.
              </p>

              <Link
                to="/explore"
                className="group mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#facc3b] transition-colors hover:text-[#e6481b]"
              >
                Start Exploring
                <FiArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#e7e0cb]/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-xs text-[#e7e0cb]/35">
            © {currentYear} Cinevo. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              to="/about"
              className="text-xs text-[#e7e0cb]/35 transition-colors hover:text-[#facc3b]"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-xs text-[#e7e0cb]/35 transition-colors hover:text-[#facc3b]"
            >
              Contact
            </Link>

            <span className="h-3 w-px bg-[#e7e0cb]/10" />

            <p className="text-xs text-[#e7e0cb]/30">Made for Movie Lovers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
