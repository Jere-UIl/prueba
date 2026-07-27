export default function Hero() {
  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 pb-40"
      style={{ paddingTop: 'calc(8rem - 75px)' }}
    >
      <h1
        className="font-display text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal animate-fade-rise"
        style={{ lineHeight: 0.95, letterSpacing: '-2.46px', color: '#000000' }}
      >
        Beyond{' '}
        <em className="italic" style={{ color: '#6F6F6F' }}>
          silence,
        </em>{' '}
        we build{' '}
        <em className="italic" style={{ color: '#6F6F6F' }}>
          the eternal.
        </em>
      </h1>

      <p
        className="font-body text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay"
        style={{ color: '#6F6F6F' }}
      >
        Building platforms for brilliant minds, fearless makers, and thoughtful souls. Through
        the noise, we craft digital havens for deep work and pure flows.
      </p>

      <button
        type="button"
        className="font-body rounded-full px-14 py-5 text-base mt-12 bg-black text-white transition-transform duration-200 hover:scale-[1.03] animate-fade-rise-delay-2"
      >
        Begin Journey
      </button>
    </section>
  )
}
