import "./App.css";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import PrevEvents from "./components/prevEvents/PrevEvents";

function App() {
  return (
    <div className="App">
      <Home />
      <PrevEvents title="Previous events" />
      <Contact />
    </div>
  );
}

export default App;
