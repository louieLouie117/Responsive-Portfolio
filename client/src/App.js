import './App.css';


import Projects from './views/Projects';
import React, {useState} from 'react'
import {Router} from "@reach/router";
import MainNav from './components/MainNav';
import AboutMe from './views/AboutMe';
import CodeChallenges from './views/CodeChallenges';
import Dashboard from './views/Dashboard';
import UpdateProject from './components/UpdateProject';
import Registration from './components/Registration';
import SignIn from './components/SignIn';





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

        <div className="aboutMePage-container"
        style={{ 
          marginLeft: aboutMePage ? "0" : "-800%",
          zIndex: aboutMePage ? "3" : "-1",
          transitionTimingFunction: "ease",
          transition: "smooth",
          transition: ".3s"


      
      }}
        className="homePage-container"
        >

          <AboutMe></AboutMe>
        </div>


  
      <div className="mainNav-container">    
            <nav> 
            <div className="tabIcon"
             style={{ 
              color: homePage ? "white" : "black",
              boxShadow:  homePage ? "0 0 5px  rgba(0, 0, 0, 0.508)" : "none",
              marginLeft: homePage ? "0" : "205%",
              transition: ".3s"

          }}></div>

                <a 
                style={{ 
                  color: homePage ? "white" : "black",
                  transition: ".3s"
    
              }}
                id="projectsTab"
                onClick={mainNavHandler}
                
               
                >Projects</a>


                <a 
                style={{ 
                  color: homePage ? "black" : "white",
                  transition: ".5s"
    
              }}
                id="aboutMeTab"
                onClick={mainNavHandler}
    
                >About me</a>
            </nav>
            
            
        </div>
        <div  className="homePage-container">
          <Router>
            <Projects path="/"/>
            <Dashboard path="/dashboard"/>
            <Registration path="/reg"/>
            <SignIn path="/signin"/>
            {/* <UpdateProject path="/update/:id/edit"/> */}
          </Router>

        

        </div>


    </div>
  );
}

export default App;

