import React, {useState} from 'react'
import AlgosBasic from '../components/AlgosBasic'
import MyStory from '../components/MyStory'
import modules from "../modules/AboutMe.modules.css"


const AboutMe = props => {

    // state for Icon titles
    const [faceBookTitle, setFaceBookTitle] = useState(false)
    const [tiktokTitle, setTiktokTitle] = useState(false)
    const [instagramTitle, setInstagramTitle] = useState(false)
    const [githubTitle, setGithubTitle] = useState(false)
    const [LinkedInTitle, setLinkedInTitle] = useState(false)
    const [blurImg, setBlurImg] = useState(false)
    const [rotateMenu, setRotateMenu] = useState(false)
    const [devTitle, setDevTitle] = useState(true)


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

    const showAllTitles =(e)=>{
    console.log("div element was click"); 
    setFaceBookTitle(!faceBookTitle)
    setTiktokTitle(!tiktokTitle)
    setInstagramTitle(!instagramTitle)
    setGithubTitle(!githubTitle)
    setLinkedInTitle(!LinkedInTitle)
    setBlurImg(!blurImg)
    setRotateMenu(!rotateMenu)
    setDevTitle(!devTitle)


   


   
    


    }


    // state for navigation tabs
    const [myStoryTab, setMyStoryTab] = useState(true)
    const [codingTab, setCodingTab] = useState(false)
    const [projectsTab, setProjectTab] = useState(false)
    const [apprenticeshipTab, setApprenticeshipTab] = useState(false)

    // hide and show sections/components
    const [AlgosComponent, setAlsogsComponent] = useState(false)
    const [MyStoryComponentDesktop, setMyStoryComponentDesktop] = useState(true)
    const [MyStoryComponentMobile, setMyStoryComponentMobile] =  useState(false)


  



    const myStoryHandler=()=>{
        console.log("my story tab was click");
        setMyStoryTab(true)

        setCodingTab(false)
        setProjectTab(false)
        setApprenticeshipTab(false)

        setAlsogsComponent(false)
        setMyStoryComponentDesktop(true)
        setMyStoryComponentMobile(true)


    }



    
    const codingTabHandler=()=>{
        console.log("coding tab was click");
        setMyStoryTab(false)
        setCodingTab(true)
        setProjectTab(false)
        setApprenticeshipTab(false)

        setAlsogsComponent(true)
        setMyStoryComponentDesktop(false)
        setMyStoryComponentMobile(false)
    }

    
    const projectsTabHandler=()=>{
        console.log("projects tab was click");
        setMyStoryTab(false)
        setCodingTab(false)
        setProjectTab(true)
        setApprenticeshipTab(false)
        setAlsogsComponent(false)


        setMyStoryComponentDesktop(false)
        setMyStoryComponentMobile(false)

    }
    
    const apprenticeshipTabHandler=()=>{
        console.log("apprenticeship tab was click");
        setMyStoryTab(false)
        setCodingTab(false)
        setProjectTab(false)
        setApprenticeshipTab(true)
        setAlsogsComponent(false)


        setMyStoryComponentDesktop(false)
        setMyStoryComponentMobile(false)

    }

    const hideSectionHandler = ()=>{
        console.log("section button was click");
        setMyStoryComponentMobile(false)
        setAlsogsComponent(false)

        
    }


    
    return (
        <div className="aboutMe-container">
            <header>
                <h1
                style={{ 
                    display: devTitle ? "block" : "none",

                }}
                >Hello, my name is Luis</h1>
                <h1
                    style={{ 
                        display: devTitle ? "none" : "block",
                    }}>I translate designs into code.</h1>
                
                <picture 
                style={{ 
                filter: blurImg ? "blur(100px)" : "blur(0px)",
                marginLeft: blurImg ? "-300px" : "0",
                marginBottom: blurImg ? "0" : "0",
                transition: "1500ms"


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


                        <p style={{
                             display: faceBookTitle ? "block" : "none",
                            transition: "1500ms"

                             }} >Personal Story</p>
                    </div>

                    <div className="socialIcon-container">
                        <img 
                        onClick={tiktokIcon}
                        onMouseEnter={tiktokIcon}
                        onMouseLeave={tiktokIcon}
                        src="/img/Icons/IconTikTok.png" alt=""/>
                        <p style={{ display: tiktokTitle ? "block" : "none" }}>Just for Fun</p>
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

                    <p style={{ display: LinkedInTitle ? "block" : "none" }}>Let's  Connect and Program Together</p>

                    </div>
                </aside>
                <footer>
                    <h2
                    style={{ 
                        display: devTitle ? "block" : "none",

                    }}

                    >Full Stack Developer</h2>

                    <div
                    style={{ 
                        display: devTitle ? "none" : "block",
                        // marginLeft: devTitle ? "-400px" : "0"
                        transition: "1500ms"

                    }}>
                    <h2
                    style={{ 
                        fontSize: devTitle ? "0" : "1em",
                        paddingLeft: devTitle ?  "0" : "20px",


                    }}

                    >Specialization in React SPA </h2>

                    
                    <h2
                    style={{ 
                        fontSize: devTitle ? "0" : "1em",
                        paddingLeft: devTitle ?  "0" : "20px",

                    }}

                    > Front-end Design and Development</h2>

                    </div>
                    <div 
                    style={{ 
                        transform: rotateMenu ? ` rotate(0deg)` : `rotate(180deg)`,
                        transition: "1500ms"

                    }}
                    onClick={showAllTitles}
                    className="menuIcon-container">
                        <div 
                        className="menuIcon"
                        style={{ 
                            transform: rotateMenu ? ` rotate(0deg)` : `rotate(180deg)`,
                            transition: "2500ms"
    
                        }}
                        
                        ></div>
                        <div 
                        className="menuIcon"
                        style={{ 
                            transform: rotateMenu ? ` rotate(0deg)` : `rotate(180deg)`,
                            transition: "2000ms"
    
                        }}
                        ></div>
                        <div 
                        className="menuIcon"
                        style={{ 
                            transform: rotateMenu ? ` rotate(0deg)` : `rotate(180deg)`,
                            transition: "1500ms"
    
                        }}
                        
                        ></div>
                    </div>
                </footer>

                <nav>

                    {(() =>{
                        if (window.innerWidth > "900") {
                            return(
                                        <ul>

                                        <li
                                        onClick={myStoryHandler}
                                            style={{ 
                                                background: myStoryTab ? "white" : "#0080BF",
                                                color: myStoryTab ? "#0080BF" : "white" 
                                            }} >My Story</li>

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
                                        }} >Backstory for Projects</li>

                                        <li
                                        onClick={apprenticeshipTabHandler}
                                        style={{ 
                                            background: apprenticeshipTab ? "white" : "#0080BF",
                                            color: apprenticeshipTab ? "#0080BF" : "white" 
                                        }} >Apprenticeship</li>
                                        </ul>
                        
                                        )}
                                })()}
                    
                    {(() =>{
                        if (window.innerWidth < "900") {
                            return(
                                <ul>
                                    <li
                                    onClick={myStoryHandler}
                                        style={{ background: "white", color:  "#0080BF" }} 
                                        >My Story</li>

                                    <li
                                    onClick={codingTabHandler}
                                    style={{ 
                                        background: "white",
                                        color:  "#0080BF" 
                                    }} 
                                    >Coding Challenges</li>

                                    <li
                                    onClick={projectsTabHandler}
                                    style={{ 
                                        background: "white",
                                        color:  "#0080BF"  
                                    }} >Backstory for Projects</li>

                                    <li
                                    onClick={apprenticeshipTabHandler}
                                    style={{ 
                                        background: "white",
                                        color:  "#0080BF" 
                                    }} >Apprenticeship</li>
                                </ul>
                        
                                        )}
                                })()}

                    
                </nav>
            </header>

            <main>



            {(() =>{if (window.innerWidth < "900") {
                    return(
                        <section 
                                              
                        style={ { 
                            display: MyStoryComponentMobile ? "grid" : "none", 
                            

                        }}> 
                        
                        <button
                        onClick={hideSectionHandler}                        

                        >X</button>
                            <MyStory></MyStory>
                        </section>
                )}
            })()}

            {(() =>{if (window.innerWidth > "900") {
                    return(
                        <section style={{ 
                        display: MyStoryComponentDesktop ? "grid" : "none",
                        // zIndex: MyStoryComponentMobile ? "40": "0"
                    }}> 
                            <MyStory></MyStory>
                        </section>
                )}
            })()}



                <section
            
                style={{ 
                    display: AlgosComponent ? "grid" : "none",

                    
                    }}>


            {(() =>{if (window.innerWidth < "900") {
                    return(


                        <button
                        onClick={hideSectionHandler}                        

                        >X</button>

                        )}
                    })()}
                    {/* <nav>
                        <button >Basic</button>
                        <button >Sorting</button>
                        <button >Data Structure</button>
                
                    </nav> */}
                    <AlgosBasic></AlgosBasic>

                </section>
            </main>
            
        </div>
    )
}



export default AboutMe
