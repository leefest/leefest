import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-full max-w-md md:max-w-lg mx-auto mb-8">
            <Image
              src="/leefest-logo.png"
              alt="LeeFest Logo"
              width={400}
              height={200}
              priority
              unoptimized
              className="w-full h-auto"
              style={{ background: 'transparent' }}
            />
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-balance max-w-2xl mx-auto">
          A back garden festival that became something bigger. 2006–2015.
        </h1>
      </div>
    </section>
  )
}
