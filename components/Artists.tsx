import Link from 'next/link'

const headliners = [
  { name: 'Bastille', years: '2010, 2012', website: 'https://www.bastillebastille.com' },
  { name: 'London Grammar', years: '2013', website: 'https://www.londongrammar.com' },
  { name: 'Clean Bandit', years: '2013', website: 'https://www.cleanbandit.co.uk' },
  { name: 'Years & Years', years: '2014', website: 'https://www.yearsandyears.com' },
  { name: 'Young Fathers', years: '2014', website: 'https://www.young-fathers.com' },
  { name: 'Jack Garratt', years: '2014', website: 'https://www.jackgarratt.com' },
  { name: 'The Cribs', years: '2014', website: 'https://www.thecribs.com' },
  { name: 'Frightened Rabbit', years: '2014', website: 'https://www.frightenedrabbit.com' },
  { name: 'MØ', years: '2014', website: 'https://www.momomoyouth.com' },
  { name: 'Mystery Jets', years: '2012', website: 'https://www.mysteryjets.com' },
  { name: 'The Futureheads', years: '2010', website: 'https://www.thefutureheads.com' },
  { name: 'British Sea Power', years: '2011', website: 'https://www.britishseapower.co.uk' },
  { name: 'Ghostpoet', years: '2012', website: 'https://www.ghostpoet.co.uk' },
  { name: 'Maribou State', years: '2014', website: 'https://www.mariboustate.com' },
  { name: 'Rae Morris', years: '2014', website: 'https://www.raemorris.co.uk' },
  { name: 'Public Service Broadcasting', years: '2012, 2013', website: 'https://www.publicservicebroadcasting.net' },
]

const breakthroughActs = [
  { name: 'The 2 Bears', website: 'https://www.the2bears.com' },
  { name: 'Noisettes', website: 'https://www.noisettes.co.uk' },
  { name: 'Delphic', website: 'https://www.delphic.me.uk' },
  { name: 'DJ Fresh', website: 'https://www.djfresh.com' },
  { name: 'Stanton Warriors', website: 'https://www.stantonwarriors.com' },
  { name: 'Krafty Kuts', website: 'https://www.kraftykuts.com' },
  { name: 'The King Blues', website: 'https://www.thekingblues.com' },
  { name: 'Young Knives', website: 'https://www.youngknives.com' },
  { name: 'Fickle Friends', website: 'https://www.ficklefriends.co.uk' },
  { name: 'The Bohicas', website: 'https://www.thebohicas.com' },
  { name: 'Blaenavon', website: 'https://www.blaenavon.com' },
  { name: 'Palace', website: 'https://www.palaceband.com' },
  { name: 'The Magic Gang', website: 'https://www.themagicgang.co.uk' },
  { name: 'Childhood', website: 'https://www.childhoodband.com' },
  { name: 'Slow Club', website: 'https://www.slowclub.co.uk' },
  { name: 'Summer Camp', website: 'https://www.summercampband.com' },
]

export default function Artists() {
  return (
    <section className="px-4 py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Artists Who Played LeeFest</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Many of these artists played LeeFest before achieving mainstream success — the festival became known for discovering breakthrough talent.
        </p>

        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">Headliners & Major Acts</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {headliners.map((artist) => (
              <Link
                key={artist.name}
                href={artist.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm md:text-base hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors touch-manipulation min-h-[44px] flex items-center"
              >
                {artist.name}
                {artist.years && <span className="ml-2 text-xs text-gray-500">({artist.years})</span>}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">Notable Breakthrough Acts</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {breakthroughActs.map((artist) => (
              <Link
                key={artist.name}
                href={artist.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm md:text-base hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors touch-manipulation min-h-[44px] flex items-center"
              >
                {artist.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
