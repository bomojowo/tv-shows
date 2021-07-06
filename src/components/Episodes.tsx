import episodes from '../episodes.json'
import './Episodes.css'
// interface IEpisode {
//     id: number;
//     url: string;
//     name: string;
//     season: number;
//     number: number;
//     type: string;
//     airdate: string;
//     airtime: string;
//     airstamp: string;
//     runtime: number;
//     image: {
//       medium: string;
//       original: string;
//     };
//     summary: string;
//     _links: { self: { href: string } };
//   }

function Episodes(): JSX.Element{
    
    return(
        <div>
            <div>
                {episodes.map((episode) =>(
                    <div className="card-holder" key={episode.id}>
                    <p><b>{episode.name} - {String(episode.season).padStart(2, '0')} E0{String(episode.number).padStart(1, '0')}</b></p>
                    <img src={episode.image.medium} alt="scene from episode" />
                    <p>{episode.summary}</p>
                    </div>
                ))}
            </div>
            <hr />
            <p>This data has been obtained from <a href="https:WWW.TVMaze.com">TVMaze</a></p>
        </div>
    )
}

export default Episodes