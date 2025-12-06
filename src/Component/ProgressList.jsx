import React, { useState } from "react";
import { toast } from "react-toastify";

const ProgressList = ({ Problems, handleComplete }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(true);
    toast.success(`Completed!`, {
      autoClose: 1500,
      theme: "colored",
    });
  };
  return (
    <div>
      <div className="card w-80 bg-base-100 ring-3 ring-gray-200 shadow-md mb-4">
        <div className="card-body">
          <h2 className="text-xl font-bold">{Problems.title}</h2>

          <div className="mt-6">
            <button
              onClick={
                !toggle
                  ? () => {
                      handleClick();
                      handleComplete(Problems);
                    }
                  : ""
              }
              className="btn bg-green-600 btn-primary btn-block"
            >
              Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressList;
