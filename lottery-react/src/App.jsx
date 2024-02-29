import { useState } from "react";
import Lottery from "./Lottery.jsx";
import "./App.css";
import Ticket from "./Ticket.jsx";

function App() {
  return (
    <>
      <div>
        {/* <Lottery /> */}
        <Ticket ticket={[0, 1, 2]} />
      </div>
    </>
  );
}

export default App;
