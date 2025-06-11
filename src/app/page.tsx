export default function Home() {
  return (
    <main className="min-h-screen relative flex items-center justify-center bg-black text-white overflow-hidden px-6">
      {/* Starry background */}
      <div className="absolute inset-0 bg-[url('/stars.svg')] bg-cover opacity-10 pointer-events-none z-0" />

      {/* Bonk logo top-left */}
      <div className="absolute top-4 left-4 z-10">
        <img src="/bonk-icon.png" alt="Bonk Lab Icon" className="w-10 h-10" />
      </div>

      {/* Main content */}
      <div className="text-center space-y-6 z-10 relative">
        <h1 className="text-5xl font-bold text-green-400 drop-shadow-lg">
          Enter The Bonk Lab
        </h1>
        <p className="text-gray-400 text-lg">
          A new dimension of music. Become a Freq.
        </p>
        <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-6 rounded-full text-lg transition duration-300 shadow-lg">
          Sign In to Bonk
        </button>
      </div>
    </main>
  );
}
