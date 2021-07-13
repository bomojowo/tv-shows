
import episodes from "../episodes.json";
import "./Select.css"


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
}

function Select({setSelectedEp}: SelectedProps): JSX.Element {
  function handleEpisodeSelectorChange(event: any): void{
    // setSelectedEp(selectedEp )
        console.log('working')
        //console.log(event.target.value)
        setSelectedEp(event.target.value)
    
    }
  return (
    <div>
      <select className="select-bar" onChange={(handleEpisodeSelectorChange)}
      >
        <option value="">Select an Episode</option>
        {episodes.map((episode: IEpisode) => (
          
          <option value={episode.name} key={episode.id}>
            {episode.name} ({episode.id})
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
