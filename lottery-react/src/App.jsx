import Lottery from "./Lottery.jsx";

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };

  return (
    <>
      <div>
        <Lottery n={4} winningSum={15} />
      </div>
    </>
  );
}

export default App;
