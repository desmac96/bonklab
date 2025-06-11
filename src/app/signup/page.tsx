export default function SignupPage() {
  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center bg-transparent text-white px-4">
      <div className="w-full max-w-xl p-8 bg-black/80 rounded-lg">
        <h1 className="text-4xl font-bold text-green-400 mb-6">Create an Account</h1>
        <form className="space-y-6">
          <input type="text" placeholder="Name" className="w-full p-4 rounded bg-gray-800 text-white" />
          <input type="email" placeholder="Email" className="w-full p-4 rounded bg-gray-800 text-white" />
          <input type="password" placeholder="Password" className="w-full p-4 rounded bg-gray-800 text-white" />
          <button className="w-full bg-green-500 hover:bg-green-600 text-black py-3 rounded text-lg font-semibold">Sign Up</button>
        </form>
      </div>
    </main>
  );
}
