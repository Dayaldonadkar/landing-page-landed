import React from "react";

const Introduction = () => {
  return (
    <div className="flex justify-center pt-20 pb-96">
      <div className="lg:w-4/6 px-9">
        <div className="space-y-10 relative">
          <h1 className="lg:text-5xl text-3xl font-medium text-[#091133] items-center ">
            <p>Introduce Your Product</p>
            <p>Quickly & Effectively</p>
          </h1>

          <p className=" text-base text-[#505F98] w-1/2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>

          <div className="flex lg:gap-20 gap-10 text-base">
            <button className="bg-[#111B47] text-white lg:px-9 px-5 py-1 rounded-md">
              Purchase UI Kit
            </button>
            <button className="text-[#091133] lg:px-9 px-5 py-1 border-2 border-[#091133] rounded-md">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute right-0 lg:top-0 top-36 object-scale-down">
          <img className="lg:w-[100%] w-96 top-10" src="./PathBackground.png" />
          <img
            className="absolute right-0 bottom-10 lg:w-[60%] w-48"
            src="GroupStandingMan.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
