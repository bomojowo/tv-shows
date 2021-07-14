import episodes from '../episodes.json'

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

  interface filteredListProps {
    search: string;
  }

function filteredList({search}: filteredListProps): any {
    
     //filteredList function
    const filterEpisode = episodes.filter((episode: IEpisode) => {
    const emptyString = "";
    const searchIncludedInSummary = episode.summary
      .toLowerCase()
      .includes(search.toLowerCase());

    const searchIncludedInName = episode.name
      .toLowerCase()
      .includes(search.toLowerCase());

    if (emptyString || searchIncludedInSummary || searchIncludedInName) {
      return true;
    } else {
      return false;
    }
  });
}

export default filteredList;