import TicketNum from "./TicketNum.jsx";

export default function Ticket({ ticket }) {
  // props pass karrin so
  return (
    <div>
      {ticket.map((num, idx) => {
        return <TicketNum num={num} key={idx} />;
      })}
    </div>
  );
}
