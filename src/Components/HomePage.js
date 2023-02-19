import React from "react";
import Introduction from "./Homepage/Introduction";
import Light from "./Homepage/Light";
import Light2 from "./Homepage/Light2";
import Navbar from "./Homepage/Navbar";
import Price from "./Homepage/Price";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Light />
      <div className="space-y-20 pt-32 py-48">
        <Light2 img={"./Pretty.png"} />
        <Light2 img={"./GirlBoy.png"} />
        <Light2 img={"./Standgirl.png"} />
      </div>
      <Price />
    </div>
  );
};

export default HomePage;
