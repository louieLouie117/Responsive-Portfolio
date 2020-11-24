
import React, {useState} from 'react'

const Projects = props => {
    const [project1Details, setProject1Details] = useState(false)
    const [project1Img, setProject1Img] = useState(false)

    const [project2Details, setProject2Details] = useState(false)
    const [project2Img, setProject2Img] = useState(false)

    const [project3Details, setProject3Details] = useState(false)
    const [project3Img, setProject3Img] = useState(false)




    function project1State() {
        setProject1Details(!project1Details);
        setProject1Img(!project1Img);

        setProject2Details(false);
        setProject2Img(false);
        setProject3Details(false);
        setProject3Img(false);
    
    }


    function project2State() {
        setProject2Details(!project2Details);
        setProject2Img(!project2Img);

        setProject1Details(false);
        setProject1Img(false);
        setProject3Details(false);
        setProject3Img(false);

        
    }

    
    function project3State() {
        setProject3Details(!project3Details);
        setProject3Img(!project3Img);
        
        setProject1Details(false);
        setProject1Img(false);
        setProject2Details(false);
        setProject2Img(false);
    
    }


 



    return (
        <div className="projectsPage-container">

            <header>      
                <div className="slogan-container">  
                    <p>Dream it.</p>             
                    <>Design it.</>
                    <p>Code it.</p>
                </div>

           
                <img src="/img/portfolioImg.png" alt=""/>

            </header>

            <main>
                <picture class="headerImage-container">
                    <source media="(min-width: 1300px)" srcset="/img/desktopImg.png" />
                    <source media="(min-width: 725px)" srcset="/img/tabletImg.png" />
                    <img src="/img/mobileImgLarge.png" alt="" />
                </picture>
                
                <div className="cardItems">
                    <ul>
                        <li className="project1-container">
                            <h2>CRUD Web App</h2>
                            <img 
                            src="/img/projectImg1.png" 
                            style={{ filter: project1Img ? "blur(4px)" : "blur(0px)" }} />

                            <div  
                            style={{ display: project1Details ? "grid" : "none" }} 
                            className="tools-container">
                                <p>need this to be grid</p>
                                </div>
                            <footer> 
                                <a  onClick={project1State}>Details</a>
                                <button id="projectOneBTN">Try it.</button>
                            </footer>
                        </li>


                        <li className="project2-container">
                            <h2>CRUD Web App</h2>
                            <img src="/img/projectImg2.png" 
                            style={{ filter: project2Img ? "blur(4px)" : "blur(0px)" }}/>
                            <div  
                            style={{ display: project2Details ? "grid" : "none" }} 
                            className="tools-container">
                                <p>need this to be grid</p>
                                </div>
                            <footer> 
                                <a onClick={project2State}>Details</a>
                                <button>Try it.</button>
                            </footer>
                        </li>

                        <li className="project3-container">
                            <h2>CRUD Web App</h2>
                            <img 
                            src="/img/projectImg3.png" 
                            style={{ filter: project3Img ? "blur(4px)" : "blur(0px)" }}/>
                            <div  
                            style={{ display: project3Details ? "grid" : "none" }} 
                            className="tools-container">
                                <p>need this to be grid</p>
                                </div>

                            <footer> 
                                <a onClick={project3State}>Details</a>
                                <button>Visit it.</button>
                            </footer>
                        </li>



                    </ul>
                 
                </div>
            </main>


            

            
        </div>
    )
}



export default Projects
