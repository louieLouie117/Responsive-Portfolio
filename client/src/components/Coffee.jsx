import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Coffee = props => {


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
        <div className="coffee-container">

            <header>

            {/* <h1>Single Page App</h1> */}
            <picture               >
                    <source media="(min-width: 600px)" srcSet="/img/coffeeDesktop.png"/>
                    <img src="/img/coffeeMobile.png" alt=""/>
            </picture>

            </header>

            <main>

            {myProcess.map((myProcess)=>{ 
                if(myProcess.category === "CoffeeMsg")
            return(   
                    <ul>
              
                        <li>
                            <h2>{myProcess.title}</h2>
                            <p>{myProcess.summary}</p>
                        </li>

                    </ul>
            );})}
                          

                <a href="https://www.buymeacoffee.com/luiscardona" target="blank">
                <img src="/img/coffeeButton.png" alt=""/>
                </a>

            </main>
            
        </div>
    )
}


export default Coffee
