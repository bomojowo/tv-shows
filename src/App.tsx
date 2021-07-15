//import { greet } from "./utils/greet";
import Header from "./components/Header";
import Episodes from "./components/Episodes";
import Search from "./components/Search";
import Select from "./components/Select";
import { useState, useEffect } from "react";

function App(): JSX.Element {
  const [search, setSearch] = useState<string>("");
  const [selectedEp, setSelectedEp] = useState("");
  const [fetchedEps, setFetchedEpisodes] = useState<string[]>([]);

  const getEps = async () => {
    const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
    const data = await response.json(); //regex: .replace('<p>','')
    setFetchedEpisodes(data);
  };

  useEffect(() => {
    getEps();
  });

  return (
    <div>
      <Header />
      <hr />
      <Search setSearch={setSearch} />
      <Select setSelectedEp={setSelectedEp} fetchedEps={fetchedEps} />
      <Episodes
        search={search}
        selectedEp={selectedEp}
        fetchedEps={fetchedEps}
      />
    </div>
  );
}

export default App;
