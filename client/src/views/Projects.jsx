
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from "@reach/router"
import { get } from 'mongoose'
import AboutMe from './AboutMe'
import MainNav from '../components/MainNav'

const Projects = props => {

    // Effects

const [details, setDetails] = useState("")
const [projectsPage, setProjectsPage] = useState(true)








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
    // reset like to false
   
            data.like = false
            const fdLike = new FormData();
            fdLike.append('like', data.like)
    
            axios
            .put("http://localhost:8000/api/project/update/" + data._id, fdLike)
            .then((res) =>{
                console.log("submitted");
                console.log(res);
                // console.log(updateBoolean);
    
            })
            .catch((err) =>{
                console.log("something went wrong");
                console.log(err);
            })
            
            

        console.log(data._id);
        console.log("before",data.details);
        // change between true or false 
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

    const [like, setLike] = useState(false)


    const projectLikeHandler =(data)=>{
        // reset details to false in db
        data.details = !data.details
        const fdDetails = new FormData();
        fdDetails.append('details', data.details);
        axios
        .put("http://localhost:8000/api/project/update/" + data._id, fdDetails)
        .then((res) =>{
            console.log("submitted");
            console.log(res);
            // console.log(updateBoolean);

        })
        .catch((err) =>{
            console.log("something went wrong");
            console.log(err);
        })
   

        // increases the likes
        data.like = !data.like
        data.likeCount = data.likeCount + 1
        
        const fd = new FormData();
        fd.append('likeCount', data.likeCount);
        fd.append('like', data.like)

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


        // easterEgg
        if (data.likeCount === data.easterEgg) {
            alert(data.easterEggMsg)
        }
        else{
            alert(`Thank you for bringing, ${data.name} to ${data.likeCount} likes 😊😁.`)

        }
            

    }


    const projectUndoHandler =(data)=>{
        setLike(false)
        console.log(data.likeCount);
        console.log(data._id);
        
        data.like = !data.like
        data.likeCount = data.likeCount - 1

        
        const fd = new FormData();
        fd.append('likeCount', data.likeCount);
        fd.append('like', data.like)

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
        <div >

        <div 
        className="projectsPage-container"  
        style={ { display: projectsPage ? "grid" : "none" }}  > 
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
                            {/* <h2>{project.title}</h2> */}
                            {(() =>{
                                    if (project.details === false) {
                                        return(
                                            <div>
                                                <h2>{project.title}</h2>
                                            </div>
                                        )}
                                })()}
                            

                            {(() =>{
                                    if (project.details === true) {
                                        return(
                                            <div className="likeProjects-container">
                                                <h2>{project.type}</h2>
                                                <aside
                                                style={{background: `#${project.color}` }  }
                                                >
                                                    <img id="heartIcon"src="/img/Icons/heart.png" alt=""/>
                                                    <h4>{project.likeCount}</h4>

                                                </aside>
                                {(() =>{
                                    if (project.like === false) {
                                        return(
                                                <a
                                                style={{color: `#${project.color}` }  }
                                                onClick={ () => projectLikeHandler(project)}
                                               >like</a>

                                               )}
                                            })()}
                                {(() =>{
                                    if (project.like === true) {
                                        return(

                                                <a
                                                style={{color: `#${project.color}` }  }
                                                onClick={ () => projectUndoHandler(project)}
                                               >undo</a>

                                               )}
                                            })()}

                                            
                                            </div>
                                        )}
                                })()}
                            
                            <img 
                            src={"/uploads/" + project.file}
                            style={{ filter: project.details ? "blur(5px)" : "blur(0px)" }}
                             />
      
                            <div  
                            style={ { display: project.details ? "grid" : "none" }} 
                            className="tools-container">
                        
                           

                            {(() =>{
                                    if (project.type === "C#") {
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
                                    if (project.type === "Website") {
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
                                    if (project.type === "Python") {
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
                                    if (project.type === "MEARN") {
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
                                // onMouseLeave={ () =>showDetails(project)} 
                                style={{color: `#${project.color}` }  }
                                >Details</a>


                                <a href={project.urlLink}> 
                                <button style={{background: `#${project.color}`} }>{project.linkType }</button> 
                               </a>

                            </footer>
                        </li>


                        );})}
 

                                <li></li>
                    </ul>

                 
                </div>
               
            
            </main>


            </div>  
            
          
            
       
           
        </div>
    )
}



export default Projects
