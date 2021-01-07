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
   
      
    
        <div  className="homePage-container">
          <Router>
            <Projects path="/"/>
            <Dashboard path="/dashboardPP1234567890"/>
            <UpdateProject path="/update/:id/edit"/>
          </Router>

        </div>


        <div className="aboutMePage-container"
        style={{ 
          marginLeft: aboutMePage ? "0" : "-300%",
          zIndex: aboutMePage ? "2" : "-1",
          transition: "smooth",
          transition: "1s"

      
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
              transition: "1s"

          }}></div>

                <a 
                style={{ 
                  color: homePage ? "white" : "black",
                  transition: "1s"
    
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



    </div>
  );
}

export default App;

