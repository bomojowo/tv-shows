import episodes from "../episodes.json"
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";



function Select(): JSX.Element{
    return(
        <div>
            <DropdownButton
                className="drop-down-list"
                id="dropdown-basic-button"
                title="Select"
      >
        {episodes.map((title) => (
          <div key={title.id}>
            <Dropdown.Item href="#/action-1">
              <div key={title.id}>
                <li>{title.name}</li>
              </div>
            </Dropdown.Item>
          </div>
        ))}
            </DropdownButton>

        </div>
    )
}

export default Select;