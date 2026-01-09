'use client'

import { useState } from 'react'
import Image from 'next/image'

const photos = [
  { src: '/photos/garden-2006.jpg', alt: 'The back garden, Beckenham, 2006', caption: 'The back garden, Beckenham, 2006' },
  { src: '/photos/2007.jpg', alt: 'LeeFest 2007', caption: 'LeeFest 2007' },
  { src: '/photos/2008.jpg', alt: 'LeeFest 2008', caption: 'LeeFest 2008' },
  { src: '/photos/2009.jpg', alt: 'LeeFest 2009', caption: 'LeeFest 2009' },
  { src: '/photos/highams-2010.jpg', alt: 'Highams Hill Farm, 2010', caption: 'Highams Hill Farm, 2010' },
  { src: '/photos/2014.jpg', alt: 'LeeFest 2014', caption: 'Highams Hill Farm, 2014' },
]

export default function PhotoGallery() {
  const [lightboxOpen, setLightboxOpen] = useState<number | null>(null)

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Photo Gallery</h2>
        
        {/* Mobile: Vertical scroll */}
        <div className="md:hidden space-y-4">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setLightboxOpen(index)}
              className="w-full touch-manipulation"
              aria-label={`View ${photo.alt}`}
            >
              <div className="relative aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden mb-2">
                {/* Placeholder - replace with actual photos */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg text-gray-400">{photo.caption}</span>
                </div>
                {/* Uncomment when photos are available:
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                */}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{photo.caption}</p>
            </button>
          ))}
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setLightboxOpen(index)}
              className="group text-left"
              aria-label={`View ${photo.alt}`}
            >
              <div className="relative aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden mb-2 transition-transform group-hover:scale-105">
                {/* Placeholder - replace with actual photos */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg text-gray-400">{photo.caption}</span>
                </div>
                {/* Uncomment when photos are available:
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                */}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{photo.caption}</p>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen !== null && (
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
            <div className="relative max-w-5xl w-full aspect-video">
              {/* Placeholder - replace with actual photos */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
                <span className="text-xl text-gray-400">{photos[lightboxOpen].caption}</span>
              </div>
              {/* Uncomment when photos are available:
              <Image
                src={photos[lightboxOpen].src}
                alt={photos[lightboxOpen].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
              */}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
