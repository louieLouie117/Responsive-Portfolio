import { set } from 'mongoose';
import React, {useState} from 'react'
import AlgosBasic from './AlgosBasic';
import Coffee from './Coffee';
import LinkCard from './LinkCard';
import MyStory from './MyStory';
import ProjectsBackstory from './ProjectsBackstory';
import StatusUpdates from './StatusUpdates';



const Footer = props => {



    const [rotateMenu, setRotateMenu] = useState(false)


    const showAllTitles =(e)=>{
        console.log("div element was click"); 
        setRotateMenu(!rotateMenu)
    
    }

    const [AlgosComponent, setAlsogsComponent] = useState(true)

  


  const [myStoryTab, setMyStoryTab] = useState(true)
  const [workFlow, setWorkFlow] = useState(true)
  const [codingTab, setCodingTab] = useState(false)
  const [projectsTab, setProjectTab] = useState(false)
  const [apprenticeshipTab, setApprenticeshipTab] = useState(false)
  const [statusUpdates, setStatusUpdates] = useState(false)
  const [linkCard, setLinkCard] = useState(false)






 

  const workFlowTabHandler=()=>{
setWorkFlow(true)
    setCodingTab(false)
    setProjectTab(false)
    setApprenticeshipTab(false)
    setStatusUpdates(false)
    setLinkCard(false)

}


 

  const codingTabHandler=()=>{
    console.log("coding tab was click");
    setWorkFlow(false)
    setCodingTab(true)
    setProjectTab(false)
    setApprenticeshipTab(false)
    setStatusUpdates(false)
    setLinkCard(false)

}

  
  const projectsTabHandler=()=>{
      console.log("projects tab was click");
    setWorkFlow(false)
      setCodingTab(false)
      setProjectTab(true)
      setApprenticeshipTab(false)
      setStatusUpdates(false)
      setLinkCard(false)
  }
  
  const apprenticeHandler=()=>{
      console.log("apprenticeship tab was click");
    setWorkFlow(false)
      setCodingTab(false)
      setProjectTab(false)
      setApprenticeshipTab(true)
      setStatusUpdates(false)
      setLinkCard(false)


  }


  const statusUpdatesHandler=()=>{
      console.log("apprenticeship tab was click");
    setWorkFlow(false)
      setCodingTab(false)
      setProjectTab(false)
      setApprenticeshipTab(false)
      setStatusUpdates(true)
      setLinkCard(false)

  }


  const linkCardHandler=()=>{
    console.log("apprenticeship tab was click");
    setWorkFlow(false)
    setCodingTab(false)
    setProjectTab(false)
    setApprenticeshipTab(false)
    setStatusUpdates(false)
    setLinkCard(true)

}


    return (
        <div>
        <div className="myStoryFooter-container">
        <footer>
            <div className="footerNav">   
            <ul>  

            <li>       
                    <button
                    style={{
                    background: workFlow ? "whitesmoke" : "#2862AF",
                    color: workFlow ? "#2862AF":"white",
                    transition: ".3s"}}
                    onClick={workFlowTabHandler}


                    >My Workflow</button>
                </li>
                <li>       
                    <button
                    style={{
                    background: codingTab? "whitesmoke" : "#2862AF",
                    color: codingTab? "#2862AF":"white",
                    transition: ".3s"}}
                    onClick={codingTabHandler}


                    >Coding Challenges</button>
                </li>
                <li>
                    <button
                     style={{
                        background: apprenticeshipTab? "whitesmoke" : "#2862AF",
                        color: apprenticeshipTab? "#2862AF":"white",
                        transition: ".3s"}}
                        onClick={apprenticeHandler}
                    
                    >SPA Development</button>
                </li>
                <li>
                <button
                style={{
                    background: projectsTab? "whitesmoke" : "#2862AF",
                    color: projectsTab? "#2862AF":"white",
                    transition: ".3s"}}
                    onClick={projectsTabHandler}


                >App Laboratory</button>
                </li>

                <li>
                <button
                    style={{
                        background: statusUpdates? "whitesmoke" : "#2862AF",
                        color: statusUpdates? "#2862AF":"white",
                        transition: ".3s"}}
                        onClick={statusUpdatesHandler}
                
                >Updates</button>
                </li>
                
                <li>
                <button
                    style={{
                        background: linkCard? "whitesmoke" : "#2862AF",
                        color: linkCard? "#2862AF":"white",
                        transition: ".3s"}}
                        onClick={linkCardHandler}
                
                >About Me</button>
                </li>
            </ul>

            </div>

        </footer>
      
</div>

<div className="tabContent-container">

<section 
       style={{ display: workFlow ? "grid" : "none"}}
                >
                   <MyStory></MyStory>
      </section>

    <section 
       style={{ display: codingTab ? "grid" : "none"}}
                >
                   <AlgosBasic></AlgosBasic>
      </section>


      <section 
       style={{ display: apprenticeshipTab ? "grid" : "none"}}
                >
                   <Coffee></Coffee>
      </section>

          
      <section 
       style={{ display: projectsTab ? "grid" : "none"}}
                >
                 <ProjectsBackstory></ProjectsBackstory>
      </section>

      
      <section 
       style={{ display: statusUpdates ? "grid" : "none"}}
                >
                 <StatusUpdates></StatusUpdates>
      </section>
      
      <section 
       style={{ display: linkCard ? "grid" : "none"}}
                >
                <LinkCard></LinkCard>
      </section>
</div>
    </div>
    )
}



export default Footer


                  {/* <div className= "menuIcon-container">       
                    <div 
                    style={{ 
                        transform: rotateMenu ? ` rotate(0deg)` : `rotate(180deg)`,
                     transition: "1500ms"

                    }}
                    onClick={showAllTitles}
                    className="menuIcon-container">
                        <div 
                        className="menuIcon"
                        style={{ 
                            transform: rotateMenu ? ` rotate(0deg)` : `rotate(180deg)`,
                            transition: "2500ms"
    
                        }}
                        
                        ></div>
                        <div 
                        className="menuIcon"
                        style={{ 
                            transform: rotateMenu ? ` rotate(0deg)` : `rotate(180deg)`,
                            transition: "2000ms"
    
                        }}
                        ></div>
                        <div 
                        className="menuIcon"
                        style={{ 
                            transform: rotateMenu ? ` rotate(0deg)` : `rotate(180deg)`,
                            transition: "1500ms"
    
                        }}
            
                        ></div>
                    </div>

                    </div> */}