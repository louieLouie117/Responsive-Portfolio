
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from "@reach/router"

const Projects = props => {

    // Effects
    const [details, setDetail] = useState(false)

  



    
    function showDetails(e) {
    

        setDetail(!details);
     
        // if (e.target.name == e.target.name) {
        //     console.log("success");
        //     setDetail(!details);
           
        // }
    
        console.log("I am here");
        console.log(e.target.name);
        // setDetail(e.target.name)
        console.log("DETAIL:",details);
    

    
    
    }


const [project, setProject] = useState(null)

    const apiGetAllProjects = 'http://localhost:8000/api/project'

    useEffect(()=>{
        axios
        .get(apiGetAllProjects)
        .then((res) =>{
            setProject(res.data.Project)
            // console.log(res.data.Project);
        })
        .catch((err)=> {
            console.log(err);
        })
    }, [])



    const deleteHandler = (deleteId)=> {
        console.log("delete button was click");
        axios.delete("http://localhost:8000/api/project/delete/" + deleteId)
        .then((res)=>{
            const filterProject = project.filter((project)=> {
                return project._id !== deleteId
            });

            setProject(filterProject);
        })
  
        
    }

        


 
    if(project === null){return(<h2>Loading...</h2>)}

    

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
                    {project.map((project)=>{
                        return(
                        <li className="project1-container">
                            <h2>{project.title}</h2>
                            <img 
                            src={"/uploads/" + project.file}
                            style={{ filter: details ? "blur(5px)" : "blur(0px)" }} />

                            <div  
                            style={{ display: details ? "grid" : "none" }} 
                            className="tools-container">
                        
                           

                            {(() =>{
                                    if (project.type === "c#Stack") {
                                        return(     
                                    <div id="icon-container">

                                        <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                        <p>Mockup UI</p>

                                        <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                        <p>Responsive Layout</p>

                                        <div><img src="/img/Icons/iconCSharp.png" alt=""/></div>
                                        <p>Logic</p>

                                        <div><img src="/img/Icons/iconNet.png" alt=""/></div>
                                        <p>Framework</p>
                                        
                                        <div><img src="/img/Icons/iconMySql.png" alt=""/></div>
                                        <p>Date Base</p>   
                                    </div>
                                        )}
                                          

                                
                                })()}

                                           
                           

                            {(() =>{
                                    if (project.type === "landingPage") {
                                        return(     
                                            <div id="icon-container">
                                            <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                            <p>Mockup UI</p>
            
                                            <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                            <p>Responsive Layout</p>
            
                                            <div><img src="/img/Icons/iconJavaScript.png" alt=""/></div>
                                            <p>Behavior</p>
                                        </div>
                                        )}
                                          

                                
                                })()}


                            {(() =>{
                                    if (project.type === "pythonStack") {
                                        return(     
                                            <div id="icon-container">
                                            <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                            <p>Mockup UI</p>
            
                                            <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                            <p>Responsive Layout</p>
            
                                            <div><img src="/img/Icons/iconPython.png" alt=""/></div>
                                            <p>Logic</p>

                                              
                                            <div><img src="/img/Icons/iconDjango.png" alt=""/></div>
                                            <p>Framework</p>

                                              
                                            <div><img src="/img/Icons/iconJquiry.png" alt=""/></div>
                                            <p>Behavior</p>

                                        </div>
                                        )}
                                          

                                })()}
                        


                        {(() =>{
                                    if (project.type === "mernStack") {
                                        return(     
                                            <div id="icon-container">
                                            <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                            <p>Mockup UI</p>
            
                                            <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                            <p>Responsive Layout</p>
            
                                            <div><img src="/img/Icons/iconJavaScript.png" alt=""/></div>
                                            <p>Logic</p>

                                              
                                            <div><img src="/img/Icons/iconReact.png" alt=""/></div>
                                            <p>Framework</p>

                                              
                                            <div><img src="/img/Icons/iconMongodb.png" alt=""/></div>
                                            <p>Date Base</p>

                                        </div>
                                        )}
                                          

                                })()}

                            </div>

                            
                            <footer> 
                                


                      
                         
                                <a  
                                name={project._id}
                                onClick={showDetails}
                                // onMouseEnter={project1State} 
                                style={{color: `#${project.color}` }  }
                                >Details</a>


                                <a href={project.urlLink}> 
                                <button style={{background: `#${project.color}`} }>{project.linkType }</button> 
                               </a>

                            </footer>
                        </li>


                        );})}
 
                    </ul>
                 
                </div>
            
            </main>


            

            
        </div>
    )
}



export default Projects
