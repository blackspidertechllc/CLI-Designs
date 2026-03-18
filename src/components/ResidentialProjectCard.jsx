export default function ResidentialProjectCard({
  title,
  description,
  topLeftImage,
  topRightImage,
  bottomImage,
  topLeftAlt = "",
  topRightAlt = "",
  bottomAlt = "",
  reverse = false,
}) {
  return (
    <article className="grid grid-cols-1 gap-10 rounded-3xl border border-black/10 bg-brand-white/95 p-8 shadow-md transition-shadow hover:shadow-lg md:grid-cols-2 md:items-center lg:gap-12 lg:p-10">
      {/* Text Column */}
      <div
        className={`flex flex-col justify-center ${
          reverse ? "order-1 md:order-2" : ""
        }`}
      >
        <h3 className="font-brand text-2xl font-bold leading-[1.2] text-text-black sm:text-3xl">
          {title}
        </h3>

        <p className="mt-5 max-w-xl font-brand text-base leading-7 text-text-black/75 sm:text-lg">
          {description}
        </p>
      </div>

      {/* Image Column */}
      <div
        className={`grid grid-cols-2 gap-5 ${
          reverse ? "order-2 md:order-1" : ""
        }`}
      >
        <div className="overflow-hidden rounded-2xl">
          <img
            src={topLeftImage}
            alt={topLeftAlt}
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-[1.02] sm:h-56"
          />
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src={topRightImage}
            alt={topRightAlt}
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-[1.02] sm:h-56"
          />
        </div>

        <div className="col-span-2 overflow-hidden rounded-2xl">
          <img
            src={bottomImage}
            alt={bottomAlt}
            className="h-56 w-full object-cover transition-transform duration-300 hover:scale-[1.02] sm:h-64"
          />
        </div>
      </div>
    </article>
  );
}
