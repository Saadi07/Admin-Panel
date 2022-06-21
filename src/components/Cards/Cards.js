import React from "react";

const Cards = () => {
  return (
    <div className="flex flex-col">
      <div className=" flex justify-evenly space-x-8 p-6">
        <div className="outline-none appearance-none w-60 border-2 rounded-xl bg-white hover:outline-blue-300 hover:border-0">
          <card href="#" className="flex flex-col p-4 space-y-2 ">
            <span className="text-2xl font-semibold text-gray-600 ">3,503</span>
            <span className="text-gray-400 font-medium ">Daily Signups</span>
          </card>
        </div>
      </div>
    </div>
  );
};

export default Cards;
