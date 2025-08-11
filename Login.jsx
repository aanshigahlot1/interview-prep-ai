import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input"; // Adjust path if needed
import {ValidateEmail} from "../../utils/helper";
const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // 🟠 Handle login logic
  const handleLogin = async (e) => {
    e.preventDefault();

    if(!ValidateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if(!password) {
      setError("Password is required.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setError("");

    try {
      // TODO: Replace with actual login API call
      console.log("Logging in with:", { email, password });

      // Simulate successful login
      navigate("/dashboard");
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        Welcome Back
      </h3>
      <p className="text-gray-600 text-sm mb-6 text-center">
        Please enter your credentials to login.
      </p>

      <form onSubmit={handleLogin} className="space-y-4">
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="john@example.com"
          type="email"
        />

        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 Characters"
          type="password"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          LOGIN
        </button>
      </form>

      <p className="mt-4 text-sm text-center text-gray-700">
        Don’t have an account?{" "}
        <button
          type="button"
          onClick={() => setCurrentPage("signup")}
          className="text-orange-500 hover:underline font-medium"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;
