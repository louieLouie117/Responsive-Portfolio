import React, {useState} from 'react'
import modules from "../modules/AboutMe.modules.css"


const AboutMe = props => {

    // state for Icon titles
    const [faceBookTitle, setFaceBookTitle] = useState(false)
    const [tiktokTitle, setTiktokTitle] = useState(false)
    const [instagramTitle, setInstagramTitle] = useState(false)
    const [githubTitle, setGithubTitle] = useState(false)
    const [LinkedInTitle, setLinkedInTitle] = useState(false)
    const [blurImg, setBlurImg] = useState(false)


    const facebookIcon = (e) =>{
        console.log("Icon was click");
        setFaceBookTitle(!faceBookTitle)
    }
    const tiktokIcon = (e) =>{
        console.log("Icon was click");
        setTiktokTitle(!tiktokTitle)
    }
    const instagramIcon = (e) =>{
        console.log("Icon was click");
        setInstagramTitle(!instagramTitle)
    }
    const githubIcon = (e) =>{
        console.log("Icon was click");
        setGithubTitle(!githubTitle)
    }
    const linkedinIcon = (e) =>{
        console.log("Icon was click");
        setLinkedInTitle(!LinkedInTitle)
    }

    const showAllTitles =()=>{
    console.log("div element was click"); 
    setFaceBookTitle(!faceBookTitle)
    setTiktokTitle(!tiktokTitle)
    setInstagramTitle(!instagramTitle)
    setGithubTitle(!githubTitle)
    setLinkedInTitle(!LinkedInTitle)
    setBlurImg(!blurImg)
    


    }


    // state for navigation tabs
    const [myStoryTab, setMyStoryTab] = useState(true)
    const [codingTab, setCodingTab] = useState(false)
    const [projectsTab, setProjectTab] = useState(false)
    const [apprenticeshipTab, setApprenticeshipTab] = useState(false)


    const myStoryHandler=()=>{
        console.log("my story tab was click");
        setMyStoryTab(true)
        setCodingTab(false)
        setProjectTab(false)
        setApprenticeshipTab(false)
    }



    
    const codingTabHandler=()=>{
        console.log("coding tab was click");
        setMyStoryTab(false)
        setCodingTab(true)
        setProjectTab(false)
        setApprenticeshipTab(false)
    }

    
    const projectsTabHandler=()=>{
        console.log("projects tab was click");
        setMyStoryTab(false)
        setCodingTab(false)
        setProjectTab(true)
        setApprenticeshipTab(false)
    }
    
    const apprenticeshipTabHandler=()=>{
        console.log("apprenticeship tab was click");
        setMyStoryTab(false)
        setCodingTab(false)
        setProjectTab(false)
        setApprenticeshipTab(true)
    }


    
    return (
        <div className="aboutMe-container">
            <header>
                <h1>Hello, my name is Luis Cardona</h1>
                <picture 
                style={{ 
                filter: blurImg ? "blur(100px)" : "blur(0px)",
                marginLeft: blurImg ? "-300px" : "0",
                marginBottom: blurImg ? "0px" : "0"

            }} 
                >
                    <source media="(min-width: 600px)" srcSet="/img/selffy.png"/>

                    <source media="(min-width: 420px)" srcSet="/img/surfaceDuoSelfy.png"/>
                    <img 
                     src="/img/selffy.png" alt=""/>

                </picture>
                <aside>
                    <div className="socialIcon-container">
                        <img 
                        onClick={facebookIcon}
                        onMouseEnter={facebookIcon}
                        onMouseLeave={facebookIcon}
                        src="/img/Icons/IconFacebook.png" alt=""/>


                        <p style={{ display: faceBookTitle ? "block" : "none" }} >Personal Story</p>
                    </div>

                    <div className="socialIcon-container">
                        <img 
                        onClick={tiktokIcon}
                        onMouseEnter={tiktokIcon}
                        onMouseLeave={tiktokIcon}
                        src="/img/Icons/IconTikTok.png" alt=""/>
                        <p style={{ display: tiktokTitle ? "block" : "none" }}>Just for fun</p>
                    </div>
                    <div className="socialIcon-container">

                    <img 
                    onClick={instagramIcon}
                    onMouseEnter={instagramIcon}
                    onMouseLeave={instagramIcon}
                    src="/img/Icons/IconInstagram.png" alt=""/>

                    <p style={{ display: instagramTitle ? "block" : "none" }}>Design Art Work</p>
                    
                    </div>
                    <div className="socialIcon-container">

                    <img 
                    onClick={githubIcon}
                    onMouseEnter={githubIcon}
                    onMouseLeave={githubIcon}
                    src="/img/Icons/IconGithub.png" alt=""/>
                    <p style={{ display: githubTitle ? "block" : "none" }}>Code Repository</p>

                    
                    </div>
                    <div className="socialIcon-container">
                    <img
                    onClick={linkedinIcon}
                    onMouseEnter={linkedinIcon}
                    onMouseLeave={linkedinIcon} 
                    src="/img/Icons/IconLinkedin.png" alt=""/>

                    <p style={{ display: LinkedInTitle ? "block" : "none" }}>Programming Story</p>

                    </div>
                </aside>
                <footer>
                    <h2>Full Stack Developer</h2>
                    <div 
                    onClick={showAllTitles}
                    className="menuIcon-container">
                        <div className="menuIcon"></div>
                        <div className="menuIcon"></div>
                        <div className="menuIcon"></div>
                    </div>
                </footer>

                <nav>
                    <ul>

                    {(() =>{
                        if (window.innerWidth > "700") {
                            return(
                                <div>
                                    <li
                                    onClick={myStoryHandler}
                                    style={{ 
                                        background: myStoryTab ? "white" : "#0080BF",
                                        color: myStoryTab ? "#0080BF" : "white" 
                                    }} >My Story</li>
                                </div>
                                        )}
                                })()}
                    
                    {(() =>{
                        if (window.innerWidth < "700") {
                            return(
                                <div>
                                    <li
                                    onClick={myStoryHandler}
                                    style={{ 
                                        background: myStoryTab ? "#0080BF" : "",
                                        color: myStoryTab ? "white" : "#0080BF" 
                                    }} >My Story</li>
                                </div>
                                        )}
                                })()}

                        <li
                        onClick={codingTabHandler}
                         style={{ 
                            background: codingTab ? "white" : "#0080BF",
                            color: codingTab ? "#0080BF" : "white" 
                        }} >Coding Challenges</li>

                        <li
                        onClick={projectsTabHandler}
                         style={{ 
                            background: projectsTab ? "white" : "#0080BF",
                            color: projectsTab ? "#0080BF" : "white" 
                        }} >Projects Backstory</li>
                        
                        <li
                        onClick={apprenticeshipTabHandler}
                         style={{ 
                            background: apprenticeshipTab ? "white" : "#0080BF",
                            color: apprenticeshipTab ? "#0080BF" : "white" 
                        }} >Apprenticeship</li>
                    </ul>
                </nav>
            </header>

            <main>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore possimus reiciendis deserunt quos voluptatum. Iure provident animi eaque atque in delectus fugiat et est, voluptate ad, beatae a rem iste!</p>
            </main>
            
        </div>
    )
}



export default AboutMe
