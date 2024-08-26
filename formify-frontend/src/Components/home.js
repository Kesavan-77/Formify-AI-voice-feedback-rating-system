import React from "react";
import MainImage from "../Assets/Frame 7 (1).png";
import C1 from "../Assets/Rectangle 1042.png";
import C2 from "../Assets/Rectangle 1043.png";
import C3 from "../Assets/Rectangle 1044.png";
import C4 from "../Assets/Rectangle 1045.png";
import C5 from "../Assets/Rectangle 1046.png";
import C6 from "../Assets/Rectangle 1047.png";
import C7 from "../Assets/Rectangle 1048.png";
import Usecase from "./useCases";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 d-flex flex-column gap-3 mb-3">
          <h4 className="fs-4">
            Transform Your Forms with AI Voice Assistance
          </h4>
          <h1 className="fs-1 fw-bold">
            Hands-Free Form Filling with{" "}
            <span className="text-primary">AI Voice Technology</span>
          </h1>
          <p className="fs-6">
            Ready to experience the future of form filling? Try AI voice form
            filling today and revolutionize the way you interact with digital
            forms. Whether you're a business looking to improve efficiency or an
            individual tired of manual data entry, AI voice technology is here
            to transform your experience.
          </p>
          <button
            type="button"
            class="btn btn-primary btn-lg"
            style={{ width: "50%" }}
          >
            <Link
              to="/feedback1"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Try Demo Form
            </Link>
          </button>
        </div>
        <div className="col-6">
          <img src={MainImage} alt="MainImage" />
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col">
          <img src={C1} alt="company"></img>
        </div>
        <div className="col">
          <img src={C2} alt="company"></img>
        </div>
        <div className="col">
          <img src={C3} alt="company"></img>
        </div>
        <div className="col">
          <img src={C4} alt="company"></img>
        </div>
        <div className="col">
          <img src={C5} alt="company"></img>
        </div>
        <div className="col">
          <img src={C6} alt="company"></img>
        </div>
        <div className="col">
          <img src={C7} alt="company"></img>
        </div>
      </div>
      <br />
      <br />
      <Usecase />
    </div>
  );
}
