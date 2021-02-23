import './App.css';


import Projects from './views/Projects';
import React, {useState} from 'react'
import {Router} from "@reach/router";
import AboutMe from './views/AboutMe';
import Dashboard from './views/Dashboard';
import Registration from './components/Registration';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import MyHeader from './components/MyHeader';





function App() {




  return (
    <div className="App">




<div  className="homePage-container">
          <Router>
            <Projects path="/"/>
            <Dashboard path="/dashboard"/>
            <Registration path="/reg"/>
            <SignIn path="/signin"/>
            {/* <UpdateProject path="/update/:id/edit"/> */}
          </Router>

        

        </div>


        <div>
          <MyHeader></MyHeader>
        </div>

        <div className="aboutMePage-container"
  
        className="homePage-container">

          <AboutMe></AboutMe>
        </div>
    

        

    <Footer></Footer>

    
      

    </div>
  );
}

export default App;

