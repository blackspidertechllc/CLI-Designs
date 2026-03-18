import CassieHeadshot from "@/assets/images/CassieHeadShot.webp";

export default function About() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-12 lg:gap-16">
          <div>
            <p className="font-brand text-sm font-semibold uppercase tracking-[0.2em] text-text-black/55">
              About Us
            </p>

            <h1 className="mt-4 font-brand text-4xl font-bold leading-[1.15] text-text-black sm:text-5xl lg:text-6xl">
              Our Team
            </h1>

            <p className="mt-6 max-w-sm font-brand text-base leading-7 text-text-black/65 sm:text-lg">
              Design with purpose, personality, and a deep appreciation for how
              spaces shape everyday life.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-black/10 bg-brand-white shadow-md transition-shadow hover:shadow-lg">
              <img
                src={CassieHeadshot}
                alt="Cassie's Headshot"
                className="h-full w-full object-cover object-[center_15%]"
              />
            </div>

            <div className="rounded-3xl border border-black/10 bg-brand-white/95 p-8 shadow-md transition-shadow hover:shadow-lg sm:p-10">
              <p className="font-brand text-base leading-7 text-text-black/75 sm:text-lg">
                Cassiana is a Trinbagonian-based Interior Designer with over 10
                years of experience in the field, both locally and
                internationally. She passionately believes that our surroundings
                have a deep impact on the soul, and she has made it her life’s
                work to create beautiful places for people to live in.
              </p>

              <p className="mt-6 font-brand text-base leading-7 text-text-black/75 sm:text-lg">
                She is a lover of change, and what drives her to design is her
                constant desire to explore new trends and reinterpret timeless
                ones in fresh, meaningful ways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
