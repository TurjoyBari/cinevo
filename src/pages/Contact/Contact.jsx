import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiFilm,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = [
    {
      icon: FiMail,
      title: "Email Us",
      value: "hello@cinevo.com",
      description: "Send us an email anytime.",
    },
    {
      icon: FiClock,
      title: "Response Time",
      value: "Within 24–48 hours",
      description: "We usually respond quickly.",
    },
    {
      icon: FiMapPin,
      title: "Our Location",
      value: "Dhaka, Bangladesh",
      description: "Cinevo is built remotely.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#31010f]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative border-b border-[#e7e0cb]/10 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#9a1840]/20 blur-[120px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#e6481b]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#e7e0cb]/10 bg-[#e7e0cb]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#facc3b]">
            <FiMessageCircle size={14} />
            Contact Cinevo
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-[#e7e0cb] sm:text-5xl lg:text-6xl">
            Let's Start a<span className="text-[#facc3b]"> Conversation.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#e7e0cb]/50 sm:text-lg">
            Have a question, suggestion or feedback about Cinevo? We'd love to
            hear from you.
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFO
      ===================================================== */}
      <section className="bg-[#1c0712] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-[#e7e0cb]/10 bg-[#31010f] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#facc3b]/25"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#facc3b]/10 text-[#facc3b] transition-all duration-300 group-hover:bg-[#facc3b] group-hover:text-[#31010f]">
                  <Icon size={21} />
                </div>

                <h3 className="mt-5 text-sm font-bold text-[#e7e0cb]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#facc3b]">
                  {item.value}
                </p>

                <p className="mt-1 text-xs leading-5 text-[#e7e0cb]/40">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM
      ===================================================== */}
      <section className="bg-[#31010f] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Left Content */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#facc3b]">
              Get in Touch
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#e7e0cb] sm:text-4xl">
              Tell Us What's
              <span className="text-[#facc3b]"> On Your Mind.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#e7e0cb]/50">
              Whether you've found a problem, have an idea for a new feature or
              simply want to say hello, send us a message.
            </p>

            {/* Small Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <FiCheckCircle
                  className="mt-0.5 shrink-0 text-[#facc3b]"
                  size={17}
                />

                <p className="text-sm text-[#e7e0cb]/55">
                  Questions and general inquiries
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FiCheckCircle
                  className="mt-0.5 shrink-0 text-[#facc3b]"
                  size={17}
                />

                <p className="text-sm text-[#e7e0cb]/55">
                  Suggestions and feature requests
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FiCheckCircle
                  className="mt-0.5 shrink-0 text-[#facc3b]"
                  size={17}
                />

                <p className="text-sm text-[#e7e0cb]/55">
                  Reporting issues or incorrect information
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-[#e7e0cb]/10 bg-[#1c0712] p-6 sm:p-8">
            <form className="space-y-5">
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold text-[#e7e0cb]/60"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="h-12 w-full rounded-xl border border-[#e7e0cb]/10 bg-[#31010f] px-4 text-sm text-[#e7e0cb] outline-none placeholder:text-[#e7e0cb]/25 transition-all duration-300 focus:border-[#facc3b]/40 focus:ring-2 focus:ring-[#facc3b]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold text-[#e7e0cb]/60"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-xl border border-[#e7e0cb]/10 bg-[#31010f] px-4 text-sm text-[#e7e0cb] outline-none placeholder:text-[#e7e0cb]/25 transition-all duration-300 focus:border-[#facc3b]/40 focus:ring-2 focus:ring-[#facc3b]/10"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-semibold text-[#e7e0cb]/60"
                >
                  Subject
                </label>

                <select
                  id="subject"
                  defaultValue=""
                  className="h-12 w-full rounded-xl border border-[#e7e0cb]/10 bg-[#31010f] px-4 text-sm text-[#e7e0cb] outline-none transition-all duration-300 focus:border-[#facc3b]/40"
                >
                  <option value="" disabled className="bg-[#31010f]">
                    Select a subject
                  </option>

                  <option value="general" className="bg-[#31010f]">
                    General Inquiry
                  </option>

                  <option value="feedback" className="bg-[#31010f]">
                    Feedback
                  </option>

                  <option value="suggestion" className="bg-[#31010f]">
                    Feature Suggestion
                  </option>

                  <option value="bug" className="bg-[#31010f]">
                    Report an Issue
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold text-[#e7e0cb]/60"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-[#e7e0cb]/10 bg-[#31010f] px-4 py-3 text-sm leading-6 text-[#e7e0cb] outline-none placeholder:text-[#e7e0cb]/25 transition-all duration-300 focus:border-[#facc3b]/40 focus:ring-2 focus:ring-[#facc3b]/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#facc3b] px-5 py-3.5 text-sm font-bold text-[#31010f] transition-all duration-300 hover:bg-[#e6481b] hover:text-[#e7e0cb]"
              >
                Send Message
                <FiSend
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ / HELP
      ===================================================== */}
      <section className="border-y border-[#e7e0cb]/5 bg-[#1c0712] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#facc3b]">
              Need Help?
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#e7e0cb] sm:text-4xl">
              Before You Send a Message
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#e7e0cb]/10 bg-[#31010f] p-6">
              <h3 className="text-base font-bold text-[#e7e0cb]">
                Looking for a movie?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#e7e0cb]/45">
                Head over to Explore Movies and use the search and filtering
                options to find what you're looking for.
              </p>

              <Link
                to="/explore"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#facc3b] hover:text-[#e6481b]"
              >
                Explore Movies
                <FiArrowRight size={14} />
              </Link>
            </div>

            <div className="rounded-2xl border border-[#e7e0cb]/10 bg-[#31010f] p-6">
              <h3 className="text-base font-bold text-[#e7e0cb]">
                Want to suggest something?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#e7e0cb]/45">
                We appreciate ideas that can make the Cinevo experience better
                for everyone.
              </p>

              <a
                href="mailto:hello@cinevo.com"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#facc3b] hover:text-[#e6481b]"
              >
                <FiMail size={14} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#e7e0cb]/10 bg-[#9a1840]/20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#e6481b]/20 blur-[100px]" />

          <div className="relative px-6 py-16 text-center sm:px-12 lg:px-20">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#facc3b] text-[#31010f]">
              <FiFilm size={24} />
            </div>

            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-black text-[#e7e0cb] sm:text-4xl">
              Still Looking for Something
              <span className="text-[#facc3b]"> to Watch?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#e7e0cb]/50">
              Explore Cinevo and discover your next favorite story.
            </p>

            <Link
              to="/explore"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#facc3b] px-7 py-3.5 text-sm font-bold text-[#31010f] transition-all duration-300 hover:bg-[#e6481b] hover:text-[#e7e0cb]"
            >
              Explore Movies
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

export default Contact;
