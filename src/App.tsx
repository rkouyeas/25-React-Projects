import Accordion from "./components/Accordion";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/StarRating";
import ImageSlider from "./components/ImageSlider";
import LoadMore from "./components/LoadMore";
import TreeView from "./components/TreeView";
import QRCodeGenerator from "./components/QRCodeGenerator";
import DarkMode from "./components/DarkMode";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main-wrapper">
        <h1 className="main-title">25 React Projects</h1>
        <Accordion style={{ maxWidth: "500px", marginInline: "auto" }} />
      </div>
      <RandomColor />
      <div className="main-wrapper">
        <StarRating numberOfStars={10} />
        <ImageSlider url="https://picsum.photos/v2/list" limit={10} />
        <LoadMore url="https://dummyjson.com/products" limit={10} />
      </div>
      <TreeView />
      <div className="main-wrapper">
        <QRCodeGenerator />
      </div>
      <DarkMode />
      <div className="main-wrapper"></div>
    </main>
  );
};

export default App;
