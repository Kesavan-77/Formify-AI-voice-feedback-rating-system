import React from "react";
import UseCase1 from "../Assets/Frame 23.png";
import UseCase2 from "../Assets/Frame 22.png";
import UseCase3 from "../Assets/Frame 21.png";
import UseCase4 from "../Assets/Frame 10.png";
import UseCase5 from "../Assets/Frame 20.png";
import UseCase6 from "../Assets/Frame 19.png";

export default function useCases() {
  return (
    <div className="container">
      <h1 className="fs-1 fw-bold text-center">
        AI Voice Generator for any use case
      </h1>
      <br />
      <div className="fs-5 text-center">
        Discover all kinds of content LOVO can help you create instantly with
        tailored AI Voices.
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col-4">
          <img src={UseCase1} alt="usecase" />
        </div>
        <div className="col-4">
          <img src={UseCase2} alt="usecase" />
        </div>
        <div className="col-4">
          <img src={UseCase3} alt="usecase" />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-4">
          <img src={UseCase4} alt="usecase" />
        </div>
        <div className="col-4">
          <img src={UseCase5} alt="usecase" />
        </div>
        <div className="col-4">
          <img src={UseCase6} alt="usecase" />
        </div>
      </div>
      <br />
    </div>
  );
}
