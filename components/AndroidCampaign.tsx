export default function AndroidCampaign() {
  return (
    <section className="px-4 py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">LeeFest x Android</h2>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            In November 2015, LeeFest became the subject of a major television advertisement for Google's Android operating system, part of their acclaimed <strong>"Be Together. Not the Same."</strong> campaign.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            The 60-second commercial, created by <strong>adam&eveDDB</strong>, told the true story of LeeFest — how a 16-year-old's rebellion against his parents' house party ban sparked something that grew into one of the UK's most beloved independent festivals. The ad featured the track <strong>"Get Up"</strong> by Elektrons.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            The campaign was widely praised, with industry publications naming it among the best adverts of 2015 for its authentic storytelling and understanding of its target audience.
          </p>
        </div>

        {/* Video embed placeholder */}
        <div className="relative aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <p className="text-lg md:text-xl mb-4 text-gray-600 dark:text-gray-400">
              Android Campaign Video
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Replace with YouTube/Vimeo embed when available
            </p>
          </div>
          {/* Uncomment when video is available:
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="LeeFest Android Campaign"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          */}
        </div>
      </div>
    </section>
  )
}
