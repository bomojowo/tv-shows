//import episodes from "../episodes.json";
//import filteredList from "../utils/FilteredList";
import "./Episodes.css";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

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

interface EpisodesProps {
  search: string;
  selectedEp: string;
}

// when an option is selected
//only that episode will be displayed
//else if keyword is searched
//eps containing that keyword is displayed
//else eveything is displayed

function Episodes({ search, selectedEp }: EpisodesProps): JSX.Element {
  const [fetchedEps, setFetchedEpisodes] = useState<IEpisode[]>([]);

  //filteredList function
  const filteredList = fetchedEps.filter((episode: IEpisode) => {
    const emptyString = "";
    const searchIncludedInSummary = episode.summary
      .toLowerCase()
      .includes(search.toLowerCase());

    const searchIncludedInName = episode.name
      .toLowerCase()
      .includes(search.toLowerCase());

    if (selectedEp) {
      if (selectedEp === episode.name) {
        return true;
      } else {
        return false;
      }
    }

    if (emptyString || searchIncludedInSummary || searchIncludedInName) {
      return true;
    } else {
      return false;
    }
  });


  const getEps = async () => {
    const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
    const data = await response.json();
    setFetchedEpisodes(data);
  };

  useEffect(() => {
    getEps();
  });

  return (
    <div>
      <p className="episode-count">
        Displaying: {filteredList.length}/73 episodes
      </p>
      
      <div className="card-container">
        {filteredList && (
          <>
            {filteredList.map((filteredEpisode: IEpisode) => (
              <div key={filteredEpisode.id}>
                <Card
                  className="card"
                  style={{ width: "20rem", height: "35em" }}
                >
                <Card className="card">

                  <Card.Title className="card-title">
                    <b>
                      {filteredEpisode.name} - S
                      {String(filteredEpisode.season).padStart(2, "0")} E
                      {String(filteredEpisode.number).padStart(2, "0")}
                    </b>
                  </Card.Title>
                  <Card.Img
                    className="card-img-top"
                    variant="top"
                    src={filteredEpisode.image.medium}
                    alt="scene from episode"
                  />
                  <Card.Body className="card-block">
                    <Card.Text>{filteredEpisode.summary}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </>
        )}
      </div>
      <hr />
      <p>
        This data has been obtained from:
        <a href="https:WWW.TVMaze.com"> TVMaze</a>
      </p>
    </div>
  );
}

export default Episodes;
