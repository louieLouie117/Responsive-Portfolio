import './App.css';


import Projects from './views/Projects';
import React, {useState} from 'react'
import {Router} from "@reach/router";
import MainNav from './components/MainNav';
import AboutMe from './views/AboutMe';
import CodeChallenges from './views/CodeChallenges';
import Dashboard from './views/Dashboard';
import UpdateProject from './components/UpdateProject';





function App() {

const [homePage, setHomePage] = useState(true)

  return (
    <div className="App">
      

        <div 
          style={{ display: homePage ? "gird" : "none"}}
          className="homePage">
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

