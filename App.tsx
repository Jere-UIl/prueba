const NAV_ITEMS: { label: string; color: string }[] = [
  { label: 'Home', color: '#000000' },
  { label: 'Studio', color: '#6F6F6F' },
  { label: 'About', color: '#6F6F6F' },
  { label: 'Journal', color: '#6F6F6F' },
  { label: 'Reach Us', color: '#6F6F6F' },
]

export default function Navbar() {
  return (
    <nav className="relative z-10 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full">
      <a
        href="#"
        className="font-display text-3xl tracking-tight"
        style={{ color: '#000000' }}
      >
        Aethera<sup className="text-base align-super">®</sup>
      </a>

      <ul className="hidden md:flex items-center gap-8 font-body">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <a
              href="#"
              className="text-sm transition-colors hover:opacity-70"
              style={{ color: item.color }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="font-body rounded-full px-6 py-2.5 text-sm bg-black text-white transition-transform duration-200 hover:scale-[1.03]"
      >
        Begin Journey
      </button>
    </nav>
  )
}
