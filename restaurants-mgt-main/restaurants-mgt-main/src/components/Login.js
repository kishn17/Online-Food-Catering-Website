import React from "react";
import "../components/Login.css";
import { Login } from "../Services/UserService.js";
const LoginUser = () => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const HandleForm = async (e) => {
    e.preventDefault();
    const res = await Login(data);
    if (res.status === 200) {
      alert("Login successfull");
    }
  };
  return (
    <>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form action="" onSubmit={HandleForm}>
              <h2>Login</h2>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="email"
                  placeholder="Email"
                  className="white"
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                  }}
                />
              </div>
              <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  type="password"
                  placeholder="Password"
                  className="white"
                  onChange={async (e) => {
                    setData({ ...data, password: e.target.value });
                  }}
                />
              </div>
              <div className="forget">
                <label htmlFor="rememberMe">
                  <input type="checkbox" />
                  Remember Me <a href="#">Forget Password</a>
                </label>
              </div>
              <input type="submit" className="submit-btn" value="Login" />
            </form>
            <div className="register">
              <p>
                Don't have an account <a href="/register">Register</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginUser;
