export default function ServiceCard({ title, description, image }) {
  return (
    <article className="w-full max-w-sm overflow-hidden rounded-3xl border border-black/10 bg-brand-white/95 shadow-sm transition duration-300 hover:shadow-md">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          width="900"
          height="675"
          className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
        />
      </div>

      <div className="p-6">
        <h3 className="font-brand text-2xl font-semibold text-text-black">
          {title}
        </h3>

        <p className="mt-3 font-brand text-base leading-7 text-text-black/70">
          {description}
        </p>
      </div>
    </article>
  );
}
