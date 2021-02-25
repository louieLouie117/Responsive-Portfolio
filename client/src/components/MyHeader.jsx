import React,{useEffect, useState} from 'react'
import axios from 'axios'


const MyHeader = props => {

// get all data for My Info db
const [myInfo, setMyInfo] = useState(null)
const apiGetAllMyInfo = 'http://localhost:8000/api/myInfo'

useEffect(()=>{
    axios
    .get(apiGetAllMyInfo)
    .then((res) =>{
        setMyInfo(res.data.MyInfo)
        // console.log(res.data.Project);
    })
    .catch((err)=> {
        console.log(err);
    })
}, [])



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


if(myInfo === null){return(<h2>Loading db...</h2>)}
if(myProcess === null){return(<h2>Loading db...</h2>)}


    return (
               
        <div className="myHeader-container">
            <header>
            <div className="name-container">
            <div>
            <h3>Hello, my name is </h3>
            
        {myInfo.map((myInfo)=>{
            return(
                <div>
            <h1>{myInfo.name}</h1>

            <p>{myInfo.slogan}</p>
            </div>
            );})}

            </div>
            <img src="/img/portfolioImg.png" alt=""/>
            <button>Resume</button>

            </div>

            <div className="mySkills-container">
              <h1>My Skills</h1>

          <ul>
            {myProcess.map((myProcess)=>{ 
            if(myProcess.category === "MySkills")
            return(  
                    
                    <li>{myProcess.title}</li>
            );})}

          


          </ul>
              <button>View More</button>
                                  
         
          
            </div>
            </header>
            <main>
            <div className="myFocus-container">
            <h1>My Focus</h1>

                <ul>  
                    {myProcess.map((myProcess)=>{ 
                if(myProcess.category === "MyFocus")
            return(  
                    
                    <li>
                    <h2>{myProcess.title}</h2>
                    <p>{myProcess.summary}</p>
                    </li>
            );})}

                
                </ul>
            </div>

            </main>
        </div>
       
    )
}


export default MyHeader
