import Articles from "./Components/Articles";
import Pagination from "./Components/Pagination";
import Search from "./Components/Search";


function App() {
  return (
    <div className="App">
      <Search />
      <Pagination />
      <Articles />
    </div>
  );
}

export default App;
