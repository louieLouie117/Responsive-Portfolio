import React,{useState, useEffect} from 'react'
import axios from 'axios'

const ProjectsBackstory = props => {

    const [myProcess, setMyProcess] = useState(null)
    const apiGetAllMyProcess = 'http://localhost:8000/api/myProcess'
    
    useEffect(()=>{
        axios
        .get(apiGetAllMyProcess)
        .then((res) =>{
            setMyProcess(res.data.MyProcess)
            // console.log(res.data.Project);
        })
        .catch((err)=> {
            console.log(err);
        })
    }, [])
    
    
    if(myProcess === null){return(<h2>Loading...</h2>)}









    return (
        <div className="projectBackStory-container">

            <main>

            {myProcess.map((myProcess)=>{ 
                if(myProcess.category === "ProjectBackStory")
            return(   
            <div>
                    <ul>
                        <li>
                            <h2>{myProcess.title}</h2>
                            <p>{myProcess.summary}</p>
                        </li>
                    </ul>
                
            </div>   

            );})}

            </main>
            
        </div>
    )
}



export default ProjectsBackstory
