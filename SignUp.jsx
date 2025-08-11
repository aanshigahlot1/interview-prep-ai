import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector"; 
import { ValidateEmail } from "../../utils/helper";

const SignUp = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null); 
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!fullName) {
      setError("Full name is required.");
      return;
    }
    if (ValidateEmail(email)) {
      setError("Email is invalid.");
      return;
    }
    if (!password || password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setError("");
    try {
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  }

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        Create an Account
      </h3>
      <p className="text-gray-600 text-sm mb-6 text-center">
        Join us today by entering your details below.
      </p>

      {/* 🟢 Profile Photo */}
      <ProfilePhotoSelector
        image={profilePic}
        setImage={setProfilePic}
        preview={preview}
        setPreview={setPreview}
      />

      <form onSubmit={handleSignUp} className="space-y-4 mt-4">
        <Input
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          label="Full Name"
          placeholder="John Doe"
          type="text"
        />

        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email"
          placeholder="john@example.com"
          type="email"
        />

        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 characters"
          type="password"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition"
        >
          SIGN UP
        </button>
      </form>

      <p className="mt-4 text-sm text-center text-gray-700">
        Already have an account?{" "}
        <button
          onClick={() => setCurrentPage("login")}
          className="text-blue-600 hover:underline font-medium"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default SignUp;
