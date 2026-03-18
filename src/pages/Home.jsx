import { NavLink } from "react-router";
import ResidentialProjectCard from "@/components/ResidentialProjectCard";
import CommercialProjectCard from "@/components/CommercialProjectCard";
import ServiceCard from "@/components/ServiceCard";
import HeroImage from "@/assets/images/CLIHeader.webp";
import AboutPreviewImage from "@/assets/images/CassieHeadShot.webp";

import { residentialProjects } from "@/data/residentialprojects";
import { commercialProjects } from "@/data/commercialprojects";
import { services } from "@/data/services";

export default function Home() {
  const featuredProjects = [
    ...residentialProjects.slice(0, 1),
    ...commercialProjects.slice(0, 1),
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="max-w-2xl">
              <p className="font-brand text-sm font-semibold uppercase tracking-[0.2em] text-text-black/55">
                CLI Designs
              </p>

              <h1 className="mt-4 font-brand text-4xl font-bold leading-[1.05] text-text-black sm:text-5xl lg:text-7xl">
                Thoughtful interior design for modern living.
              </h1>

              <p className="mt-6 max-w-xl font-brand text-base leading-7 text-text-black/65 sm:text-lg">
                Residential and commercial spaces designed with purpose,
                personality, and a timeless sense of style.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <NavLink
                  to="/projects"
                  className="inline-flex items-center rounded-2xl border border-black/10 px-6 py-3 font-brand font-semibold text-text-black transition-colors hover:bg-text-black hover:text-brand-white"
                >
                  View Projects
                </NavLink>

                <NavLink
                  to="/contact"
                  className="inline-flex items-center rounded-2xl border border-black/10 px-6 py-3 font-brand font-semibold text-text-black/80 transition-colors hover:bg-text-black hover:text-brand-white"
                >
                  Contact Us
                </NavLink>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-black/10 bg-brand-white/95 shadow-md">
              <img
                src={HeroImage}
                alt="Elegant interior design space"
                className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[620px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col gap-12 lg:gap-16">
            <div className="max-w-3xl">
              <p className="font-brand text-sm font-semibold uppercase tracking-[0.2em] text-text-black/55">
                Portfolio
              </p>

              <h2 className="mt-4 font-brand text-4xl font-bold leading-[1.15] text-text-black sm:text-5xl lg:text-6xl">
                Featured Projects
              </h2>

              <p className="mt-6 font-brand text-base leading-7 text-text-black/65 sm:text-lg">
                A selection of spaces designed to feel elevated, intentional,
                and deeply livable.
              </p>
            </div>

            <div className="flex flex-col gap-8 lg:gap-10">
              {featuredProjects.map((project, index) => {
                if (index === 0 && "topLeftImage" in project) {
                  return (
                    <ResidentialProjectCard
                      key={project.id}
                      {...project}
                      reverse={index % 2 !== 0}
                    />
                  );
                }

                return (
                  <CommercialProjectCard
                    key={project.id}
                    {...project}
                    reverse={index % 2 !== 0}
                  />
                );
              })}
            </div>

            <div>
              <NavLink
                to="/projects"
                className="inline-flex items-center rounded-2xl border border-black/10 px-6 py-3 font-brand font-semibold text-text-black transition-colors hover:bg-text-black hover:text-brand-white"
              >
                View All Projects
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-12 lg:gap-16">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-brand-white/95 shadow-md">
              <img
                src={AboutPreviewImage}
                alt="Portrait of Cassiana"
                className="h-[420px] w-full object-cover object-[center_15%] sm:h-[520px]"
              />
            </div>

            <div className="rounded-3xl border border-black/10 bg-brand-white/95 p-8 shadow-md lg:p-10">
              <p className="font-brand text-sm font-semibold uppercase tracking-[0.2em] text-text-black/55">
                About
              </p>

              <h2 className="mt-4 font-brand text-4xl font-bold leading-[1.15] text-text-black sm:text-5xl">
                Design rooted in beauty, purpose, and everyday living.
              </h2>

              <p className="mt-6 font-brand text-base leading-7 text-text-black/75 sm:text-lg">
                Cassiana is a Trinbagonian-based interior designer with over 10
                years of experience creating spaces that feel thoughtful,
                refined, and deeply personal.
              </p>

              <p className="mt-6 font-brand text-base leading-7 text-text-black/75 sm:text-lg">
                Her work is guided by the belief that the spaces we inhabit
                shape how we live, work, and feel every day.
              </p>

              <NavLink
                to="/about"
                className="mt-8 inline-flex items-center rounded-2xl border border-black/10 px-6 py-3 font-brand font-semibold text-text-black transition-colors hover:bg-text-black hover:text-brand-white"
              >
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col gap-12 lg:gap-16">
            <div className="max-w-3xl">
              <p className="font-brand text-sm font-semibold uppercase tracking-[0.2em] text-text-black/55">
                Services
              </p>

              <h2 className="mt-4 font-brand text-4xl font-bold leading-[1.15] text-text-black sm:text-5xl lg:text-6xl">
                Tailored design services for every space.
              </h2>

              <p className="mt-6 font-brand text-base leading-7 text-text-black/65 sm:text-lg">
                From concept to finishing details, each service is designed to
                support spaces that feel cohesive, functional, and timeless.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
              {services.slice(0, 3).map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              ))}
            </div>

            <div>
              <NavLink
                to="/services"
                className="inline-flex items-center rounded-2xl border border-black/10 px-6 py-3 font-brand font-semibold text-text-black transition-colors hover:bg-text-black hover:text-brand-white"
              >
                View All Services
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="rounded-3xl border border-black/10 bg-brand-white/95 p-8 shadow-md lg:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div className="max-w-2xl">
                <p className="font-brand text-sm font-semibold uppercase tracking-[0.2em] text-text-black/55">
                  Contact
                </p>

                <h2 className="mt-4 font-brand text-4xl font-bold leading-[1.15] text-text-black sm:text-5xl">
                  Ready to begin your project?
                </h2>

                <p className="mt-6 font-brand text-base leading-7 text-text-black/65 sm:text-lg">
                  Let’s create a space that feels intentional, personal, and
                  beautifully considered from start to finish.
                </p>
              </div>

              <div>
                <NavLink
                  to="/contact"
                  className="inline-flex items-center rounded-2xl border border-black/10 px-6 py-3 font-brand font-semibold text-text-black transition-colors hover:bg-text-black hover:text-brand-white"
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
