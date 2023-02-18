import React from "react";

const Introduction = () => {
  return (
    <div className="flex justify-center">
      <div className="w-4/6">
        <div className="space-y-10">
          <h1 className="text-5xl font-medium text-[#091133] ">
            <p>Introduce Your Product</p>
            <p>Quickly & Effectively</p>
          </h1>

          <p className=" text-base text-[#505F98] w-1/2 ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>

          <div className="flex gap-5 text-base">
            <button className="bg-[#111B47] text-white px-9 py-1 rounded-md">
              Purchase UI Kit
            </button>
            <button className="text-[#091133] px-9 py-1 border-2 border-[#091133] rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
