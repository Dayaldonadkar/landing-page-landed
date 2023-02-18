import React from "react";

const Light = () => {
  return (
    <div className="flex justify-center">
      <div className="w-4/6 flex justify-between items-center ">
        <div className="w-1/2 space-y-24">
          <div className="space-y-10">
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

          <div className="flex justify-between gap-x-10">
            <div className="space-y-3">
              <img src="./Title.png" />
              <h1 className="font-medium text-lg">Title goes here</h1>
              <p className="text-[#5D6970] text-xs">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>

            <div className="space-y-3">
              <img src="./Title.png" />
              <h1 className="font-medium text-lg">Title goes here</h1>
              <p className="text-[#5D6970] text-xs">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src="./Girl.png" />
        </div>
      </div>
    </div>
  );
};

export default Light;
