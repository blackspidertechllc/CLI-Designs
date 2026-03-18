import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

export default function Services() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col gap-12 lg:gap-16">
          <div className="max-w-3xl">
            <p className="font-brand text-sm font-semibold uppercase tracking-[0.2em] text-text-black/55">
              Services
            </p>

            <h2 className="mt-4 font-brand text-4xl font-bold leading-[1.15] text-text-black sm:text-5xl lg:text-6xl">
              Our Services
            </h2>

            <p className="mt-6 font-brand text-base leading-7 text-text-black/65 sm:text-lg">
              Tailored design solutions for every space.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
