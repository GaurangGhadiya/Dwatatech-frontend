import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiPostNoAuth } from "../Api";
import AuthRightSide from "../common/AuthRightSide";
import { ErrorToast, SuccessToast } from "../common/Toast";

function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    ApiPostNoAuth("user/login", { email, password })
      .then((res) => {
        SuccessToast(res?.data?.message);
        localStorage.setItem("userData", JSON.stringify(res?.data?.data));
        navigate("/", { state: res?.data?.data });
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
            <h3>Log in</h3>
            <p className="mt-4">
              Welcome to Camel Cloud, please put your login credentials below to
              start using the app{" "}
            </p>
            <div className="d-flex justify-content-between align-items-center mt-5">
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
                <input type="checkbox" />
                <label className="ms-2">Remember me</label>
              </div>
              <div>
                <button className="button" type="button" onClick={handleSubmit}>
                  Log in
                </button>
              </div>
            </div>

            <div className="text-center mt-5">
              <p>
                Don't have an account?{" "}
                <span
                  className="text_primary font-bold"
                  role="button"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <AuthRightSide />
    </div>
  );
}

export default Login;
