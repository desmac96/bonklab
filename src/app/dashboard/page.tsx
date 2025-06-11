export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-5xl font-bold text-green-400 mb-12 text-center">
        Welcome to Your Bonk Lab Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {/* Create Avatar */}
        <div className="bg-zinc-900 border border-green-500 rounded-xl p-6 hover:bg-zinc-800 transition">
          <h2 className="text-xl font-semibold text-green-400 mb-2">Create Avatar</h2>
          <p className="text-gray-400">Start building your Freq identity.</p>
        </div>

        {/* My Tracks */}
        <div className="bg-zinc-900 border border-green-500 rounded-xl p-6 hover:bg-zinc-800 transition">
          <h2 className="text-xl font-semibold text-green-400 mb-2">My Tracks</h2>
          <p className="text-gray-400">Manage your uploaded creations.</p>
        </div>

        {/* Explore the Lab */}
        <div className="bg-zinc-900 border border-green-500 rounded-xl p-6 hover:bg-zinc-800 transition">
          <h2 className="text-xl font-semibold text-green-400 mb-2">Explore the Lab</h2>
          <p className="text-gray-400">Dive into the community and sample packs.</p>
        </div>

        {/* Settings */}
        <div className="bg-zinc-900 border border-green-500 rounded-xl p-6 hover:bg-zinc-800 transition">
          <h2 className="text-xl font-semibold text-green-400 mb-2">Settings</h2>
          <p className="text-gray-400">Tune your experience and preferences.</p>
        </div>
      </div>
    </main>
  );
}
