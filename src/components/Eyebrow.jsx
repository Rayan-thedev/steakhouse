export default function Eyebrow({ children, align = 'left' }) {
  return (
    <div className={`flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : 'items-start'}`}>
      <span className="text-xs md:text-sm tracking-widest2 uppercase text-gold-400 font-body font-medium">
        {children}
      </span>
    </div>
  )
}
