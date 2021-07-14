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
      <hr />
      <Search setSearch={setSearch} />
      <Select setSelectedEp={setSelectedEp} />
      <Episodes search={search} selectedEp={selectedEp}  />
    </div>
  );
}

export default App;

