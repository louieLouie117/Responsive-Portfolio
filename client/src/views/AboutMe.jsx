import React, {useState, useEffect} from 'react'
import AlgosBasic from '../components/AlgosBasic'
import MyStory from '../components/MyStory'
import modules from "../modules/AboutMe.modules.css"
import axios from 'axios'
import { set } from 'mongoose'
import ProjectsBackstory from '../components/ProjectsBackstory'
import StatusUpdates from '../components/StatusUpdates'
import Coffee from '../components/Coffee'


const AboutMe = props => {

    // state for Icon titles
    const [faceBookTitle, setFaceBookTitle] = useState(false)
    const [tiktokTitle, setTiktokTitle] = useState(false)
    const [instagramTitle, setInstagramTitle] = useState(false)
    const [githubTitle, setGithubTitle] = useState(false)
    const [LinkedInTitle, setLinkedInTitle] = useState(false)
    const [blurImg, setBlurImg] = useState(false)
    const [rotateMenu, setRotateMenu] = useState(false)
    const [devTitle, setDevTitle] = useState(true)


    const facebookIcon = (e) =>{
        console.log("Icon was click");
        setFaceBookTitle(!faceBookTitle)
    }
    const tiktokIcon = (e) =>{
        console.log("Icon was click");
        setTiktokTitle(!tiktokTitle)
    }
    const instagramIcon = (e) =>{
        console.log("Icon was click");
        setInstagramTitle(!instagramTitle)
    }
    const githubIcon = (e) =>{
        console.log("Icon was click");
        setGithubTitle(!githubTitle)
    }
    const linkedinIcon = (e) =>{
        console.log("Icon was click");
        setLinkedInTitle(!LinkedInTitle)
    }

    const showAllTitles =(e)=>{
        console.log("div element was click"); 
        setFaceBookTitle(!faceBookTitle)
        setTiktokTitle(!tiktokTitle)
        setInstagramTitle(!instagramTitle)
        setGithubTitle(!githubTitle)
        setLinkedInTitle(!LinkedInTitle)
        setBlurImg(!blurImg)
        setRotateMenu(!rotateMenu)
        setDevTitle(!devTitle)

    }


    // state for navigation tabs
    const [myStoryTab, setMyStoryTab] = useState(true)
    const [codingTab, setCodingTab] = useState(false)
    const [projectsTab, setProjectTab] = useState(false)
    const [apprenticeshipTab, setApprenticeshipTab] = useState(false)
    const [statusUpdates, setStatusUpdates] = useState(false)


    // hide and show sections/components
    const [MyStoryComponentDesktop, setMyStoryComponentDesktop] = useState(true)
    const [MyStoryComponentMobile, setMyStoryComponentMobile] =  useState(false)



    const hideSectionHandler = ()=>{
        console.log("section button was click");
        setMyStoryComponentMobile(false)
        
        setProjectTab(false)
        setStatusUpdates(false)
        setApprenticeshipTab(false)

        
    }


    
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

        
        <div className="aboutMe-container">
        

{myInfo.map((myInfo)=>{
        return(
            <main>



            
                        <section 
                                              
                        // style={{display: MyStoryComponentMobile ? "grid" : "none",}}
                        > 
                        
                      
                            <MyStory></MyStory>
                        </section>
           

            
                       



              



                <section style={{ display: projectsTab ? "grid" : "none"}}>


            {(() =>{if (window.innerWidth < "1100") {
                    return(
                        <button
                        onClick={hideSectionHandler}                      
                        >X</button>

                        )}
                    })()}
                    {/* <nav>
                        <button >Basic</button>
                        <button >Sorting</button>
                        <button >Data Structure</button>
                
                    </nav> */}
                    <ProjectsBackstory></ProjectsBackstory>

                </section>


            <section style={{ display: statusUpdates ? "grid" : "none"}}>


            {(() =>{if (window.innerWidth < "1100") {
                    return(
                        <button
                        onClick={hideSectionHandler}                      
                        >X</button>

                        )}
                    })()}
                    {/* <nav>
                        <button >Basic</button>
                        <button >Sorting</button>
                        <button >Data Structure</button>
                
                    </nav> */}
                    <StatusUpdates></StatusUpdates>

                </section>

            <section style={{ display: apprenticeshipTab ? "grid" : "none"}}>


            {(() =>{if (window.innerWidth < "1100") {
                    return(
                        <button
                        onClick={hideSectionHandler}                      
                        >X</button>

                        )}
                    })()}
                    {/* <nav>
                        <button >Basic</button>
                        <button >Sorting</button>
                        <button >Data Structure</button>
                
                    </nav> */}
                    <Coffee></Coffee>
                </section>
            </main>
        );})}
            
            
        </div>
    )
}



export default AboutMe
