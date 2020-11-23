import './App.css';
import Projects from './views/Projects';

import {Router} from "@reach/router";
import MainNav from './components/MainNav';
import AboutMe from './views/AboutMe';






function App() {
  return (
    <div className="App">
      

      <Router>
        <Projects path="/"/>
        <AboutMe path="/about-me"/>
      </Router>
      <MainNav/>





    </div>
  );
}

export default App;

