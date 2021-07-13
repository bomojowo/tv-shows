//import { greet } from "./utils/greet";
// import episodes from './episodes.json'
import Header from "./components/Header";
import Episodes from "./components/Episodes";
import Search from "./components/Search";
import Select from "./components/Select";
import { useState } from "react";

function App(): JSX.Element {
  const [search, setSearch] = useState<string>("");
  const [selectedEp, setSelectedEp] = useState("");

  return (
    <div>
      <Header />
      <h1>TV Shows</h1>

      <Search setSearch={setSearch} />
      <Select setSelectedEp={setSelectedEp} />
      <Episodes search={search} selectedEp={selectedEp} />
    </div>
  );
}

export default App;

// console.log(`Imported ${episodes.length} episode(s)`);
// console.log(`First episode's name is ${episodes[0].name}`);
