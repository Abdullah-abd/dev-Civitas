export default function Login() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="relative bg-white py-16 px-10 rounded-3xl shadow-lg max-w-md w-full overflow-hidden min-h-[540px]">
        {/* Top-left corner blob */}
        <svg
          className="absolute top-0 left-0 w-40 h-40 z-0 text-mutedGreen"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor" // or use currentColor or a Tailwind theme class
            d="M200,0 C160,60 100,40 60,80 Q40,100 0,100 L0,0 Z"
          />
        </svg>

        {/* Top-right round corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-accent rounded-bl-full z-0"></div>

        {/* Bottom-left green rounded with dot */}
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary rounded-tr-full flex items-center justify-center z-0">
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>

        {/* Bottom-right accent blob */}
        <svg
          className="absolute bottom-0 right-0 w-40 h-40 z-0 text-accent"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,200 C40,140 100,160 140,120 Q160,100 200,100 L200,200 Z"
          />
        </svg>

        {/* Login Content */}
        <div className="relative z-10">
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

          <button className="btn-secondary bg-secondary w-full mb-4">
            Show Password
          </button>
          <button className="btn-primary w-full">Login</button>

          <p className="text-center mt-4 text-darkText">Forgot Password</p>

          <div className="text-center mt-4">
            <button className="flex items-center justify-center gap-2 border px-4 py-2 rounded-xl hover:bg-mutedGreen w-full text-darkText">
              <img src="/google-icon.svg" className="w-5 h-5" alt="Google" />
              <span>Google Sign-In</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
