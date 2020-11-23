import React from 'react'
import {Link} from "@reach/router";


const MainNav = props => {
    return (
        <div className="mainNav-container">        
            <nav >
                <Link to="/">Projects</Link>
                <Link to="/about-me">About me</Link>
            </nav>
            
        </div>
    )
}


export default MainNav
