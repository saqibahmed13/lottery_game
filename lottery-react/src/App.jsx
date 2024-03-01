import Lottery from "./Lottery.jsx";
import { sum } from "./helper.js";

function App() {
  let winConditionsKuchBhi = (ticket) => {
    return sum(ticket) === 15;
  };

  return (
    <>
      <div>
        <Lottery n={3} winCondition={winConditionsKuchBhi} />
      </div>
    </>
  );
}

export default App;
