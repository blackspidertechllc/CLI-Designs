import CassieHeadshot from "@/assets/images/CassieHeadShot.webp";

export default function About() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-12 lg:gap-16">
          <div>
            {/* <p className="font-brand text-sm font-semibold uppercase tracking-[0.2em] text-text-black/55">
              About Us
            </p> */}

            <h1 className="mt-4 font-brand text-4xl font-bold leading-[1.15] text-text-black sm:text-5xl lg:text-6xl">
              The Designer
            </h1>

            {/* <p className="mt-6 max-w-sm font-brand text-base leading-7 text-text-black/65 sm:text-lg">
              Design with purpose, personality, and a deep appreciation for how
              spaces shape everyday life.
            </p> */}
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
                Cassiana is a Trinidad-based interior designer with over a
                decade of experience shaping residential and commercial spaces,
                both locally and internationally. Her work is grounded in a deep
                understanding of how interiors influence the way people live,
                work, and experience their environments — guiding her to create
                spaces that feel intentional, refined, and deeply personal. Her
                design perspective has been shaped through years of working
                alongside established studios and brands including Indesign
                Limited, The Well Dressed Home and Window, and Standard
                Distributors Ltd — where she refined her approach across both
                residential and commercial environments. This foundation,
                combined with experience managing her own client projects,
                allows her to approach each space with clarity, confidence, and
                a strong design point of view. With a solid technical
                background, Cassiana is proficient in tools such as AutoCAD and
                SketchUp for detailed architectural drawings and spatial
                planning, alongside digital presentation and documentation tools
                that support clear, cohesive design development from concept
                through execution. Her ability to translate ideas into precise
                plans ensures that each design is not only visually compelling,
                but thoughtfully resolved. With a natural instinct for elevating
                spaces and a trained eye for detail, she has built a reputation
                for delivering considered, well-executed interiors that balance
                beauty and function. Her background in retail design and
                merchandising further informs her ability to curate environments
                that are both visually striking and intuitive in how they flow
                and are experienced. Constantly evolving, she draws inspiration
                from both emerging trends and timeless design principles —
                reinterpreting them in ways that feel fresh, relevant, and
                enduring. Her process is collaborative and considered, rooted in
                clear communication and a genuine understanding of each client’s
                lifestyle. Each project is approached with intention and care —
                resulting in spaces that not only look exceptional, but feel
                effortless to live in.
              </p>

              {/* <p className="mt-6 font-brand text-base leading-7 text-text-black/75 sm:text-lg">
                She is a lover of change, and what drives her to design is her
                constant desire to explore new trends and reinterpret timeless
                ones in fresh, meaningful ways.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
