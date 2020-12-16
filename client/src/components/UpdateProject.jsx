import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {navigate} from "@reach/router"
// import modules from "../modules/Dashboard.modules.css"



const UpdateProject = props => {


    // console.log("props",props);
    console.log("Props",props.id);


    const [title, setTitle] = useState();
    const [type, setType] = useState("c#Stack");
    const [urlLink, setUrlLink] = useState();
    const [linkType, setLinkType] = useState();
    const [color, setColor] = useState();
    const [file, setFile] = useState("no image");
    const [details, setDetails] = useState(false);

    const [data, getFile] = useState({ name: "", path: "" });


    useEffect(() => {
        // console.log("use effect",props);
        console.log("UseEffect",props.id);


        axios
        .get("http://localhost:8000/api/project/" + props.id )
        .then((res)=>{
            console.log("get project", res);
            
            setTitle(res.data.Project.title)
            setType(res.data.Project.type)
            setUrlLink(res.data.Project.urlLink)
            setLinkType(res.data.Project.linkType)
            setColor(res.data.Project.color)

            console.log("Axios id",res.data.Project.id);
            console.log("Axios title",res.data.Project.title);
            console.log("Axios type",res.data.Project.type);
            console.log("Axios color",res.data.Project.color);

        })
        .catch((err) =>{
            console.log(err);
        })
    }, [props.id])


    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("submit button was click");


        const fd = new FormData();
        fd.append('type', type );
        fd.append('title', title );
        fd.append('urlLink', urlLink );
        fd.append('linkType', linkType );
        fd.append('details', details );
        fd.append('color', color );


        axios
        .put("http://localhost:8000/api/project/update/" + props.id, fd)
        .then((res) =>{
            console.log("submitted");
            console.log(res);
            // console.log(updateBoolean);
            navigate("/dashboard")

        })
        .catch((err) =>{
            console.log("something went wrong");
            console.log(err);
        })




    }



    const onChange = (e)=>{}



    return (
        <div className="update-container">
            <h1>update project</h1>
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
                value={title}
                onChange={e => {setTitle(e.target.value)}}
                placeholder="title"/>
            </div>
                <input 
                type="text"
                value={urlLink}
                onChange={e => {setUrlLink(e.target.value)}}
                placeholder="url Link"/>

                <div className="columns3-container">
        
                <input 
                type="text"
                value={linkType}
                onChange={e => {setLinkType(e.target.value)}}
                placeholder="button text"/>

                <input 
                type="text"
                value={color}
                onChange={e => {setColor(e.target.value)}}
                placeholder="hex color"/>
                      <select 
                onChange={e => {setDetails(e.target.value)}}
                >
                    <option value="false">false</option>
                    <option value="true">true</option>

                </select>
                </div>
              
                
                <input 
                type="file" 
                onChange={onChange}/>
                    
              

    

               <button>update Project</button>
            </form>
        </div>
    )
}



export default UpdateProject
