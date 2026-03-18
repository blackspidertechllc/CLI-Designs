export default function ServiceCard({ title, description, image }) {
  return (
    <div className="flex w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-black/10 bg-brand-white/95 shadow-md transition-shadow hover:shadow-lg">
      <div className="h-56 w-full overflow-hidden sm:h-64">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-col gap-4 p-8">
        <h3 className="font-brand text-xl font-bold leading-[1.2] text-text-black sm:text-2xl">
          {title}
        </h3>

        <p className="font-brand text-base leading-7 text-text-black/75">
          {description}
        </p>
      </div>
    </div>
  );
}
