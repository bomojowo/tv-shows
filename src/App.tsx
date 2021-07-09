//import { greet } from "./utils/greet";
// import episodes from './episodes.json'
import Episodes from "./components/Episodes";
import Search from "./components/Search";
import { useState } from "react";

function App(): JSX.Element {
  const [search, setSearch] = useState<string>("");

  return (
    <div>
      {/* <h1>{greet("World")}</h1> */}
      <Search setSearch={setSearch} />
      <Episodes search={search} />
    </div>
  );
}

export default App;

// console.log(`Imported ${episodes.length} episode(s)`);
// console.log(`First episode's name is ${episodes[0].name}`);
