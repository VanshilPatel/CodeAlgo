import React from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import Navbar from "./Navbar";
import "../Styles/Submissions.css";


const Submissions = () => {

  return (
    <div>
      <Navbar />
      <div className="submission-container">
        <LeftContainer />
        <RightContainer />
      </div>
    </div>
  );
};

export default Submissions;
