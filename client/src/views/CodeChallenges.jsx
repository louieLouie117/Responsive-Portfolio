import React, {useState} from 'react'
import AlgosBasic from '../components/AlgosBasic';
import AlgosSorting from '../components/AlgosSorting';
import AlgosData from '../components/AlgosData';


const CodeChallenges = props => {

    const [basic, setBasic] = useState(true)
    const [sorting, setSorting] = useState(false)
    const [data, setData] = useState(false)




    function showBasicAlgos(){
        setBasic(!basic)
        setSorting(false)
        setData(false)
    }

    function showSortingAlgos(){
        setSorting(!sorting)
        setBasic(false)
        setData(false)
    }

    
    function showDataAlgos(){
        setData(!data)
        setSorting(false)
        setBasic(false)

    }

    return (
        <div>
            <h1>Coding Challenges</h1>
            <button onClick={showBasicAlgos} id="AlgosBasic">Basic</button>
            <button onClick={showSortingAlgos} id="AlgosSorting">Sorting</button>
            <button onClick={showDataAlgos} id="AlgosData">Data Structure</button>


            <div style={{ display:  basic? "grid" : "none" }} > 
            <AlgosBasic/>
            </div>

            <div style={{ display:  sorting? "grid" : "none" }} > 
                <AlgosSorting/>
            </div>

            <div style={{ display:  data? "grid" : "none" }} > 
                <AlgosData/>
            </div>

            
        </div>
    )
}



export default CodeChallenges
