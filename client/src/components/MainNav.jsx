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
                style={{ borderBottom: project ? " solid 9px #0080BF" : "none" }}
                onClick={ ()=> {setAbout(!about); setProject(!project)}}>Projects</Link>


                <Link 
                to="/about-me"
                style={{ borderBottom: about ? " solid 9px #0080BF" : "none" }}
                onClick={ ()=> {setAbout(!about); setProject(!project)}}>About me</Link>
            </nav>
            
            
        </div>
    )
}


export default MainNav
