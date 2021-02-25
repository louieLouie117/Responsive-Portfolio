import React,{useEffect, useState} from 'react'
import axios from 'axios'

const DevTools = props => {

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

if(myInfo === null){return(<h2>Loading db...</h2>)}

    return (
        <div className="devTools-container">
            <h2>Tools and Technologies</h2>
            
            <section>
            <div className="blueLine"></div>

        
            {myInfo.map((myInfo)=>{
            return(
                <ul>
                    <li>
                    <h2>Languages</h2>
                    <h3>{myInfo.languages}</h3>
                    </li>

                    <li>
                    <h2>Database</h2>
                    <h3>{myInfo.database}</h3>
                    </li>

                    <li>
                    <h2>Version Control</h2>
                    <h3>{myInfo.versionControl}</h3>
                    </li>

                    <li></li>
                </ul>

        );})}

            </section>

            <section>
            <div className="blueLine"></div>

            {myInfo.map((myInfo)=>{
            return(
                <ul>
                    <li id="frameworks">
                    <h2>Languages</h2>
                    <h3>{myInfo.frameworksLibraries}</h3>
                    </li>

                

                </ul>

        );})}

            </section>
            
        </div>
    )
}


export default DevTools
