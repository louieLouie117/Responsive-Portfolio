import React, {useState, useEffect} from 'react'
import axios from 'axios'
import modules from "../modules/Dashboard.modules.css"




const CreateNewProject = props => {

    const [title, setTitle] = useState();
    const [name, setName] = useState();
    const [type, setType] = useState("C#");
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
        fd.append('details', details);
        fd.append('file', file);
        fd.append('easterEgg', easterEgg);
        fd.append('easterEggMsg', easterEggMsg);




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

            <div className="columns3-container">
                
            <select 
                onChange={e => {setType(e.target.value)}}>
                    <option value="C#">C# Project</option>
                    <option value="MEARN">MERN Project</option>
                    <option value="Python">Python Project</option>
                    <option value="Website">Landing Page</option>
                </select>
                <input 
                type="text"
                onChange={e => {setTitle(e.target.value)}}
                placeholder="title"/>
                 <input 
                type="text"
                onChange={e => {setName(e.target.value)}}
                placeholder="Name"/>
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
                <input 
                type="esterEgg#"
                onChange={e => {setEasterEgg(e.target.value)}}
                placeholder="ester egg count"/>
                     
        </div>

            <textarea 
            placeholder="Ester egg message"
            onChange={e => {setEasterEggMsg(e.target.value)}}
            cols="30" rows="10"></textarea>
              
                
                <input 
                type="file" 
                onChange={onChange}/>
                    
              

    

               <button>+ new Project</button>
            </form>

            
        </div>
    )
}



export default CreateNewProject
