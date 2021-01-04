import './App.css';


import Projects from './views/Projects';
import {Router} from "@reach/router";
import MainNav from './components/MainNav';
import AboutMe from './views/AboutMe';
import CodeChallenges from './views/CodeChallenges';
import Dashboard from './views/Dashboard';
import UpdateProject from './components/UpdateProject';





function App() {

  return (
    <div className="App">
      


        <div className="homePage">
        <Projects path="/"/>
        </div>

        
      <Router>
        <AboutMe path="/about-me"/>
        <CodeChallenges path="/code-challenges"/>
        <Dashboard path="/dashboard"/>
        <UpdateProject path="/update/:id/edit"/>
      </Router>

  



    </div>
  );
}

export default App;

