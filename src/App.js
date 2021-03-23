import "./App.css";
import Experts from "./components/Experts";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content__container">
        <div className="content__container__filters">
          <Filters />
        </div>
        <div className="content__container__experts">
          <Experts />
        </div>
      </div>
    </div>
  );
}

export default App;
