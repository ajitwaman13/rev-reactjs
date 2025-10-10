import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeN = () => {
  const naviagte = useNavigate();

  const userData = {
    activity: "Exploring component props and react some basic ",
    nextGoal: "Mastering Redux integration",
    lastLogin: new Date().toLocaleString(),
    currentProject: "The 'Time Pass' Dashboard",
  };

  const quotes = [
    "Koi quote nhi hai so ja ",
    "dummmb",
    "so ja buddy",
    "Your time is limited kam kar ja .... ",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-8 sm:p-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 border-b-4 border-indigo-500 pb-2 inline-block">
          Welcome to the Time Pass Component
        </h1>
        <p className="text-xl text-indigo-600 mb-8">
          A little distraction for your coding break.
        </p>

        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 mb-10">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
            Today's Thought:
          </h3>
          <p className="italic text-gray-700 text-lg leading-relaxed">
            {randomQuote}
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Random Dev Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm transition duration-300 hover:shadow-md">
            <p className="text-sm font-medium text-gray-500">
              Current Activity
            </p>
            <p className="text-xl font-semibold text-gray-900">
              {userData.activity}
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm transition duration-300 hover:shadow-md">
            <p className="text-sm font-medium text-gray-500">Next Focus Goal</p>
            <p className="text-xl font-semibold text-gray-900">
              {userData.nextGoal}
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm transition duration-300 hover:shadow-md">
            <p className="text-sm font-medium text-gray-500">Project Context</p>
            <p className="text-xl font-semibold text-gray-900">
              {userData.currentProject}
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm transition duration-300 hover:shadow-md">
            <p className="text-sm font-medium text-gray-500">
              Last Component Load
            </p>
            <p className="text-xl font-semibold text-gray-900">
              {userData.lastLogin}
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                naviagte("/login");
              }}
              className="bg-blue-600 p-3 m-2 border-e-0 text-white"
            >
              Login
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                naviagte("/game");
              }}
              className="bg-green-600 p-3 m-2 border-e-0 text-white"
            >
              Explore Game{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeN;
