import { greet } from "./utils/greet";
// import episodes from './episodes.json'
import Episodes from "./components/Episodes";

function App(): JSX.Element {
  return (
    <div>
      <h1>{greet("World")}</h1>
      <Episodes />
    </div>
  );
}

export default App;

// console.log(`Imported ${episodes.length} episode(s)`);
// console.log(`First episode's name is ${episodes[0].name}`);
