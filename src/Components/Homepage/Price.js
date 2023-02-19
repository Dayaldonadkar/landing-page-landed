import React from "react";

const Price = () => {
  return (
    <div className="flex flex-col items-center text-center bg-[#FFFBF5] space-y-14 pt-60 pb-44 px-3">
      <div className="space-y-4">
        <h1 className="text-[#091133] text-4xl font-medium">
          A Price to suit Everyone
        </h1>
        <div className="text-[#6F7CB2]">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula
          </p>
          <p>
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient
          </p>
          <p>montes, nascetur ridiculus</p>
        </div>
      </div>
      <div className="space-y-20">
        <div className="text-[#222F65] space-y-3">
          <p className="text-5xl ">$40</p>
          <p>UI Design Kit</p>
        </div>

        <div className="space-y-2">
          <h1 className="text-sm text-[#5D6970]">See, One price. Simple</h1>
          <button className="text-white bg-[#111B47] rounded-md px-10 py-2">
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
