
export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-green-400">Welcome Back</h1>
        <p className="text-gray-400">Sign in to access The Bonk Lab</p>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800 text-white" />
          <input type="password" placeholder="Password" className="w-full p-3 rounded bg-gray-800 text-white" />
          <button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-6 rounded-full transition duration-300">
            Sign In
          </button>
        </form>
        <p className="text-sm text-gray-500">
          Don’t have an account? <a href="/signup" className="text-green-400 hover:underline">Sign Up</a>
        </p>
      </div>
    </main>
  );
}
