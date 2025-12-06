import { Suspense } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";

import Navbar from "./Component/Navbar";
import CustomerTicket from "./Component/CustomerTicket";

const TicketJson = async () => {
  const res = await fetch("/Ticket.json");
  return res.json();
};
function App() {
  const allData = TicketJson();

  return (
    <div>
      <Navbar></Navbar>

      <Suspense fallback={<p>Loading Data ⌛</p>}>
        <CustomerTicket allData={allData}></CustomerTicket>
      </Suspense>
      <ToastContainer />
    </div>
  );
}

export default App;
