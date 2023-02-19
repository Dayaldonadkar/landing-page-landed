import React from "react";

const Light2 = (props) => {
  return (
    <div className="flex justify-center">
      <div className="lg:w-4/6 w-auto flex justify-center items-center px-10">
        <div className="space-y-24 flex flex-col lg:flex-row justify-between items-center ">
          <div className="">
            <img src={props.img} />
          </div>
          <div className="space-y-10 lg:w-1/2">
            <h1 className="font-medium text-4xl text-[#091133]">
              Light,Fast & Powerful
            </h1>

            <p className="text-[#6F7CB2] text-base">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Light2;
