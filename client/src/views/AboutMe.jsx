import React from 'react'
import modules from "../modules/AboutMe.modules.css"


const AboutMe = props => {




    
    return (
        <div className="aboutMe-container">
            <header>
                <h1>Hello, my name is Luis Cardona</h1>
                <img src="/img/selffy.png" alt=""/>
                <aside>
                    <div className="socialIcon-container">
                        <img src="/img/Icons/IconFacebook.png" alt=""/>
                        <p>Personal Story</p>
                    </div>

                    <div className="socialIcon-container">
                        <img src="/img/Icons/IconTikTok.png" alt=""/>
                        <p>Just for fun</p>
                    </div>
                    <div className="socialIcon-container">

                    <img src="/img/Icons/IconInstagram.png" alt=""/>

                    <p>Design Art work</p>
                    </div>
                    <div className="socialIcon-container">

                    <img src="/img/Icons/IconGithub.png" alt=""/>

                    <p>Code Repository</p>
                    </div>
                    <div className="socialIcon-container">

                    <img src="/img/Icons/IconLinkedin.png" alt=""/>
                    <p>Programming Story</p>
                    </div>
                </aside>
            </header>
            
        </div>
    )
}



export default AboutMe
