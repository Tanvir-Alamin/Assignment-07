import React, { use, useState } from "react";
import Banner from "./Banner";
import AllTicket from "./AllTicket";
import ProgressList from "./ProgressList";
import Solved from "./Solved";
import Footer from "./Footer";

const CustomerTicket = ({ allData }) => {
  const TicketData = use(allData);
  const [allTicket, setAllTicket] = useState(TicketData);
  const [allProgress, setAllProgress] = useState([]);
  const [allSolve, setAllSolve] = useState([]);
  const handleProgress = (Problems) => {
    const progress = [...allProgress, Problems];
    setAllProgress(progress);
  };
  const handleComplete = (Problems) => {
    const solve = [...allSolve, Problems];
    setAllSolve(solve);
    // removing from progress
    const removeFromProgress = allProgress.filter(
      (task) => task.id !== Problems.id
    );
    setAllProgress(removeFromProgress);

    // removing from customerTicket
    const removeFromTicket = allTicket.filter(
      (item) => item.id !== Problems.id
    );
    setAllTicket(removeFromTicket);
  };
  return (
    <div>
      <Banner solution={allSolve.length} pro={allProgress.length}></Banner>
      <div className="flex md:items-start items-center flex-col md:flex-row">
        {/* Sending All Ticket */}
        <div className=" px-10 ">
          <h1 className="text-2xl font-semibold pt-5 mt-10 px-2 w-full md:w-189 mb-5 pb-5 rounded bg-white shadow shadow-gray-500">
            Customer Tickets
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 justify-evenly">
            {allTicket.map((Problems) => (
              <AllTicket
                handleProgress={handleProgress}
                key={Problems.id}
                Problems={Problems}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          {/* all Progress */}
          <div className=" px-10 pb-5 mt-10 rounded bg-white shadow shadow-gray-500">
            <h1 className="text-2xl font-semibold pt-5 pb-5">Task Status</h1>
            <p className="text-gray-500 font-semibold">
              {allProgress.length == 0
                ? "Select a ticket to add to Task Status"
                : ""}
            </p>
            <div className=" gap-5 ">
              {allProgress.map((Problems) => (
                <ProgressList
                  handleComplete={handleComplete}
                  key={Problems.id}
                  Problems={Problems}
                ></ProgressList>
              ))}
            </div>
          </div>
          {/* Resolve Task */}
          <div className=" px-10 mt-10 pb-5 rounded bg-white shadow shadow-gray-500">
            <h1 className="text-2xl font-semibold pt-5 pb-5">Resolved Task</h1>
            <p className="text-gray-500 font-semibold">
              {allSolve.length == 0 ? "No resolved tasks yet." : ""}
            </p>
            <div className=" gap-5 ">
              {allSolve.map((Problems) => (
                <Solved key={Problems.id} Problems={Problems}></Solved>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CustomerTicket;
