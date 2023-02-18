import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="flex justify-center pt-16 bg-[#E7ECFF]">
      <div className="w-4/6">
        <div className="flex justify-between  border-b border-gray-500 pb-10 items-center ">
          <p className="text-sm text-[#939EA4] flex items-center">
            @2022 Landie
          </p>
          <h1 className="text-2xl font-extrabold text-[#37447E]">Landie</h1>
          <button className="px-5 py-1 text-white text-lg bg-[#111B47] rounded-md">
            Purchase Now
          </button>
        </div>

        <div className="flex justify-between py-7 text-[#929ECC]">
          <div className="flex space-x-6">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </div>

          <div className="space-x-5">
            <FacebookIcon fontSize="small" />
            <LinkedInIcon fontSize="small" />
            <TwitterIcon fontSize="small" />
            <YouTubeIcon fontSize="small" />
            <InstagramIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
