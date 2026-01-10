'use client'

import { useState } from 'react'
import Image from 'next/image'

const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015]

// Map of years to their poster file paths
const posterFiles: Record<number, string> = {
  2006: '/posters/leefest-2006-poster.png',
  2007: '/posters/leefest-2007-poster.png',
  2008: '/posters/leefest-2008-poster.jpg',
  2009: '/posters/leefest-2009-poster.jpg',
  2010: '/posters/leefest-2010-poster.png',
}

const hasPoster = (year: number) => year in posterFiles

export default function Posters() {
  const [lightboxOpen, setLightboxOpen] = useState<number | null>(null)

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Posters</h2>
        
        {/* Mobile: Horizontal scroll carousel */}
        <div className="md:hidden">
          <div className="overflow-x-auto scrollbar-hide snap-scroll -mx-4 px-4">
            <div className="flex gap-4">
              {years.map((year) => (
                <div
                  key={year}
                  className="flex-shrink-0 w-[80vw] snap-item"
                >
                  <button
                    onClick={() => setLightboxOpen(year)}
                    className="w-full h-full touch-manipulation"
                    aria-label={`View ${year} poster`}
                  >
                    <div className="relative aspect-[3/4] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
                      {hasPoster(year) ? (
                        <Image
                          src={posterFiles[year]}
                          alt={`LeeFest ${year} poster`}
                          fill
                          className="object-cover"
                          sizes="80vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl font-bold text-gray-400">{year}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-center text-lg font-medium">{year}</p>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setLightboxOpen(year)}
              className="group text-left"
              aria-label={`View ${year} poster`}
            >
              <div className="relative aspect-[3/4] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden mb-4 transition-transform group-hover:scale-105">
                {hasPoster(year) ? (
                  <Image
                    src={posterFiles[year]}
                    alt={`LeeFest ${year} poster`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 33vw, 20vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-400">{year}</span>
                  </div>
                )}
              </div>
              <p className="text-center text-lg font-medium">{year}</p>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setLightboxOpen(null)
              }
            }}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold w-12 h-12 flex items-center justify-center touch-manipulation hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
              onClick={() => setLightboxOpen(null)}
              aria-label="Close lightbox"
            >
              ×
            </button>
            <div className="relative max-w-2xl w-full aspect-[3/4]">
              {lightboxOpen && hasPoster(lightboxOpen) ? (
                <Image
                  src={posterFiles[lightboxOpen]}
                  alt={`LeeFest ${lightboxOpen} poster`}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
                  <span className="text-6xl font-bold text-gray-400">{lightboxOpen}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
