import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hero_img from "../assets/hero_img.jpg";
import { APP_FEATURES } from "../utils/data";
import Login from "../pages/auth/Login";
import SignUp from "./auth/SignUp";
import Modal from "../components/Modal"; // ✅ Added Modal import

const LandingPage = () => {
  const navigate = useNavigate();

  // 🟢 AUTH MODAL STATES
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  // 🟢 ANIMATED TEXT
  const [animatedText, setAnimatedText] = useState("");
  const fullText = "Ask me, I am here to help you";
  const words = fullText.split(" ");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setAnimatedText((prev) =>
        index === 0 ? words[index] : prev + " " + words[index]
      );
      index++;
      if (index >= words.length) clearInterval(interval);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const handleCTA = () => {
    navigate("/get-started");
  };

  return (
    <>
      <div className="w-full bg-gradient-to-b from-yellow-50 via-orange-50 to-white min-h-screen">
        {/* Login Button */}
        <div className="absolute top-6 right-6 z-10">
          <button
            onClick={() => setOpenAuthModal(true)}
            className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Login / Sign Up
          </button>
        </div>

        {/* Hero Text Section */}
        <section className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-20">
          <div className="inline-flex items-center gap-2 text-orange-600 font-semibold bg-orange-100 px-3 py-1 rounded-full mb-4">
            ⚡ AI Powered
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Ace Interviews with <br />
            <span className="text-orange-500">AI-Powered</span> Learning
          </h1>

          <p className="text-gray-700 text-lg md:text-xl font-medium mb-8 max-w-2xl">
            Get role-specific questions, deep dive into concepts, and organize your prep.
            From practice to performance — everything you need in one place.
          </p>

          <button
            onClick={handleCTA}
            className="bg-black text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
          >
            Get Started
          </button>

          {/* Animated Text */}
          <p className="mt-8 text-green-700 text-2xl md:text-3xl font-bold h-12">
            {animatedText}
          </p>
        </section>

        {/* Image Section */}
        <section className="w-full flex justify-center py-12 px-4">
          <img
            src={hero_img}
            alt="Interview mockup"
            className="w-full max-w-5xl h-[80vh] object-cover rounded-2xl shadow-xl"
          />
        </section>

        {/* Features Section */}
        <section className="w-full relative z-10 px-6 py-16 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
              Features That Make You Shine
            </h2>

            {/* All cards one below the other */}
            <div className="flex flex-col gap-6 items-center">
              {APP_FEATURES.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`w-full p-6 rounded-xl shadow-md hover:shadow-lg transition ${
                    index < 3 ? "bg-orange-50 text-orange-600" : "bg-lime-50 text-lime-600"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center text-gray-500">
            Made with ❤️ — Happy Coding!
          </div>
        </section>
      </div>

      {/* Modal Section */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
