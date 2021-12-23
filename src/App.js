import { Routes , Route , BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Home from './Home/Home.js';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <div className="App">
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
