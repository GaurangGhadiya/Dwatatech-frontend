import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthRightSide from "../common/AuthRightSide";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="row m-0">
      <AuthRightSide />
      <div className="col-sm-12 col-md-6 ">
        <div className="  left-side">
          <div className="w-75 text-start">
            <h3>User Profile</h3>
            <p className="mt-4">Welcome to your profile!</p>
            <div className="d-flex justify-content-between align-items-center mt-5">
              <label className="font-bold">First Name</label>
              <span>{location.state.fname}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <label className="font-bold">Last Name</label>
              <span>{location.state.lname}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4 mb-5">
              <label className="font-bold">Email</label>
              <span>{location.state.email}</span>
            </div>

            <hr />

            <div className="d-flex justify-content-center align-items-center mt-4">
              <div>
                <button className="button" type="button" onClick={handleLogOut}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
