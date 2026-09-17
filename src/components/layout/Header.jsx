import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FiFilm, FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Explore Movies",
      path: "/explore",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  const navLinkStyle = ({ isActive }) =>
    `relative py-2 text-sm font-medium transition-colors duration-300 ${
      isActive ? "text-[#facc3b]" : "text-[#e7e0cb]/75 hover:text-[#e7e0cb]"
    }`;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e0cb]/10 bg-[#31010f]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={handleLinkClick}
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#facc3b] text-[#31010f] transition-transform duration-300 group-hover:scale-105">
            <FiFilm size={22} strokeWidth={2.5} />
          </div>

          <div className="leading-none">
            <h1 className="text-xl font-extrabold tracking-[0.18em] text-[#e7e0cb]">
              CINEVO
            </h1>

            <p className="mt-1 hidden text-[9px] font-medium uppercase tracking-[0.25em] text-[#e7e0cb]/45 sm:block">
              Explore the Story
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkStyle}>
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-[#facc3b] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            to="/explore"
            className="group flex items-center gap-2 rounded-full bg-[#facc3b] px-5 py-2.5 text-sm font-bold text-[#31010f] transition-all duration-300 hover:bg-[#e6481b] hover:text-[#e7e0cb] hover:shadow-lg hover:shadow-[#e6481b]/20"
          >
            Explore Movies
            <FiArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e7e0cb]/15 text-[#e7e0cb] transition-colors duration-300 hover:border-[#facc3b]/50 hover:text-[#facc3b] lg:hidden"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-[#e7e0cb]/10 bg-[#31010f] transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-7xl flex-col px-4 py-5 sm:px-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "bg-[#9a1840]/25 text-[#facc3b]"
                    : "text-[#e7e0cb]/75 hover:bg-[#9a1840]/15 hover:text-[#e7e0cb]"
                }`
              }
            >
              {link.name}

              <FiArrowUpRight size={16} />
            </NavLink>
          ))}

          {/* Mobile CTA */}
          <Link
            to="/explore"
            onClick={handleLinkClick}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#facc3b] px-5 py-3 text-sm font-bold text-[#31010f] transition-colors duration-300 hover:bg-[#e6481b] hover:text-[#e7e0cb]"
          >
            Explore Movies
            <FiArrowUpRight size={17} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
