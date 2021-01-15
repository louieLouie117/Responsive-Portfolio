import e from 'cors'
import React, {useState} from 'react'
import AllProjects from '../components/AllProjects'
import CreateNewProject from '../components/CreateNewProject'
import MyInfoCP from '../components/MyInfoCP'
import MyProcessCP from '../components/MyProcessCP'
import UpdateProject from '../components/UpdateProject'

const Dashboard = props => {

    const [projects, setProjects] = useState(true)
    const [myInfo, setMyInfo] = useState()
    const [myProcess, setMyProcess] = useState()





 

    const projectHandler =()=> {
        setProjects(true)
        setMyInfo(false)
        setMyProcess(false)

        
    }

    const myInfoHandler =()=>{
        setProjects(false)
        setMyInfo(true)
        setMyProcess(false)
    }

    const myProcessHandler =()=>{
        setProjects(false)
        setMyInfo(false)
        setMyProcess(true)
    }



    return (

    <div >
    {(() =>{
        if ("cardona-luis@outlook.com" === "cardona-luis@outlook.com") {
             return(
        <div className="dashboard-container">
        <header>
            <nav>
                <ul>
                    <li
                    onClick={projectHandler}
                    >Projects</li>
                    <li
                    onClick={myInfoHandler} 
                    >My Info</li>
                    <li
                    onClick={myProcessHandler}
                    >My Process Blog</li>
                </ul>
            </nav>
        </header>

        <main>
            <section
                style={{display: projects ? "grid" : "none"}}
            >
                <AllProjects />
            </section>

            <section
                style={{display: myInfo ? "grid" : "none"}}
            >
                <MyInfoCP></MyInfoCP>
            </section>


            <section
                style={{display: myProcess ? "grid" : "none"}}
            >
            <MyProcessCP></MyProcessCP>

            </section>
        </main>      
</div>

)}
})()}
       
        </div>
     
            
    )
}


Dashboard.propTypes = {

}

export default Dashboard
