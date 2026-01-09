import Link from 'next/link'

const headliners = [
  { name: 'Bastille', years: '2010, 2012', spotify: 'https://open.spotify.com/artist/1EQeYoEZ40jUyodvFm0Pw3' },
  { name: 'London Grammar', years: '2013', spotify: 'https://open.spotify.com/artist/3yB7y6wNM5kybwvVUAnkH2' },
  { name: 'Clean Bandit', years: '2013', spotify: 'https://open.spotify.com/artist/6MDME20pz9RveH9rEXvrOM' },
  { name: 'Years & Years', years: '2014', spotify: 'https://open.spotify.com/artist/5rBSr2gHfUyDzyshU4NlaF' },
  { name: 'Young Fathers', years: '2014', spotify: 'https://open.spotify.com/artist/5mZC7ndY6oGMxJentRwsuV' },
  { name: 'Jack Garratt', years: '2014', spotify: 'https://open.spotify.com/artist/1Zp54J0KjPaadSOEaC6wbg' },
  { name: 'The Cribs', years: '2014', spotify: 'https://open.spotify.com/artist/51ZF6lYtEWNO3bKGl6R8FL' },
  { name: 'Frightened Rabbit', years: '2014', spotify: 'https://open.spotify.com/artist/6AfV6Z0oVwPy8flrIj7esN' },
  { name: 'MØ', years: '2014', spotify: 'https://open.spotify.com/artist/0bdfiayQAKewqEvaU6rXCv' },
  { name: 'Mystery Jets', years: '2012', spotify: 'https://open.spotify.com/artist/7Kt6PqHzow95oY7uYjJzqX' },
  { name: 'The Futureheads', years: '2010', spotify: 'https://open.spotify.com/artist/3TBfn8PtXr4wKT5i0iIKBc' },
  { name: 'British Sea Power', years: '2011', spotify: 'https://open.spotify.com/artist/2J6r0ZLRYbiUlHZmZsLySi' },
  { name: 'Ghostpoet', years: '2012', spotify: 'https://open.spotify.com/artist/7lBJx2HSmYgsYqBqby3uUv' },
  { name: 'Maribou State', years: '2014', spotify: 'https://open.spotify.com/artist/7zrkTHJzF1K2LpHBCtJHMW' },
  { name: 'Rae Morris', years: '2014', spotify: 'https://open.spotify.com/artist/67xsr7VEMlB6Ibz9xnF2hu' },
  { name: 'Public Service Broadcasting', years: '2012, 2013', spotify: 'https://open.spotify.com/artist/6bSdvdQiv0i9XyN5uX3hV2' },
]

const breakthroughActs = [
  { name: 'The 2 Bears', spotify: 'https://open.spotify.com/artist/3hSTd7RSjtplYtMoJXh6hK' },
  { name: 'Noisettes', spotify: 'https://open.spotify.com/artist/6oX4tx055oEFvg3FyJwFGD' },
  { name: 'Delphic', spotify: 'https://open.spotify.com/artist/1K2Xq2OZHL2l0vsmFmOcNn' },
  { name: 'DJ Fresh', spotify: 'https://open.spotify.com/artist/6r20OPOoPqNcDlX17Xw7Oj' },
  { name: 'Stanton Warriors', spotify: 'https://open.spotify.com/artist/0V7rQ8qcdUqTe0YXq3045m' },
  { name: 'Krafty Kuts', spotify: 'https://open.spotify.com/artist/2bGPx5Cd3Cgo4z9IAFS6bw' },
  { name: 'The King Blues', spotify: 'https://open.spotify.com/artist/0LgY8B8lFUKtVg9j3n5aHl' },
  { name: 'Young Knives', spotify: 'https://open.spotify.com/artist/4FHuj6Fj52aK7tjbVudlXQ' },
  { name: 'Fickle Friends', spotify: 'https://open.spotify.com/artist/1nhSLEYdoBHG6cJ8NDwoF1' },
  { name: 'The Bohicas', spotify: 'https://open.spotify.com/artist/2kvxryhp7wMli6k8f33bjP' },
  { name: 'Blaenavon', spotify: 'https://open.spotify.com/artist/79RmzX8i9w6YwqJjg3O1MY' },
  { name: 'Palace', spotify: 'https://open.spotify.com/artist/48vDIufGC8ujPuBiTxY8dm' },
  { name: 'The Magic Gang', spotify: 'https://open.spotify.com/artist/52pNByi1nomq7qC37c5jPl' },
  { name: 'Childhood', spotify: 'https://open.spotify.com/artist/0aJJFEfHZymX4LnB2wHy6d' },
  { name: 'Slow Club', spotify: 'https://open.spotify.com/artist/75V0fKDU38SZr3IlZjP34G' },
  { name: 'Summer Camp', spotify: 'https://open.spotify.com/artist/58PYq7xh7izxv6Mu5erBc7' },
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
                href={artist.spotify}
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
                href={artist.spotify}
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
