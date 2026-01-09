import Link from 'next/link'

const pressQuotes = [
  {
    outlet: 'The Guardian',
    quote: '"A fantastic unpretentious party vibe"',
    citation: 'The Guardian, "Ten Best Small UK Festivals", May 2010',
    logo: '/press/guardian.png', // Placeholder
  },
  {
    outlet: 'BBC Radio 1',
    quote: '"Lee\'s story has been compared to that of Michael Eavis who started Glastonbury"',
    citation: 'BBC Radio 1',
    logo: '/press/bbc-radio1.png', // Placeholder
  },
  {
    outlet: 'NME',
    quote: '"The ultimate party"',
    citation: 'NME',
    logo: '/press/nme.png', // Placeholder
  },
  {
    outlet: 'Louder Than War',
    quote: '"How to make a small festival work"',
    citation: 'Louder Than War, August 2011',
    link: 'https://louderthanwar.com/leefest-2011-reviewed/',
    logo: '/press/louder-than-war.png', // Placeholder
  },
]

const additionalCoverage = [
  'BBC Radio 6 Music',
  'BBC News',
  'ITV News',
  'Time Out London',
  'London Tonight',
]

export default function Press() {
  return (
    <section className="px-4 py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">As Featured In</h2>
        
        {/* Mobile: Stacked layout */}
        <div className="md:hidden space-y-8">
          {pressQuotes.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <div className="mb-4">
                {/* Placeholder for logo */}
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center mb-4">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{item.outlet}</span>
                </div>
                {/* Uncomment when logos are available:
                <Image
                  src={item.logo}
                  alt={`${item.outlet} logo`}
                  width={120}
                  height={40}
                  className="h-12 w-auto"
                />
                */}
              </div>
              <blockquote className="text-lg md:text-xl font-medium mb-2 italic">
                {item.quote}
              </blockquote>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.link ? (
                  <Link href={item.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900 dark:hover:text-gray-200">
                    {item.citation}
                  </Link>
                ) : (
                  item.citation
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pressQuotes.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <div className="mb-4">
                {/* Placeholder for logo */}
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center mb-4">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{item.outlet}</span>
                </div>
              </div>
              <blockquote className="text-base font-medium mb-2 italic">
                {item.quote}
              </blockquote>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {item.link ? (
                  <Link href={item.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900 dark:hover:text-gray-200">
                    {item.citation}
                  </Link>
                ) : (
                  item.citation
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Additional coverage */}
        <div className="text-center">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
            <strong>Additional coverage:</strong>
          </p>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            {additionalCoverage.join(' • ')}
          </p>
        </div>
      </div>
    </section>
  )
}
