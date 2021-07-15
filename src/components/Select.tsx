
import "./Select.css";

interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

interface SelectedProps {
  setSelectedEp: React.Dispatch<React.SetStateAction<string>>;
  fetchedEps: IEpisode[];
}

function Select({ setSelectedEp, fetchedEps }: SelectedProps): JSX.Element {
  function handleEpisodeSelectorChange(epName: string) {
    setSelectedEp(epName);
  }
  return (
    <div>
      <select
        className="select-bar"
        onChange={(event) => handleEpisodeSelectorChange(event.target.value)}
      >
        <option value="">Select an Episode</option>
        {fetchedEps.map((episode: IEpisode) => (
          <option value={episode.name} key={episode.id}>
            S{String(episode.season).padStart(2, "0")}E
            {String(episode.number).padStart(2, "0")} - {episode.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
