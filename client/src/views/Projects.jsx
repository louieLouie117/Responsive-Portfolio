
import React from 'react'

const Projects = props => {
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
                            <img src="/img/projectImg1.png" alt=""/>
                            <footer> 
                                <a href="#">Details</a>
                                <button id="projectOneBTN">Try it.</button>
                            </footer>
                        </li>


                        <li className="project2-container">
                            <h2>CRUD Web App</h2>
                            <img src="/img/projectImg2.png" alt=""/>
                            <footer> 
                                <a href="#">Details</a>
                                <button>Try it.</button>
                            </footer>
                        </li>

                        <li className="project3-container">
                            <h2>CRUD Web App</h2>
                            <img src="/img/projectImg3.png" alt=""/>
                            <footer> 
                                <a href="#">Details</a>
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
