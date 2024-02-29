import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper.js";

export default function Lottery() {
  const [ticket, setticket] = useState(genTicket(3));
  console.log("me", ticket);
  let isWinning = sum(ticket) === 15;

  let buyTicket = ()=>{
    setticket(genTicket(3));
  }
  return (
    <div>
      <h1>Lottery Game!</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <button onClick={buyTicket}>Buy Ticket</button>
      <h3>{isWinning && "Congratulations you won"}</h3>
    </div>
  );
}
