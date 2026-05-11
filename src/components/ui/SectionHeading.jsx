export default function SectionHeading({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs tracking-[0.34em] text-cream-200/60">{kicker}</p>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-cream-100 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-balance text-base leading-relaxed text-cream-100/70">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
