import ResidentialProjectCard from "@/components/ResidentialProjectCard";
import CommercialProjectCard from "@/components/CommercialProjectCard";
import { residentialProjects } from "@/data/residentialprojects";
import { commercialProjects } from "@/data/commercialprojects";

export default function ProjectsSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col gap-16 lg:gap-20">
          <div className="flex flex-col gap-10 lg:gap-12">
            <div>
              <h2 className="mt-4 font-brand text-4xl font-bold leading-[1.15] text-text-black sm:text-5xl">
                Residential
              </h2>

              <p className="mt-6 max-w-2xl font-brand text-base leading-7 text-text-black/65 sm:text-lg">
                Spaces designed for comfort, function, and everyday living.
              </p>
            </div>

            <div className="flex flex-col gap-8 lg:gap-10">
              {residentialProjects.map((project, index) => (
                <ResidentialProjectCard
                  key={project.id}
                  {...project}
                  reverse={index % 2 !== 0}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10 lg:gap-12">
            <div>
              <h2 className="mt-4 font-brand text-4xl font-bold leading-[1.15] text-text-black sm:text-5xl">
                Commercial
              </h2>

              <p className="mt-6 max-w-2xl font-brand text-base leading-7 text-text-black/65 sm:text-lg">
                Interiors crafted to support brand experience and business
                goals.
              </p>
            </div>

            <div className="flex flex-col gap-8 lg:gap-10">
              {commercialProjects.map((project, index) => (
                <CommercialProjectCard
                  key={project.id}
                  {...project}
                  reverse={(index + residentialProjects.length) % 2 !== 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
