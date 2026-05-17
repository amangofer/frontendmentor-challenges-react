export function LinkShortner() {
  return (

    <section className="bg-neutral-gray-500/25 w-full">
      <div className="container relative p-4 mx-auto w-full">

        <form className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] space-y-4 bg-primary-purple-950 p-4 rounded-lg">
          <div>
            <input type="text" className="block w-full py-4 px-2 bg-white border rounded-md placeholder:font-medium outline-primary-blue-400" placeholder="Shorten a link here..." />
            <span className="text-secondary-red-400 text-sm italic">Please add a link</span>
          </div>
          <button type="submit" className="block w-full text-xl font-bold bg-primary-blue-400 text-white py-4 rounded-md">Shorten it!</button>
        </form>

        <div className="h-40"></div>
      </div>
    </section>
  )
}
