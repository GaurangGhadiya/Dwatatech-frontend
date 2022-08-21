import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiPostNoAuth } from "../Api";
import AuthRightSide from "../common/AuthRightSide";
import { ErrorToast, SuccessToast } from "../common/Toast";

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    ApiPostNoAuth("user/signup", { fname, lname, email, password })
      .then((res) => {
        SuccessToast(res?.data?.message);
        navigate("/login");
      })
      .catch((e) => {
        ErrorToast(e?.message);
      });
  };
  return (
    <div className="row m-0">
      <div className="col-sm-12 col-md-6 ">
        <div className="  left-side">
          <div className="w-75 text-start">
            <h3>Sign up</h3>
            <p className="mt-4">
              Welcome to Camel Cloud, please put your details below to start
              using the app{" "}
            </p>
            <div className="d-flex justify-content-between align-items-center mt-5">
              <label className="font-bold">First Name</label>
              <input
                autoComplete="false"
                name="fname"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />{" "}
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <label className="font-bold">Last Name</label>
              <input
                autoComplete="false"
                name="lname"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />{" "}
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <label className="font-bold">E-mail</label>
              <input
                autoComplete="false"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />{" "}
            </div>

            <div className="d-flex justify-content-between align-items-center mt-4 mb-5">
              <label className="font-bold">Password</label>
              <input
                autoComplete="false"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <hr />

            <div className="d-flex justify-content-between align-items-center mt-5">
              <div>
                <p>
                  Already have an account?{" "}
                  <span
                    className="text_primary font-bold"
                    role="button"
                    onClick={() => navigate("/login")}
                  >
                    Log in
                  </span>
                </p>
              </div>
              <div>
                <button className="button" type="button" onClick={handleSubmit}>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthRightSide />
      {/* <input name="email" value={email} onChange={(e) => setemail(e.target.value)} />
      <input name="password" value={password}  onChange={(e) => setPassword(e.target.value)} />

      <button type="button" onClick={handleSubmit}>
        Submit
      </button> */}
    </div>
  );
};

export default Signup;
