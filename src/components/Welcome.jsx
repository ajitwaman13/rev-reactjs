import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
// increment
const Welcome = () => {
  // const [count, setcount] = useState(0);

  // const incrementHandle = () => {
  //   setcount(count + 1);
  // };
  // const decrementHandle = () => {
  //   setcount(count - 1);
  // };

  const counter = useSelector((state) => {
    return state.counterR.value;
  });

  const dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-indigo-600 mb-6 border-b-4 border-indigo-400 pb-2">
        Redux Counter Game 🎮
      </h1>

      <div className="bg-white shadow-2xl rounded-xl p-8 sm:p-10 w-full max-w-sm text-center">
        <p className="text-xl text-gray-700 font-medium mb-4">Current Count:</p>

        <p className="text-6xl font-bold mb-8 transition-colors duration-300 ">
          {counter}
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => {
              dispatch(increment());
            }}
            className="flex-1 px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-md transition duration-200 transform hover:scale-105"
          >
            Increment +
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
            className="flex-1 px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold shadow-md transition duration-200 transform hover:scale-105"
          >
            Decrement -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
