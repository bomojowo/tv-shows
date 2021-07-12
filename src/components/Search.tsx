import "./Search.css";

interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function Search({ setSearch }: SearchProps): JSX.Element {
  return (
    <div>
      <input
        className="searchBar"
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
