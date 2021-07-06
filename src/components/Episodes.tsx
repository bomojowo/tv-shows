import episodes from '../episodes.json'
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
            {episodes.map((episode) =>(
                <div  key={episode.id}>
                <p><b>{episode.name} - {String(episode.season).padStart(2, '0')} E0{String(episode.number).padStart(1, '0')}</b></p>
                
                <p>{episode.summary}</p>
                </div>
            ))}
            <hr />
            <p>This data has been obtained from <a href="https:WWW.TVMaze.com">TVMaze</a></p>
            </div>
    )
}

export default Episodes