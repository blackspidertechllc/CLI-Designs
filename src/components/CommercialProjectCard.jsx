import { NavLink } from "react-router";

export default function CommercialProjectCard({
  title,
  description,
  images = [],
  projectUrl,
  reverse = false,
}) {
  return (
    <article className="grid grid-cols-1 gap-8 rounded-3xl border border-black/10 bg-brand-white/95 p-6 shadow-sm md:grid-cols-2 lg:gap-12 lg:p-8">
      {/* Text Column */}
      <div
        className={`flex flex-col justify-center ${
          reverse ? "order-1 md:order-2" : ""
        }`}
      >
        <h2 className="font-brand text-2xl font-bold text-text-black sm:text-3xl">
          {title}
        </h2>

        <p className="mt-4 max-w-xl font-brand text-base leading-7 text-text-black/75 sm:text-lg">
          {description}
        </p>

        {projectUrl && (
          <NavLink
            to={projectUrl}
            className="mt-6 inline-flex w-fit items-center rounded-2xl border border-black/10 px-4 py-2 font-brand font-semibold text-text-black transition hover:bg-text-black hover:text-brand-white"
          >
            View Project
          </NavLink>
        )}
      </div>

      {/* Image Grid */}
      <div
        className={`grid grid-cols-2 gap-4 ${
          reverse ? "order-2 md:order-1" : ""
        }`}
      >
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-2xl">
            <img
              src={image.src}
              alt={image.alt || ""}
              className="h-48 w-full object-cover transition duration-300 hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>
    </article>
  );
}