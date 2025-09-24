import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl max-w-md w-full p-8">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">Create an Account</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-orange-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/signin" className="text-orange-500 font-semibold hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;