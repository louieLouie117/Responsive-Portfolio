import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from "@reach/router"
import modules from "../modules/AllProjects.modules.css"
import CreateNewProject from './CreateNewProject'



const AllProjects = props => {
 

    const [title, setTitle] = useState();
    const [name, setName] = useState();
    const [type, setType] = useState();
    const [urlLink, setUrlLink] = useState();
    const [linkType, setLinkType] = useState();
    const [color, setColor] = useState();
    const [file, setFile] = useState();
    const [details, setDetails] = useState(false);
    const [easterEgg, setEasterEgg] = useState();
    const [easterEggMsg, setEasterEggMsg] = useState()


    const [data, getFile] = useState({ name: "", path: "" });

    const onChange = e => {
        setFile(e.target.files[0]);
        console.log("file:",file);
      };

    const submitHandler = (e)=>{
        // e.preventDefault();
        console.log("button was click");
        console.log(title);
        console.log(type);
        console.log(urlLink);
        console.log(linkType);
        console.log(color);
        console.log(false);

        const fd = new FormData();
        fd.append('title', title);
        fd.append('name', name);
        fd.append('type', type);
        fd.append('urlLink', urlLink);
        fd.append('linkType', linkType);
        fd.append('color', color);
        fd.append('file', file);
        fd.append('easterEgg', easterEgg);
        fd.append('easterEggMsg', easterEggMsg);


        axios.post("http://localhost:8000/api/project",  fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                  }             
            })
            .then((res)=> {
                getFile({
                    path:'http://localhost:8000/api/project'+ res.data.path
                });
                console.log("res data here",res.data);
            })
            .catch((err)=>{
                console.log("Errors", err);
            }, [])


    }


    const [itemId, setItemId] = useState()
    const [refreshPage, setRefreshPage] = useState(false)

    const EditData = (EditData)=>{

        setItemId(EditData._id)

        console.log(EditData._id);
        setTitle(EditData.title)
        setType(EditData.type)
        setName(EditData.name)
        setUrlLink(EditData.urlLink)
        setLinkType(EditData.linkType)
        setColor(EditData.color)
        setEasterEgg(EditData.easterEgg)
        setEasterEggMsg(EditData.easterEggMsg)
        alert(`${itemId}`)
        setRefreshPage(!refreshPage)


    }


     // Submit Edit Handler
     const SubmitEditHandler = (e)=>{

        const fd = new FormData();
        fd.append('title', title );
        fd.append('name', name );
        fd.append('type', type);
        fd.append('urlLink', urlLink);
        fd.append('color', color);
        fd.append('easterEgg', easterEgg);
        fd.append('easterEggMsg', easterEggMsg);
     

        // API call the the db
        axios
        .put("http://localhost:8000/api/project/update/" + itemId, fd)
        .then((res) =>{
            console.log("submitted");
            console.log(res);
        })
        .catch((err) =>{
            console.log("something went wrong");
            console.log(err);
        }, [], SubmitEditHandler)

        // Clear input files
        setTitle("")
        setName("")
        setType("")
        setUrlLink("")
        setLinkType("")
        setColor("")
        setEasterEgg("")
        setEasterEggMsg("")
        setRefreshPage(!refreshPage)
  
    }
   





    // rending all items from db
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
    }, [refreshPage])

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

         

            <header>
            <h2>Crate new Project</h2>
            <form encType="multipart/form-data" >

            <input 
                value={type}
                type="text"
                onChange={e => {setType(e.target.value)}}
                placeholder="project type: C#,MERN,Python,Website"/>

            <div className="columns2-container">
                <input 
                value={title}
                type="text"
                onChange={e => {setTitle(e.target.value)}}
                placeholder="title"/>

                <input 
                value={name}
                type="text"
                onChange={e => {setName(e.target.value)}}
                placeholder="Name"/>
            </div>

                <input 
                value={urlLink}
                type="text"
                onChange={e => {setUrlLink(e.target.value)}}
                placeholder="url Link"/>

            <div className="columns3-container">
        
                <input 
                value={linkType}
                type="text"
                onChange={e => {setLinkType(e.target.value)}}
                placeholder="button text"/>

                <input 
                value={color}
                type="text"
                onChange={e => {setColor(e.target.value)}}
                placeholder="hex color"/>

                <input 
                value={easterEgg}
                type="esterEgg#"
                onChange={e => {setEasterEgg(e.target.value)}}
                placeholder="ester egg count"/>
                     
            </div>

            <textarea 
            value={easterEggMsg}
            onChange={e => {setEasterEggMsg(e.target.value)}}
            cols="30" rows="10"></textarea>
              
                
            <input 
            type="file" 
            onChange={onChange}/>
                    
            <button
            style={{display: refreshPage ? "none" : "block" }}
            onClick= {e => {submitHandler(e)}}
            >+ new Project</button>

            <button
            style={{display: refreshPage ? "block" : "none" }}
            onClick= {e => {SubmitEditHandler(e)}}
            >Save Changes</button>

            </form>


            </header>
            

            <main>
            <h2>List of all projects</h2>
            {project.map((project)=>{
                        return(
                <ul key={project._id}>
                  
                        <li className="project1-container">
                            <img 
                            src={"/uploads/" + project.file}
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
                                <a 
                                onClick={()=> EditData(project)}
                                href="#">Edit</a>
                            </footer>

                           
                        </li>


 
                    </ul>
                        );})}
                    </main>
            
        </div>
        
    )
}

AllProjects.propTypes = {

}

export default AllProjects
