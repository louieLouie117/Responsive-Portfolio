import React, {useState} from 'react'
import BasicAlgos from '../components/BasicAlgos'

const CodeChallenges = props => {

    const [basic, setBasic] = useState(true)


    function showBasicAlgos(){
        console.log("button was click");
        setBasic(!basic)
    }

    return (
        <div>
            <h1>Coding Challenges</h1>
            <button onClick={showBasicAlgos}>Basic</button>
            <div style={{ display:  basic? "grid" : "none" }} > 
            <BasicAlgos/>
            </div>

            
        </div>
    )
}



export default CodeChallenges
