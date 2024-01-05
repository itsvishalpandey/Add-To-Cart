import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      return alert("All fields are mandatory");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="w-3/12 bg-white shadow-lg">
        <form onSubmit={handleSubmit} className="px-8 py-6">
          <div className="my-6 text-center">
            <p className="text-gray-500">Welcome!</p>
            <h1 className="text-xl font-semibold mt-1">SignIn Page</h1>
          </div>
          <div className="mb-4">
            <h1 className="text-lg text-gray-500">Email: </h1>
            <input
              className="w-full p-2 my-2 rounded outline-none border border-gray-400"
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <h1 className="text-lg text-gray-500">Password: </h1>
            <input
              className="w-full p-2 my-2 rounded outline-none border border-gray-400"
              type="password"
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-6">
            <button className="w-full p-2 my-2 bg-gray-500 hover:bg-gray-400 text-white rounded outline-none">
              Sign In
            </button>
          </div>
          <div className="text-center mb-2">
            <p className="text-gray-500">
              Don't Have an Account?{" "}
              <Link to="/signup" className="text-gray-700">
                {" "}
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignInPage;
