import React, { useState } from "react";
import { InsertUser } from "../Services/UserService.js";
const RegisterUser = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const HandleForm = async (e) => {
    e.preventDefault();
    console.log(data);
    const response = await InsertUser(data);
    if (response.status === 200) {
      alert("Account Created");
      window.location.reload();
    } else {
      alert("something is wrong");
    }
  };

  return (
    <>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form action="" onSubmit={HandleForm}>
              <h2>Register</h2>
              <div className="inputbox">
                <ion-icon name="person-outline"></ion-icon>
                <input
                  type="text"
                  placeholder="Name"
                  className="white"
                  onChange={(e) => {
                    setData({ ...data, name: e.target.value });
                  }}
                />
              </div>
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
                  onChange={(e) => {
                    setData({ ...data, password: e.target.value });
                  }}
                />
              </div>
              <input type="submit" className="submit-btn" value="Register" />
            </form>
            <div className="login">
              <p>
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterUser;
