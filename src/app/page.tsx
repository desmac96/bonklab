import Link from "next/link";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white text-center px-4">
      <h1 className="text-5xl sm:text-6xl font-bold text-green-400 mb-6">Enter The Bonk Lab</h1>
      <p className="text-xl text-gray-400 mb-8">A new dimension of music. Become a Freq.</p>

      <Link href="/login">
        <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full text-lg font-semibold mb-4">
          Sign In to Bonk
        </button>
      </Link>

      <p className="text-lg text-gray-400">
        New here?{" "}
        <Link href="/signup" className="text-green-400 underline">
          Create an account
        </Link>
      </p>
    </main>
  );
}
