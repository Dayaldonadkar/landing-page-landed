import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="w-4/6 flex justify-between items-center py-5">
        <div className="flex justify-between text-[#505F98] space-x-5">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Contact</h1>
        </div>

        <h1 className="text-[#37447E] text-2xl font-semibold">Landie</h1>

        <button className="py-2 px-12 bg-[#111B47] text-white text-lg leading-4 rounded-md">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
