import React, {useEffect, useState} from 'react'
import axios from 'axios'

// import modules from "../modules/Footer.modules.css"




const LinkCard = props => {


    const [resume, setResume] = useState(false)


    const resumeHandler =()=>{
        setResume(true)

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
        <div className="linkCard-container">
            <header
        
            style={{
                transition: "5s" 
            }}
            >

            <div className="portfolio-img">
            <img src="/img/selffy.png" alt=""
           />
        </div>  
            <div className="socialIcon-container">
                <a href="https://www.facebook.com/" target="blank">
                <img src="/img/icons/Iconfacebook.png" alt=""/>
                </a>
                
                <a href="https://www.tiktok.com/@luiedesign?lang=en" target="blank">
                <img src="/img/icons/IconTikTok.png" alt=""/>   
                </a>

                <a href="https://www.instagram.com/luiedesign/" target="blank">
                <img src="/img/icons/IconInstagram.png" alt=""/>  
                </a>

                <a href="https://github.com/louieLouie117" target="blank">
                <img src="/img/icons/IconGithub.png" alt=""/>  
                </a>

                <a href="https://www.linkedin.com/in/luis-cardona-3a51b2162/" target="blank">
                <img src="/img/icons/IconLinkedin.png" alt=""/>  
                </a>
            </div>
                
            </header>

            {myInfo.map((myInfo)=>{
        return(
            <main

            style={{
                transition: "3s" 
            }}

            
            >
                <h1>{myInfo.title}</h1>
                <h3>{myInfo.slogan}</h3>

                <p>{myInfo.specification}</p>
                

                {/* <button
                onClick={resumeHandler}

                >Resume</button> */}
                 
                
            </main>
        );})}
            
            
        </div>
    )
}


export default LinkCard
