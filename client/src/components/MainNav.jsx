import {Link, Router} from "@reach/router";
import React, {useState} from 'react'



const MainNav = props => {

const [project, setProject] = useState(true)
const [about, setAbout] = useState(false)


    return (
        <div className="mainNav-container">        
            <nav> 
                <Link to="/"
                onClick={ ()=> setProject(!project)}
                style={{ 
                    background: project ? "#0080BF" : "whitesmoke", 
                    color: about ? "black" : "white", 
                    boxShadow:  about ? "none" : "0 0 5px  rgba(0, 0, 0, 0.508)"}}
                onClick={ ()=> {setAbout(!about); setProject(!project)}}>Projects</Link>


                <Link 
                to="/about-me"
                style={{ 
                    background: about ? "#0080BF" : "whitesmoke",
                    color: about ? "white" : "black",
                    boxShadow:  about ? "0 0 5px  rgba(0, 0, 0, 0.508)" : "none"  }}
      
                onClick={ ()=> {setAbout(!about); setProject(!project)}}>About me</Link>
            </nav>
            
            
        </div>
    )
}


export default MainNav
