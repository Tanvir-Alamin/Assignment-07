import React, { useState } from "react";
import calender from "../assets/calender.png";
import { toast } from "react-toastify";

const AllTicket = ({ Problems, handleProgress }) => {
  console.log(Problems);

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(true);
    toast.success(`In-Progress!`, {
      autoClose: 1500,
      theme: "colored",
    });
  };

  return (
    <div>
      <div className="card w-92  bg-base-100 card-lg shadow shadow-gray-500">
        <div
          onClick={
            !toggle
              ? () => {
                  handleClick();
                  handleProgress(Problems);
                }
              : ""
          }
          className="py-5 px-2"
        >
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">{Problems.title}</h2>
            <span
              className={`font-semibold text-amber-50 text-sm rounded-2xl p-1 px-2
               ${toggle ? "bg-yellow-500" : "bg-green-500"}`}
            >
              {toggle ? "↻ In- Progress" : "〇 Open"}
            </span>
          </div>
          <p className="text-gray-500 text-sm py-2"> {Problems.description} </p>
          <div className="flex justify-between pt-3 text-sm text-gray-600">
            <div className="flex gap-1 py-4">
              <span>#00{Problems.id}</span>
              <span
                className={
                  Problems.priority == "Low"
                    ? "text-green-600 font-semibold"
                    : Problems.priority == "Medium"
                    ? "text-yellow-600 font-semibold"
                    : Problems.priority == "High"
                    ? "text-amber-700 font-semibold"
                    : Problems.priority == "Critical"
                    ? "text-red-600 font-semibold"
                    : ""
                }
              >
                {Problems.priority}
              </span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span>{Problems.customer}</span>
              <span className="flex justify-center items-center gap-1">
                <img className="w-4 h-4" src={calender} alt="" />
                {Problems.createdAt}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTicket;
