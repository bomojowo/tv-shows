import episodes from '../episodes.json'
import {Card, Button} from "react-bootstrap"
import './Episodes.css'

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

function Episodes(): JSX.Element{
    
    return(
        <div>
            <h1>TV Shows</h1>
            <div className="card-container" >
                {episodes.map((episode: IEpisode) =>(
                    <div key={episode.id}>
                        <Card className="card" style={{ width: '20rem' }}>
                        <Card.Title className="card-title"><b>{episode.name} - {String(episode.season).padStart(2, '0')} E0{String(episode.number).padStart(1, '0')}</b></Card.Title>
                            <Card.Img className="card-img-top" variant="top" src={episode.image.medium} alt="scene from episode" />
                            <Card.Body className="card-block">
                               
                                <Card.Text>
                                {episode.summary}
                                </Card.Text>
                                <Button variant="primary">TMZase</Button>
                            </Card.Body>
                    </Card>
                    </div>
                ))}
            </div>
            <hr />
            <p>This data has been obtained from <a href="https:WWW.TVMaze.com">TVMaze</a></p>
        </div>
    )
}

export default Episodes