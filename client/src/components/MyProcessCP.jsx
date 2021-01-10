import React,{useState, useEffect} from 'react'
import axios from 'axios'
import modules from "../modules/MyProcess.modules.css"


const MyProcessCP = props => {


    const [title, setTitle] = useState()
    const [category, setCategory] = useState()
    const [summary, setSummary] = useState()



const submitHandler =(e)=> {
    e.preventDefault()
    alert("button was click")
}


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
        <div className="myProcess-container">

            <header>
                <form encType="multipart/form-data" onSubmit= {e => {submitHandler(e)}}>
                    <h1>Hello, My Process</h1>

                        <input 
                        type="text" 
                        onChange={e =>{setTitle(e.target.value)}}
                        placeholder="title"/>

                        
                    <select 
                    onChange={e => {setCategory(e.target.value)}}>
                        <option value="Design">Design</option>
                        <option value="UIDevelopment">UI Development</option>
                        <option value="DataBase">Data Base</option>
                        <option value="Server">Server</option>
                        <option value="StatusUpdates">StatusUpdates</option>
                    </select>

                        <textarea
                        onChange={e =>{setSummary(e.target.value)}}
                        placeholder="Summary"
                        cols="30" rows="10"></textarea>

                        <button>+ section</button>
                </form>
                <footer>
                    <button>Design</button>
                    <button>UI Development</button>
                    <button>Database</button>
                    <button>Server</button>
                    <button>Status/Updates</button>
                </footer>

            </header>


        
            <main>


         

                                           
            {myProcess.map((myProcess)=>{ if(myProcess.category === "Server")
            return(   
            <div>

               
            
                    <section>
                        <aside>
                            <h4>{myProcess.title}</h4>
                            <h4>Likes: {myProcess.likeCount}</h4>
                            <a href="#"> Edit</a>
                            <a href="#"> Delete</a>
                        </aside>
                        <p>{myProcess.summary}</p>
                    </section>
                
            </div>   

            );})}

            </main>
            
        </div>
    )
}



export default MyProcessCP
