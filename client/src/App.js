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
const [aboutMePage, setAboutMePage] = useState(false)


const mainNavHandler =(e) =>{
  console.log("button was click");
  setHomePage(!homePage)
  setAboutMePage(!aboutMePage)
}




  return (
    <div className="App">
      

        <div 

          className="homePage-container">
          <Projects path="/"/>
        </div>


        <div className="aboutMePage-container"
        style={{ 
          marginLeft: aboutMePage ? "0" : "-200%",
          zIndex: aboutMePage ? "10" : "-1",
          transition: "1s"

      
      }}
        className="homePage-container"
        >

          <AboutMe></AboutMe>
        </div>


        
      <Router>
        {/* <AboutMe path="/about-me"/> */}
        {/* <CodeChallenges path="/code-challenges"/> */}
        {/* <Dashboard path="/dashboard"/> */}
        <UpdateProject path="/update/:id/edit"/>
      </Router>

      <div className="mainNav-container">        
            <nav> 
                <a 
                onClick={mainNavHandler}
                style={{ 
                    background: homePage ? "#A279A4" : "none", 
                    color: homePage ? "white" : "black",
                    height: homePage ? "90%" : "0",
                    boxShadow:  homePage ? "0 0 5px  rgba(0, 0, 0, 0.508)" : "none",
                    transition: ".3s"

                }}
                >Projects</a>


                <a 
                onClick={mainNavHandler}
                style={{ 
                    background: aboutMePage ? "#A279A4" : "none",
                    color: aboutMePage ? "white" : "black",
                    height: aboutMePage ? "90%" : "0",
                    boxShadow:  aboutMePage ? "0 0 5px  rgba(0, 0, 0, 0.508)" : "none",
                    transition: ".3s"

                  }}
      
                >About me</a>
            </nav>
            
            
        </div>



    </div>
  );
}

export default App;

