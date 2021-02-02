import React, {useState} from 'react'
import AlgosBasic from './AlgosBasic';
import Coffee from './Coffee';
import LinkCard from './LinkCard';
import ProjectsBackstory from './ProjectsBackstory';



const Footer = props => {



    const [rotateMenu, setRotateMenu] = useState(false)


    const showAllTitles =(e)=>{
        console.log("div element was click"); 
        setRotateMenu(!rotateMenu)
    
    }

    const [AlgosComponent, setAlsogsComponent] = useState(true)

  


  const [myStoryTab, setMyStoryTab] = useState(true)
  const [codingTab, setCodingTab] = useState(true)
  const [projectsTab, setProjectTab] = useState(false)
  const [apprenticeshipTab, setApprenticeshipTab] = useState(false)
  const [statusUpdates, setStatusUpdates] = useState(false)
  const [linkCard, setLinkCard] = useState(false)









 

  const codingTabHandler=()=>{
    console.log("coding tab was click");
    setCodingTab(true)
    setProjectTab(false)
    setApprenticeshipTab(false)
    setStatusUpdates(false)
    setLinkCard(false)

}

  
  const projectsTabHandler=()=>{
      console.log("projects tab was click");
      setCodingTab(false)
      setProjectTab(true)
      setApprenticeshipTab(false)
      setStatusUpdates(false)
      setLinkCard(false)
  }
  
  const apprenticeHandler=()=>{
      console.log("apprenticeship tab was click");
      setCodingTab(false)
      setProjectTab(false)
      setApprenticeshipTab(true)
      setStatusUpdates(false)
      setLinkCard(false)


  }


  const statusUpdatesHandler=()=>{
      console.log("apprenticeship tab was click");
      setCodingTab(false)
      setProjectTab(false)
      setApprenticeshipTab(false)
      setStatusUpdates(true)
      setLinkCard(false)

  }


  const linkCardHandler=()=>{
    console.log("apprenticeship tab was click");
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
                    background: codingTab? "whitesmoke" : "#0080BF",
                    color: codingTab? "#0080BF":"white",
                    transition: ".3s"}}
                    onClick={codingTabHandler}


                    >Coding Challenges</button>
                </li>
                <li>
                    <button
                     style={{
                        background: apprenticeshipTab? "whitesmoke" : "#0080BF",
                        color: apprenticeshipTab? "#0080BF":"white",
                        transition: ".3s"}}
                        onClick={apprenticeHandler}
                    
                    >SPA Development</button>
                </li>
                <li>
                <button
                style={{
                    background: projectsTab? "whitesmoke" : "#0080BF",
                    color: projectsTab? "#0080BF":"white",
                    transition: ".3s"}}
                    onClick={projectsTabHandler}


                >App Laboratory</button>
                </li>

                <li>
                <button
                    style={{
                        background: statusUpdates? "whitesmoke" : "#0080BF",
                        color: statusUpdates? "#0080BF":"white",
                        transition: ".3s"}}
                        onClick={statusUpdatesHandler}
                
                >Updates</button>
                </li>
                
                <li>
                <button
                    style={{
                        background: linkCard? "whitesmoke" : "#0080BF",
                        color: linkCard? "#0080BF":"white",
                        transition: ".3s"}}
                        onClick={linkCardHandler}
                
                >About Me</button>
                </li>
            </ul>

            </div>

        </footer>
      
</div>

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
       style={{ display: linkCard ? "grid" : "none"}}
                >
                <LinkCard></LinkCard>
      </section>

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