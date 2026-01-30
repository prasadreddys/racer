export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center text-center py-32 px-16">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">
          Welcome to Base Racer
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Get ready for the ultimate racing experience on Base.
        </p>
        <div className="mb-8 p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Verify your mini app ownership</h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            Get credit for your work and build user trust. If your Base Account isn't linked to a FID, you'll be prompted to connect it.
          </p>
        </div>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          Start Racing
        </button>
      </main>
    </div>
  );
}
