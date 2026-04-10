import { NavLink } from "react-router";
import HeroImage from "@/assets/images/CLIHeader.webp";
import AboutPreviewImage from "@/assets/images/CassieHeadShot.webp";

import { residentialProjects } from "@/data/residentialprojects";
import { commercialProjects } from "@/data/commercialprojects";
import { services } from "@/data/services";

export default function Home() {
  const featuredResidential = residentialProjects?.[0];
  const featuredCommercial = commercialProjects?.[0];

  const residentialPrimaryImage =
    featuredResidential?.bottomImage ||
    featuredResidential?.topLeftImage ||
    HeroImage;

  const residentialSecondaryImage =
    featuredResidential?.topLeftImage ||
    featuredResidential?.topRightImage ||
    residentialPrimaryImage;

  const commercialPrimaryImage =
    featuredCommercial?.images?.[0]?.src || HeroImage;

  const commercialSecondaryImage =
    featuredCommercial?.images?.[1]?.src ||
    featuredCommercial?.images?.[0]?.src ||
    HeroImage;

  return (
    <main className="bg-parchment text-dusty-taupe">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HeroImage}
            alt="Refined interior design space"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-deep-charcoal/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-dusty-taupe/10 via-dusty-taupe/30 to-dusty-taupe/95" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 md:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-4xl">
            <p className="font-brand text-xs font-semibold uppercase tracking-[0.28em] text-almond-cream/80 sm:text-sm">
              CLI Designs
            </p>

            <h1 className="mt-5 max-w-5xl font-brand text-4xl font-semibold leading-[0.98] text-parchment sm:text-5xl lg:text-7xl">
              Designing experiences that live beyond the moment.
            </h1>

            <div className="mt-8">
              <NavLink
                to="/projects"
                className="inline-flex items-center rounded-full border border-tan/35 bg-parchment/10 px-6 py-3 font-brand text-sm font-semibold text-parchment backdrop-blur-sm transition duration-300 hover:bg-parchment hover:text-dusty-taupe"
              >
                View Projects
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="border-t border-tan/20 bg-almond-cream py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16 lg:px-12">
          <div>
            <p className="font-brand text-xs font-semibold uppercase tracking-[0.28em] text-dusty-taupe sm:text-sm">
              Our Perspective
            </p>
          </div>

          <div className="max-w-4xl">
            <p className="font-brand text-2xl leading-[1.35] text-dusty-taupe sm:text-3xl lg:text-4xl">
              We create interiors with presence — spaces shaped by warmth,
              restraint, and a lasting sense of atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="bg-parchment py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-14">
            <div className="overflow-hidden rounded-[2rem] border border-tan/20 bg-almond-cream/40">
              <img
                src={residentialPrimaryImage}
                alt={
                  featuredResidential?.bottomAlt ||
                  featuredResidential?.title ||
                  "Featured residential project"
                }
                className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[680px]"
              />
            </div>

            <div className="lg:pb-8">
              <p className="font-brand text-xs font-semibold uppercase tracking-[0.28em] text-dusty-taupe sm:text-sm">
                Featured Project
              </p>

              <h2 className="mt-4 font-brand text-3xl font-semibold leading-[1.05] text-dusty-taupe sm:text-4xl lg:text-5xl">
                {featuredResidential?.title || "Selected Residential Work"}
              </h2>

              <p className="mt-6 max-w-xl font-brand text-base leading-7 text-dusty-taupe sm:text-lg">
                {featuredResidential?.description ||
                  "A curated residential project defined by atmosphere, warmth, and intentional detail."}
              </p>

              <div className="mt-8">
                <NavLink
                  to="/projects"
                  className="inline-flex items-center rounded-full border border-tan/30 px-6 py-3 font-brand text-sm font-semibold text-dusty-taupe transition duration-300 hover:bg-dusty-taupe hover:text-parchment"
                >
                  Explore the Portfolio
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Split Section */}
      <section className="bg-almond-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            <div className="self-start overflow-hidden rounded-[2rem] border border-tan/20 bg-parchment/60">
              <img
                src={AboutPreviewImage}
                alt="Portrait of Cassiana"
                className="h-[520px] w-full object-cover object-[center_8%] sm:h-[620px] sm:object-[center_12%] lg:h-[760px] lg:object-[center_18%]"
              />
            </div>

            <div className="flex flex-col justify-between gap-6">
              <div className="rounded-[2rem] border border-tan/20 bg-parchment/55 p-8 sm:p-10 lg:p-12">
                <p className="font-brand text-xs font-semibold uppercase tracking-[0.28em] text-dusty-taupe sm:text-sm">
                  The Designer
                </p>

                <h2 className="mt-4 max-w-2xl font-brand text-3xl font-semibold leading-[1.08] text-dusty-taupe sm:text-4xl lg:text-5xl">
                  Cassiana brings a deeply thoughtful approach to interiors,
                  creating spaces that feel elevated, intentional, and personal
                  in the way they are lived in every day.
                </h2>

                <NavLink
                  to="/about"
                  className="mt-8 inline-flex items-center rounded-full border border-tan/30 px-6 py-3 font-brand text-sm font-semibold text-dusty-taupe transition duration-300 hover:bg-dusty-taupe hover:text-parchment"
                >
                  Learn More
                </NavLink>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-tan/20 bg-parchment/55">
                <img
                  src={commercialPrimaryImage}
                  alt={
                    featuredCommercial?.images?.[0]?.alt ||
                    featuredCommercial?.title ||
                    "Featured commercial project"
                  }
                  className="h-[240px] w-full object-cover sm:h-[300px] lg:h-[280px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Work */}
      <section className="bg-parchment py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col gap-10 lg:gap-14">
            <div className="max-w-3xl">
              <p className="font-brand text-xs font-semibold uppercase tracking-[0.28em] text-dusty-taupe sm:text-sm">
                Selected Work
              </p>

              <h2 className="mt-4 font-brand text-3xl font-semibold leading-[1.08] text-dusty-taupe sm:text-4xl lg:text-5xl">
                A curated view of spaces with depth, warmth, and intention.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="overflow-hidden rounded-[2rem] border border-tan/20 bg-almond-cream/40">
                <img
                  src={residentialSecondaryImage}
                  alt={
                    featuredResidential?.topLeftAlt ||
                    featuredResidential?.title ||
                    "Residential interior project"
                  }
                  className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                />

                <div className="p-6 sm:p-8">
                  <h3 className="font-brand text-2xl font-semibold text-dusty-taupe sm:text-3xl">
                    {featuredResidential?.title || "Residential Design"}
                  </h3>

                  <p className="mt-4 max-w-xl font-brand text-base leading-7 text-dusty-taupe">
                    {featuredResidential?.description ||
                      "Thoughtful residential spaces designed to feel layered, livable, and refined."}
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-[2rem] border border-tan/20 bg-almond-cream/40 lg:translate-y-12">
                <img
                  src={commercialSecondaryImage}
                  alt={
                    featuredCommercial?.images?.[1]?.alt ||
                    featuredCommercial?.title ||
                    "Commercial interior project"
                  }
                  className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[460px]"
                />

                <div className="p-6 sm:p-8">
                  <p className="font-brand text-xs font-semibold uppercase tracking-[0.24em] text-dusty-taupe">
                    Commercial
                  </p>

                  <h3 className="mt-3 font-brand text-2xl font-semibold text-dusty-taupe sm:text-3xl">
                    {featuredCommercial?.title || "Commercial Design"}
                  </h3>

                  <p className="mt-4 font-brand text-base leading-7 text-dusty-taupe">
                    {featuredCommercial?.description ||
                      "Commercial interiors shaped with clarity, atmosphere, and a strong visual point of view."}
                  </p>
                </div>
              </article>
            </div>

            <div>
              <NavLink
                to="/projects"
                className="inline-flex items-center rounded-full border border-tan/30 px-6 py-3 font-brand text-sm font-semibold text-dusty-taupe transition duration-300 hover:bg-dusty-taupe hover:text-parchment"
              >
                View All Projects
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-tan/20 bg-almond-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="font-brand text-xs font-semibold uppercase tracking-[0.28em] text-dusty-taupe sm:text-sm">
                Capabilities
              </p>

              <h2 className="mt-4 font-brand text-3xl font-semibold leading-[1.08] text-dusty-taupe sm:text-4xl lg:text-5xl">
                Tailored services for spaces that deserve a stronger point of
                view.
              </h2>
            </div>

            <div className="divide-y divide-tan/20 border-y border-tan/20">
              {services.slice(0, 4).map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                >
                  <h3 className="font-brand text-2xl font-semibold text-dusty-taupe sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="max-w-md font-brand text-sm leading-7 text-dusty-taupe sm:text-base">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <NavLink
              to="/services"
              className="inline-flex items-center rounded-full border border-tan/30 px-6 py-3 font-brand text-sm font-semibold text-dusty-taupe transition duration-300 hover:bg-dusty-taupe hover:text-parchment"
            >
              View Services
            </NavLink>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-parchment py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="rounded-[2rem] border border-tan/20 bg-almond-cream/55 p-8 sm:p-10 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="font-brand text-xs font-semibold uppercase tracking-[0.28em] text-dusty-taupe sm:text-sm">
                  Start a Project
                </p>

                <h2 className="mt-4 font-brand text-3xl font-semibold leading-[1.08] text-dusty-taupe sm:text-4xl lg:text-5xl">
                  Let’s create a space with presence, warmth, and permanence.
                </h2>
              </div>

              <div>
                <NavLink
                  to="/contact"
                  className="inline-flex items-center rounded-full bg-dusty-taupe px-6 py-3 font-brand text-sm font-semibold text-parchment transition duration-300 hover:bg-deep-charcoal"
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
