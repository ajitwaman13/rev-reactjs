import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const user = useSelector((state) => state.user.userData);
  const loggedIn = useSelector((state) => state.user.isloginUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center py-10 px-5 min-h-52 font-sans">
      {loggedIn ? (
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm text-center border border-gray-200">
          <p className="text-xl text-gray-700 mb-4 leading-relaxed">
            Welcome, <br />
            <strong className="font-bold text-3xl text-blue-600 mt-2 block">
              {user.username}
            </strong>
          </p>
          <button
            onClick={handleLogout}
            className="w-full mt-5 bg-red-600 text-white py-2.5 px-6 rounded-lg text-lg font-semibold transition duration-200 ease-in-out hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Logout
          </button>
        </div>
      ) : (
        <p className="text-xl text-gray-600 p-5 border-2 border-dashed border-gray-300 rounded-lg">
          Please log in.
        </p>
      )}
    </div>
  );
};
