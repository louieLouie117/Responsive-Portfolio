
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from "@reach/router"
import { get } from 'mongoose'

const Projects = props => {

    // Effects

    const [details, setDetails] = useState("")


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
    })
    

    const showDetails = (data)=> {
   
        console.log(data._id);
        console.log("before",data.details);
        data.details = !data.details
        console.log("after",data.details);
        setDetails(" ")
        setDetails("change")
        // const updateBoolean = {
        //     details: data.details    
        // }
        const fd = new FormData();
        fd.append('details', data.details);

        axios
        .put("http://localhost:8000/api/project/update/" + data._id, fd)
        .then((res) =>{
            console.log("submitted");
            console.log(res);
            // console.log(updateBoolean);

        })
        .catch((err) =>{
            console.log("something went wrong");
            console.log(err);
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
                            style={{ filter: project.details ? "blur(5px)" : "blur(0px)" }}
                             />
      
                            <div  
                            style={ { display: project.details ? "grid" : "none" }} 
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
                                onClick={ () =>showDetails(project)}
                                onMouseEnter={ () =>showDetails(project)} 
                                onMouseLeave={ () =>showDetails(project)} 
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
