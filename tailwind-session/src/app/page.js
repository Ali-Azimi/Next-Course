import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div>
        <h1 className="bg-black m-4 pt-2 text-white border-3 rounded-harchi border-red-400 rounded">
          HELLO TAILWIND CSS
        </h1>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-banner gap-3">
        <div className="bg-slate-600 text-white rounded-md border-1 border-black p-4 m-2 hover:bg-slate-100 cursor-pointer group first:bg-red-100 transition hover:animate-harchi">
          <h3 className="text-lg font-semibold hover:text-black">Card Title</h3>
          <p className="text-sm font-light">Card Body</p>

          {/* <div className="flex items-center justify-center"> */}
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-sm group-hover:bg-red-400">
            Click Me
          </button>
          {/* </div> */}
        </div>

        <div className="bg-slate-600 text-white rounded-md border-1 border-black p-4 m-2">
          <h3 className="text-lg font-semibold">Card Title</h3>
          <p className="text-sm font-light">Card Body</p>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-sm">
            Click Me
          </button>
        </div>

        {/* <div className="bg-slate-600 text-white rounded-md border-1 border-black p-4 m-2">
          <h3 className="text-lg font-semibold">Card Title</h3>
          <p className="text-sm font-light">Card Body</p>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-sm">
            Click Me
          </button>
        </div> */}

        <div className="bg-slate-600 text-white rounded-md border-1 border-black p-4 m-2">
          <h3 className="text-lg font-semibold">Card Title</h3>
          <p className="text-sm font-light">Card Body</p>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-sm">
            Click Me
          </button>
        </div>
      </section>
    </>
  );
}
