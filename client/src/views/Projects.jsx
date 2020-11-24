
import React, {useState} from 'react'
import {Link} from "@reach/router"

const Projects = props => {
    const [project1Details, setProject1Details] = useState(false)
    const [project1Img, setProject1Img] = useState(false)

    const [project2Details, setProject2Details] = useState(false)
    const [project2Img, setProject2Img] = useState(false)

    const [project3Details, setProject3Details] = useState(false)
    const [project3Img, setProject3Img] = useState(false)

    const [project4Details, setProject4Details] = useState(false)
    const [project4Img, setProject4Img] = useState(false)

    const [project5Details, setProject5Details] = useState(false)
    const [project5Img, setProject5Img] = useState(false)



    function project1State() {
        setProject1Details(!project1Details);
        setProject1Img(!project1Img);

        setProject2Details(false);
        setProject2Img(false);
        setProject3Details(false);
        setProject3Img(false);
        setProject4Details(false);
        setProject4Img(false);
        setProject5Details(false);
        setProject5Img(false);
    
    }

    

    function project2State() {
        setProject2Details(!project2Details);
        setProject2Img(!project2Img);

        setProject1Details(false);
        setProject1Img(false);
        setProject3Details(false);
        setProject3Img(false);
        setProject4Details(false);
        setProject4Img(false);
        setProject5Details(false);
        setProject5Img(false);

        
    }

    
    function project3State() {
        setProject3Details(!project3Details);
        setProject3Img(!project3Img);
        
        setProject1Details(false);
        setProject1Img(false);
        setProject2Details(false);
        setProject2Img(false);
        setProject4Details(false);
        setProject4Img(false);
        setProject5Details(false);
        setProject5Img(false);
    
    }


    
    
    function project4State() {
        setProject4Details(!project4Details);
        setProject4Img(!project4Img);
        
        setProject1Details(false);
        setProject1Img(false);
        setProject2Details(false);
        setProject2Img(false);
        setProject3Details(false);
        setProject3Img(false);
        setProject5Details(false);
        setProject5Img(false);
    
    }
    function project5State() {
        setProject5Details(!project5Details);
        setProject5Img(!project5Img);
        
        setProject1Details(false);
        setProject1Img(false);
        setProject2Details(false);
        setProject2Img(false);
        setProject3Details(false);
        setProject3Img(false);
        setProject4Details(false);
        setProject4Img(false);
    
    }


 



    return (
        <div className="projectsPage-container">

            <header>      
                <div className="slogan-container">  
                    <p>Dream it.</p>             
                    <p>Design it.</p>
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
                            style={{ filter: project1Img ? "blur(5px)" : "blur(0px)" }} />

                            <div  
                            style={{ display: project1Details ? "grid" : "none" }} 
                            className="tools-container">
                                
                            <div id="icon-container">
                                <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                <p>Prototype UI</p>

                                <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                <p>Responsive Layout</p>

                                <div><img src="/img/Icons/iconPython.png" alt=""/></div>
                                <p>Logic</p>

                                <div><img src="/img/Icons/iconJquiry.png" alt=""/></div>
                                <p>Behavior</p>
                                
                                <div><img src="/img/Icons/iconDjango.png" alt=""/></div>
                                <p>Framework</p>     
                            </div>

                            </div>
                            <footer> 
                                <a  
                                onClick={project1State}
                                onMouseEnter={project1State} 
                                onMouseLeave={project1State}>Details</a>
                                <button id="projectOneBTN">Live Demo</button>
                            </footer>
                        </li>


                        <li className="project2-container">
                            <h2>CRUD Web App</h2>
                            <img src="/img/projectImg2.png" 
                            style={{ filter: project2Img ? "blur(4px)" : "blur(0px)" }}/>
                            <div  
                            style={{ display: project2Details ? "grid" : "none" }} 
                            className="tools-container">
                            <div id="icon-container">
                                <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                <p>Prototype UI</p>

                                <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                <p>Responsive Layout</p>

                                <div><img src="/img/Icons/iconCSharp.png" alt=""/></div>
                                <p>Logic</p>

                                <div><img src="/img/Icons/iconNet.png" alt=""/></div>
                                <p>Framework</p>
                                
                                <div><img src="/img/Icons/iconMySql.png" alt=""/></div>
                                <p>Date Base</p>     
                            </div>

                                </div>
                            <footer> 
                                <a 
                                onClick={project2State}
                                onMouseEnter={project2State} 
                                onMouseLeave={project2State}>Details</a>
                                <button>Live Demo</button>
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
                            <div id="icon-container">
                                <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                <p>Prototype UI</p>

                                <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                <p>Responsive Layout</p>

                                <div><img src="/img/Icons/iconJavaScript.png" alt=""/></div>
                                <p>Logic</p>

                                <div><img src="/img/Icons/iconReact.png" alt=""/></div>
                                <p>Framework</p>
                                
                                <div><img src="/img/Icons/iconMongodb.png" alt=""/></div>
                                <p>Date Base</p>     
                            </div>
                            </div>

                            <footer> 
                                <a 
                                onClick={project3State}
                                onMouseEnter={project3State} 
                                onMouseLeave={project3State}>Details</a>
                                <button>Live Demo</button>
                            </footer>
                        </li>

                        <li className="project4-container">
                            <h2>CRUD Web App</h2>
                            <img 
                            src="/img/projectImg4.png" 
                            style={{ filter: project4Img ? "blur(4px)" : "blur(0px)" }}/>
                            <div  
                            style={{ display: project4Details ? "grid" : "none" }} 
                            className="tools-container">
                            <div id="icon-container">
                                <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                <p>Prototype UI</p>

                                <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                <p>Responsive Layout</p>

                                <div><img src="/img/Icons/iconCSharp.png" alt=""/></div>
                                <p>Logic</p>

                                <div><img src="/img/Icons/iconNet.png" alt=""/></div>
                                <p>Framework</p>
                                
                                <div><img src="/img/Icons/iconMySql.png" alt=""/></div>
                                <p>Date Base</p>     
                            </div>
                            </div>

                            <footer> 
                                <a 
                                onClick={project4State}
                                onMouseEnter={project4State} 
                                onMouseLeave={project4State}>Details</a>
                                <a href="https://www.deltabarandgrill.com/"> <button>Visit it.</button></a>
                            </footer>
                        </li>

                        <li className="project5-container">
                            <h2>Landing Page</h2>
                            <img 
                            src="/img/projectImg5.png" 
                            style={{ filter: project5Img ? "blur(4px)" : "blur(0px)" }}/>
                            <div  
                            style={{ display: project5Details ? "grid" : "none" }} 
                            className="tools-container">
                            <div id="icon-container">
                                <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                <p>Prototype UI</p>

                                <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                <p>Responsive Layout</p>
                            </div>
                            </div>

                            <footer> 
                                <a 
                                onClick={project5State}
                                onMouseEnter={project5State} 
                                onMouseLeave={project5State}>Details</a>
                                <a href="https://pacebuildershomeremodeling.com/"> <button>Visit it.</button></a>
                            </footer>
                        </li>



                        



                    </ul>
                 
                </div>
            </main>


            

            
        </div>
    )
}



export default Projects
