import episodes from "../episodes.json"




function Select(): JSX.Element{

    return(
        <div>
          <select>
            
            {episodes.map((title) =>
            
            <option value={title.name} key={title.id}>{title.name}</option>
            )}
          </select>
        </div>
    )
}

export default Select;

