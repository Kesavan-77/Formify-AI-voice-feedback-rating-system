import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/login.css";

export default function Login() {
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const changeEmail = (event) => {
    setMyEmail(event.target.value);
  };

  const changePassword = (event) => {
    setMyPassword(event.target.value);
  };

  const handleLogin = (event) => {
    if (state.email === myEmail && state.password === myPassword) {
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
    event.preventDefault();
  };

  return (
    <div class="container">
      <div class="row px-3">
        <div class="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
          <div class="img-left d-none d-md-flex"></div>

          <div class="card-body">
            <h4 class="title text-center mt-4">Login into account</h4>
            <form class="form-box px-3" onSubmit={handleLogin}>
              <div class="form-input">
                <span>
                  <i class="fa fa-envelope-o"></i>
                </span>
                <input
                  type="email"
                  name=""
                  onChange={changeEmail}
                  placeholder="Email Address"
                  tabindex="10"
                  required
                />
              </div>
              <div class="form-input">
                <span>
                  <i class="fa fa-key"></i>
                </span>
                <input
                  type="password"
                  name=""
                  onChange={changePassword}
                  placeholder="Password"
                  required
                />
              </div>
              <div class="mb-3">
                <button type="submit" class="btn btn-block text-uppercase">
                  Login
                </button>
              </div>
              <hr class="my-4" />
              <div class="text-center mb-2">
                Don't have an account?
                <a href="#" class="register-link">
                  Register here
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
