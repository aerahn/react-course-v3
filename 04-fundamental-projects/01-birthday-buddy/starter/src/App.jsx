import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <section>
      <h2>Birthday Reminder - Starter</h2>
      <List key={people} />
    </section>
  );
};
export default App;
