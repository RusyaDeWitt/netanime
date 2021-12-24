import { Routes , Route , BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Home from './Home/Home.js';
import Navigation from './Navigation/Navigation';
import AnimePage from './AnimePage/AnimePage';

function App() {
  return (
    <div className="App">
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AnimePage" element={<AnimePage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
