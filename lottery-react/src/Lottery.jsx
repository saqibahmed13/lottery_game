import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper.js";
import Ticket from "./Ticket.jsx";

export default function Lottery({ n = 3, winCondition }) {
  const [ticket, setticket] = useState(genTicket(n));
  console.log("me", ticket);
  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setticket(genTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game!</h1>
      <div className="ticket">
        {
          <Ticket
            ticket={ticket}
          /> /* ticket k ander props rehti na wo   pass karna hame */
        }
      </div>
      <br />
      <button onClick={buyTicket}>Buy Ticket</button>
      <h3>{isWinning && "Congratulations you won"}</h3>
    </div>
  );
}
