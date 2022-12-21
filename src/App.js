import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Home from "./Home/Home";
import Navigation from "./Navigation/Navigation";
import AnimePage from "./AnimePage/AnimePage";
import Genres from "./Genres";
import Search from "./Search";
import Movies from "./Movies/Movies";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AnimePage/:name" element={<AnimePage />} />
          <Route path="/Genres" element={<Genres />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Movies" element={<Movies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
