export default function Login() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-darkText mb-6">
          Login
        </h2>

        <input
          type="text"
          placeholder="Email/Username"
          className="input-field w-full mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field w-full mb-4"
        />

        <button className="btn-secondary w-full mb-4">Show Password</button>
        <button className="btn-primary w-full">Login</button>

        <p className="text-center mt-4">or</p>

        <div className="text-center mt-4">
          <button className="flex items-center justify-center gap-2 border px-4 py-2 rounded-xl hover:bg-gray-100 w-full">
            <img src="/google-icon.svg" className="w-5 h-5" alt="Google" />
            <span>Google Sign-In</span>
          </button>
        </div>
      </div>
    </div>
  );
}
