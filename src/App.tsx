import Accordion from "./components/Accordion";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/StarRating";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="wrapper">
        <h1 className="main-title">25 React Projects</h1>
      </div>
      <div className="wrapper">
        <Accordion style={{ maxWidth: "500px", marginInline: "auto" }} />
      </div>
      <RandomColor />
      <div className="wrapper">
        <StarRating numberOfStars={10} />
      </div>
    </main>
  );
};

export default App;
