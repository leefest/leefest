import Link from 'next/link'

export default function Legacy() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">What Came Next</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            After a decade of LeeFest, the festival evolved into something new. In 2018, the event was rebranded as <strong>Neverworld Festival</strong>, carrying forward the spirit of independence, discovery, and community that defined LeeFest from day one.
          </p>
          <Link
            href="https://neverworld.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors touch-manipulation min-h-[44px]"
          >
            Visit Neverworld Festival →
          </Link>
        </div>
      </div>
    </section>
  )
}
