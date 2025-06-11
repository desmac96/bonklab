export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center space-y-6">
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
