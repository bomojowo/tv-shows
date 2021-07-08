import episodes from "../episodes.json";
import "./Episodes.css";
import { Card } from "react-bootstrap";
import { useState } from "react";

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

function Episodes(): JSX.Element {
  const [search, setSearch] = useState("");
  return (
    <div>
      <h1>TV Shows</h1>
      <input
        className="searchBar"
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <div className="card-container">
        {episodes
          .filter((filteredEp: IEpisode) => {
            if (search === "") {
              return true;
            } else if (
              filteredEp.summary.toLocaleLowerCase().includes(search) ||
              filteredEp.name.toLocaleLowerCase().includes(search)
            ) {
              return true;
            }else {
              return false
            }
          })
          .map((episode: IEpisode) => (
            <div key={episode.id}>
              <Card className="card" style={{ width: "30rem", height: "35em" }}>
                <Card.Title className="card-title">
                  <b>
                    {episode.name} - S{String(episode.season).padStart(2, "0")}{" "}
                    E0
                    {String(episode.number).padStart(1, "0")}
                  </b>
                </Card.Title>
                <Card.Img
                  className="card-img-top"
                  variant="top"
                  src={episode.image.medium}
                  alt="scene from episode"
                />
                <Card.Body className="card-block">
                  <Card.Text>{episode.summary}</Card.Text>
                  {/* <Button variant="primary">TMZase</Button> */}
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
      <hr />
      <p>
        This data has been obtained from{" "}
        <a href="https:WWW.TVMaze.com">TVMaze</a>
      </p>
    </div>
  );
}

export default Episodes;
