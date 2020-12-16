import React, {useState, useEffect} from 'react'
import axios from 'axios'
import modules from "../modules/Dashboard.modules.css"




const CreateNewProject = props => {

    const [title, setTitle] = useState();
    const [type, setType] = useState("c#Stack");
    const [urlLink, setUrlLink] = useState();
    const [linkType, setLinkType] = useState();
    const [color, setColor] = useState();
    const [file, setFile] = useState();
    const [details, setDetails] = useState(false);

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
        fd.append('type', type);
        fd.append('urlLink', urlLink);
        fd.append('linkType', linkType);
        fd.append('color', color);
        fd.append('details', details);
        fd.append('file', file);



        // 
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
            }, [], submitHandler)


    }



    return (
        <div>
            <h2>Crate new Project</h2>
            <form encType="multipart/form-data" onSubmit= {e => {submitHandler(e)}}>

            <div className="columns2-container">
                
            <select 
                onChange={e => {setType(e.target.value)}}>
                    <option value="c#Stack">C# Project</option>
                    <option value="mernStack">MERN Project</option>
                    <option value="pythonStack">Python Project</option>
                    <option value="landingPage">Landing Page</option>
                </select>
                <input 
                type="text"
                onChange={e => {setTitle(e.target.value)}}
                placeholder="title"/>
            </div>
                <input 
                type="text"
                onChange={e => {setUrlLink(e.target.value)}}
                placeholder="url Link"/>

                <div className="columns3-container">
        
                <input 
                type="text"
                onChange={e => {setLinkType(e.target.value)}}
                placeholder="button text"/>

                <input 
                type="text"
                onChange={e => {setColor(e.target.value)}}
                placeholder="hex color"/>
                      <select 
                onChange={e => {setDetails(e.target.value)}}>
                    <option value="false">false</option>
                    <option value="true">true</option>

                </select>
                </div>
              
                
                <input 
                type="file" 
                onChange={onChange}/>
                    
              

    

               <button>+ new Project</button>
            </form>

            
        </div>
    )
}



export default CreateNewProject
