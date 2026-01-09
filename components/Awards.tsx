export default function Awards() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Award-Winning</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="p-6 md:p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Best Grassroots Festival</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">UK Festival Awards 2009</p>
          </div>
          <div className="p-6 md:p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Best Independent Festival</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">AIM Independent Music Awards 2012</p>
          </div>
        </div>
      </div>
    </section>
  )
}
