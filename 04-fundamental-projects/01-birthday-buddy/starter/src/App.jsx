import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  const handleClear = () => {
    setPeople([]);
  };
  return (
    <main>
      <section>
        <h2>Birthday Reminder - Starter</h2>
        <List people={people} />
        <button onClick={handleClear}>Clear Birthdays</button>
      </section>
    </main>
  );
}
export default App;
