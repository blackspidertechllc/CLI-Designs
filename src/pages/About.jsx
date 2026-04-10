import CassieHeadshot from "@/assets/images/CassieHeadShot.webp";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-parchment py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(138,121,105,0.08),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start md:gap-12 lg:gap-16">
          {/* Title */}
          <div className="order-1 md:row-start-1">
            <h1 className="mt-4 font-brand text-4xl font-bold leading-[1.15] text-dusty-taupe sm:text-5xl lg:text-6xl">
              The Designer
            </h1>
          </div>

          {/* Image */}
          <div className="order-2 aspect-[4/5] overflow-hidden rounded-3xl border border-tan/20 bg-almond-cream shadow-md transition-shadow hover:shadow-lg md:aspect-auto md:col-start-2 md:row-span-2 md:row-start-1 md:self-stretch">
            <img
              src={CassieHeadshot}
              alt="Cassie's Headshot"
              className="h-full w-full object-cover object-[center_15%]"
            />
          </div>

          {/* Bio */}
          <div className="order-3 rounded-3xl border border-tan/20 bg-almond-cream p-8 shadow-md transition-shadow hover:shadow-lg sm:p-10 md:col-start-1 md:row-start-2">
            <p className="font-brand text-base leading-7 sm:text-lg">
              Cassiana is a Trinidad-based interior designer with over a decade
              of experience shaping residential and commercial spaces, both
              locally and internationally. Her work is grounded in a deep
              understanding of how interiors influence the way people live,
              work, and experience their environments — guiding her to create
              spaces that feel intentional, refined, and deeply personal.
            </p>
            <p className="font-brand text-base leading-7 sm:text-lg">
              {" "}
              Her design perspective has been shaped through years of working
              alongside established studios and brands including Indesign
              Limited, The Well Dressed Home and Window, and Standard
              Distributors Ltd — where she refined her approach across both
              residential and commercial environments. This foundation, combined
              with experience managing her own client projects, allows her to
              approach each space with clarity, confidence, and a strong design
              point of view.
            </p>
            <p className="font-brand text-base leading-7 sm:text-lg">
              {" "}
              With a solid technical background, Cassiana is proficient in tools
              such as AutoCAD for detailed architectural drawings and spatial
              planning, alongside digital presentation and documentation tools
              that support clear, cohesive design development from concept
              through execution. Her ability to translate ideas into precise
              plans ensures that each design is not only visually compelling,
              but thoughtfully resolved.
            </p>
            <p className="font-brand text-base leading-7 sm:text-lg">
              With a natural instinct for elevating spaces and a trained eye for
              detail, she has built a reputation for delivering considered,
              well-executed interiors that balance beauty and function. Her
              background in retail design and merchandising further informs her
              ability to curate environments that are both visually striking and
              intuitive in how they flow and are experienced.
            </p>
            <p className="font-brand text-base leading-7 sm:text-lg">
              Constantly evolving, she draws inspiration from both emerging
              trends and timeless design principles — reinterpreting them in
              ways that feel fresh, relevant, and enduring. Her process is
              collaborative and considered, rooted in clear communication and a
              genuine understanding of each client's lifestyle.
            </p>
            <p className="font-brand text-base leading-7 sm:text-lg">
              Each project is approached with intention and care — resulting in
              spaces that not only look exceptional, but feel effortless to live
              in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
