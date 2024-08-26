import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfPasswordChange = (e) => {
    setConfrimPassword(e.target.value);
  };
  const handleSignup = (e) => {
    if (password !== confrimPassword) {
      alert("Password mismatched");
    } else {
      const storeEmail = localStorage.getItem("email");
      console.log(storeEmail);
      console.log(JSON.stringify(email));
      if (storeEmail === JSON.stringify(email)) {
        alert("This email is already registered. Please try to login.");
      } else {
        alert("Your account was created successfully");
        navigate("/", { state: { email, password } });
      }
      if (localStorage.getItem("email") === email) {
        alert("This email is already registered. Please try to login.");
      } else {
        alert("Your account was created successfully");
        navigate("/", { state: { email, password } });
      }
    }
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(name));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
  };
  return (
    <div class="container">
      <div class="row px-3">
        <div class="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
          <div class="img-left d-none d-md-flex"></div>

          <div class="card-body">
            <h4 class="title text-center mt-4">Register now</h4>
            <form class="form-box px-3" onSubmit={handleSignup}>
              <div class="form-input">
                <span>
                  <i class="fa fa-envelope-o"></i>
                </span>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => handleNameChange(e)}
                  placeholder="Enter name"
                  tabindex="10"
                  required
                />
              </div>
              <div class="form-input">
                <span>
                  <i class="fa fa-envelope-o"></i>
                </span>
                <input
                  type="email"
                  name=""
                  onChange={(e) => handleEmailChange(e)}
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
                  onChange={(e) => handlePasswordChange(e)}
                  placeholder="Password"
                  required
                />
              </div>
              <div class="form-input">
                <span>
                  <i class="fa fa-key"></i>
                </span>
                <input
                  type="confirmpassword"
                  name=""
                  onChange={(e) => handleConfPasswordChange(e)}
                  placeholder="Confirm Password"
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
                Already have an account?
                <a href="#" class="register-link">
                  Formify-02 Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
