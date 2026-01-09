import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="px-4 py-12 md:py-16 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-base md:text-lg">
          Founded by{' '}
          <Link
            href="https://leedenny.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600 dark:hover:text-gray-400"
          >
            Lee Denny
          </Link>
        </p>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
          Built entirely by volunteers. 2006–2015.
        </p>
      </div>
    </footer>
  )
}
