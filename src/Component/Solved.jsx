import React from "react";

const Solved = ({ Problems }) => {
  return (
    <div>
      <div className="card w-80 bg-blue-200 ring-3 ring-gray-200 shadow-md mb-4">
        <div className="card-body">
          <h2 className="text-xl font-bold">{Problems.title}</h2>
          <p className="font-semibold">Completed ✔️</p>
        </div>
      </div>
    </div>
  );
};

export default Solved;
