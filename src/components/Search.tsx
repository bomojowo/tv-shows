interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function Search(props: SearchProps): JSX.Element {
  return (
    <div>
      <input
        className="searchBar"
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          props.setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
