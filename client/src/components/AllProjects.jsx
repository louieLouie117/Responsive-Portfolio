import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from "@reach/router"
import modules from "../modules/AllProjects.modules.css"
import CreateNewProject from './CreateNewProject'



const AllProjects = props => {


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
        <div className="allProjects-container">

            <div>
                <CreateNewProject></CreateNewProject>
            </div>
            <h2>List of all projects</h2>
            {project.map((project)=>{
                        return(
                <ul key={project._id}>
                  
                        <li className="project1-container">
                            <img 
                            src={"/uploads/" + project.file}
                            style={{ filter: details ? "blur(5px)" : "blur(0px)" }}
                             />

                            <aside>
                                <h2>{project.title}</h2>
                                <p>{project._id}</p>
                                <p>{project.type}</p>
                                <p>{project.urlLink}</p>
                                <p>{project.file}</p>
                                <p>{project.linkType}</p>
                                <p>{project.color}</p>
                                <p>Likes: {project.likeCount}</p>



                                {(() =>{
                                    if (project.like === false) {
                                        return(
                                            <div>
                                                <p>like: false</p>
                                            </div>
                                        )}
                                })()}
                            

                            {(() =>{
                                    if (project.like === true) {
                                        return(
                                            <div>
                                                <p>like: true</p>
                                            </div>
                                        )}
                                })()}

                                
                            {(() =>{
                                    if (project.details === false) {
                                        return(
                                            <div>
                                                <p>details: false</p>
                                            </div>
                                        )}
                                })()}
                            

                            {(() =>{
                                    if (project.details === true) {
                                        return(
                                            <div>
                                                <p>details: true</p>
                                            </div>
                                        )}
                                })()}

                



                            </aside>

                            <div>        
                                <p>EasterEggCount: {project.easterEgg}</p>
                                <p>EasterEgg Msg: {project.easterEggMsg}</p>
                            </div>
                            
                            <footer>
                                
                                <button
                                style={{background: `#${project.color}` }  }
                                 onClick={()=>{deleteHandler(project._id)}}>Delete</button>
                                <Link to={`/update/${project._id}/edit`}>edit</Link>
                            </footer>

                           
                        </li>


 
                    </ul>
                        );})}
            
        </div>
    )
}

AllProjects.propTypes = {

}

export default AllProjects
