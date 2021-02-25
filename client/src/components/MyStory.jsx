import React, {useState, useEffect} from 'react'
import axios from 'axios'
import modules from "../modules/MyStory.modules.css"
import Footer from './Footer'


const MyStory = props => {

const [designButton, setDesignButton] = useState(false)
const [uiButton, setUiButton] = useState(false)
const [dbButton, setDbButton] = useState(false)
const [serverButton, setServerButton] = useState(false)




const DesignButtonHandler =()=>{
    setDesignButton(!designButton)   
}

const UiButtonHandler =()=>{
    setUiButton(!uiButton)
        
}


const DbButtonHandler =()=>{
    setDbButton(!dbButton)   
}

const ServerButtonHandler =()=>{
    setServerButton(!serverButton)   
}

const [designBox, setDesignBox] = useState(false)
const [uiDevelopmentBox, setUiDevelopmentBox] = useState(false)
const [serverBox, setServerBox] = useState(false)
const [dbBox, setDbBox] = useState(false)





const DesignBoxHandler = (e)=>{
    setDesignBox(!designBox)
    setUiDevelopmentBox(false)
    setDbBox(false)
    setServerBox(false)
    console.log(e.target);


    if (designBox === false) {
    e.target.innerText = "Done"
        
    }

    if (designBox === true) {
        e.target.innerText = "Reread."
        }

}


const uiBoxHandler = (e)=>{
    setUiDevelopmentBox(!uiDevelopmentBox)
    setDesignBox(false)
    setDbBox(false)
    setServerBox(false)
    if (uiDevelopmentBox === false) {
        e.target.innerText = "Done"
            
        }
    
        if (uiDevelopmentBox === true) {
            e.target.innerText = "Reread."
            }
}


const ServerBoxHandler = (e)=>{
    setServerBox(!serverBox)
    setDesignBox(false)
    setUiDevelopmentBox(false)
    setDbBox(false)
   
    if (serverBox === false) {
        e.target.innerText = "Done"
            
        }
    
        if (serverBox === true) {
            e.target.innerText = "Reread."
            }
}



const DbBoxHandler = (e)=>{
    setDbBox(!dbBox)
    setDesignBox(false)
    setUiDevelopmentBox(false)
    setServerBox(false)
    if (dbBox === false) {
        e.target.innerText = "Done"
            
        }
    
        if (dbBox === true) {
            e.target.innerText = "Reread."
            }
}



 const [likeEd, setLikeEd] = useState(true)


 const educationLikeHandler =(data, e)=>{

    if (likeEd === true) {
    // increases the likes
     data.educationLikes = data.educationLikes + 1
     e.target.innerText = "undo"
     setLikeEd(false)

     
     const fd = new FormData();
     fd.append('educationLikes', data.educationLikes);

     axios
     .put("http://localhost:8000/api/myInfo/update/" + data._id, fd)
     .then((res) =>{
         console.log("submitted");
         console.log(res);
         // console.log(updateBoolean);

     })
     .catch((err) =>{
         console.log("something went wrong");
         console.log(err);
     })

    //  alert(`You are the ${data.educationLikes} person to like Coding Dojo 😊`)
 
    }

    if (likeEd === false) {
        // increases the likes
     data.educationLikes = data.educationLikes - 1
     e.target.innerText = "like"
     setLikeEd(true)

     
     const fd = new FormData();
     fd.append('educationLikes', data.educationLikes);

     axios
     .put("http://localhost:8000/api/myInfo/update/" + data._id, fd)
     .then((res) =>{
         console.log("submitted");
         console.log(res);
         // console.log(updateBoolean);

     })
     .catch((err) =>{
         console.log("something went wrong");
         console.log(err);
     })
        
    }

     

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
    }, [], likeEd)


    
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
        <div className="myStory-container">
           


        {myInfo.map((myInfo)=>{
        return(

            <aside>
                <div>
                    <h2>Thank you.</h2>
                    <p>{ myInfo.myStory }</p>
                </div>


            </aside>
        );})}


       
            <aside>


{/* Mobile Version */}



<ul>

<div id="lineBrake"></div>

    <div id="phase1">
<h2 >Phase 1: Design and Plan</h2>
 </div>
    <li 
    className="stage1"                    
    style={{
         position: designBox ? "fixed" : "static",
         width: designBox ? "" : "300px",
         top: designBox ? 0 : 0,
         left: designBox ? 0 : 0,
         height: designBox ? "95%" : "300px",
         padding: designBox ? "20px": "30px",
         zIndex: designBox ? "120" : "0",
         gridRow: designBox ? "1/2" : "",
         gridColumn: designBox ? "1/2" : "",
         transition: "2s"}}>
        <h3>Design UX Prototype</h3>
        <img 
            style={{
                height: designBox ? "5px" : "112px",
                transition: "1.5s "}}
        src="/img/designImg.png" alt=""/>

        <ul
        className="loop-container"
        style={{height: designBox ? "97%" : "60px",}}
        >
        {myProcess.map((myProcess)=>{
            if (myProcess.category === "Design")
                return(
                    <li>  
                        <h2 style={{
                            display: designBox ? "block" : "none",
                            transition: "1.5s "}}>{myProcess.title}</h2>
                        <p style={{display: designBox ? "block" : "none",}}
                        >{myProcess.summary}</p>
                    </li>

                );})}
        </ul>

        <button 
         style={{
            background: designButton ? "#2862AF" : "white",
            color: designButton ? "white" : "#2862AF",
            transition: ".3s"}}
        onMouseEnter={DesignButtonHandler}
        onMouseLeave={DesignButtonHandler}
        onClick={DesignBoxHandler}
         > View</button>
      
     
    </li>


   
    <li 
    className="stage3"                    
    style={{
         position: dbBox ? "fixed" : "relative",
         width: dbBox ? "" : "300px",
         top: dbBox ? 0 : 0,
         left: dbBox ? 0 : 0,
         height: dbBox ? "95%" : "300px",
         padding: dbBox ? "20px": "30px",
         zIndex: dbBox ? "120" : "0",
         gridRow: dbBox ? "1/2" : "",
         gridColumn: dbBox ? "1/2" : "",
         transition: "2s"}}>
        <h3>Relationship and db</h3>
        <img 
            style={{
                height: dbBox ? "5px" : "112px",
                transition: "1.5s "}}
        src="/img/relationshipDdImg.png" alt=""/>

        <ul
        className="loop-container"
        style={{height: dbBox ? "97%" : "60px",}}
        >
        {myProcess.map((myProcess)=>{ 
            if(myProcess.category === "DataBase")
        return(
            <div>
           
                <li>  
                    <h2 style={{
                    display: dbBox ? "block" : "none",
                    transition: "1.5s "}}>{myProcess.title}</h2>
                    <p
                    style={{display: dbBox ? "block" : "none",}}
                    >{myProcess.summary}</p>
                </li>
            </div>

        );})}
          

        </ul>
        
        <button 
        style={{
            background: dbButton ? "#2862AF" : "white",
            color: dbButton ? "white" : "#2862AF",
            transition: "1s"}}
        onMouseEnter={DbButtonHandler}
        onMouseLeave={DbButtonHandler}
        onClick={DbBoxHandler}
            > View</button>
    </li>

<h2 id="phase2">Phase 2: Development</h2>

    <li
    className="stage2"                    
     style={{
         position: uiDevelopmentBox ? "fixed" : "relative",
         width: uiDevelopmentBox ? "" : "300px",
         top: uiDevelopmentBox ? 0 : 0,
         left: uiDevelopmentBox ? 0 : 0,
         height: uiDevelopmentBox ? "95%" : "300px",
         padding: uiDevelopmentBox ? "20px": "30px",
         zIndex: uiDevelopmentBox ? "120" : "0",
         gridRow: uiDevelopmentBox ? "1/2" : "",
         gridColumn: uiDevelopmentBox ? "1/2" : "",
         transition: "2s"}}>
        <h3>UI Development</h3>
        <img 
            style={{
                height: uiDevelopmentBox ? "5px" : "112px",
                transition: "1.5s "}}
        src="/img/uiDevelopmentImg.png" alt=""/>

         <ul
        className="loop-container"
        style={{height: uiDevelopmentBox ? "97%" : "60px",}}
        >
        {myProcess.map((myProcess)=>{ 
            if (myProcess.category === "UIDevelopment") 
              return(
           
                <li>  
                    <h2 style={{
                    display: uiDevelopmentBox ? "block" : "none",
                    transition: "1.5s "}}>{myProcess.title}</h2>
                    <p
                    style={{display: uiDevelopmentBox ? "block" : "none",}}
                    >{myProcess.summary}</p>
                </li>

        );})}
          

        </ul>
        
        
        <button 
        style={{
            background: uiButton ? "#2862AF" : "white",
            color: uiButton ? "white" : "#2862AF",
            transition: "1s"}}
        onMouseEnter={UiButtonHandler}
        onMouseLeave={UiButtonHandler}
        onClick={uiBoxHandler}
            > View</button>
    </li>


    <li 
    className="stage4"                    
    style={{
         position: serverBox ? "fixed" : "relative",
         width: serverBox ? "" : "300px",
         top: serverBox ? 0 : 0,
         left: serverBox ? 0 : 0,
         height: serverBox ? "95%" : "300px",
         padding: serverBox ? "20px": "30px",
         zIndex: serverBox ? "120" : "0",
         gridRow: serverBox ? "1/2" : "",
         gridColumn: serverBox ? "1/2" : "",
         transition: "2s"}}>
        <h3>Server Development</h3>
        <img 
            style={{
                height: serverBox ? "5px" : "112px",
                transition: "1.5s "}}
        src="/img/serverDBDevelopmentImg.png" alt=""/>

              <ul
        className="loop-container"
        style={{height: serverBox ? "97%" : "60px",}}
        >


                            
                     
    {myProcess.map((myProcess)=>{ 
        if(myProcess.category === "Server")
        return(
           
                <li>  
                    <h2 style={{
                    display: serverBox ? "block" : "none",
                    transition: "1.5s "}}>{myProcess.title}</h2>
                    <p
                    style={{display: serverBox ? "block" : "none",}}
                    >{myProcess.summary}</p>
                </li>

        );})}
          

        </ul>
        <button 
        style={{
            background: serverButton ? "#2862AF" : "white",
            color: serverButton ? "white" : "#2862AF",
            transition: "1s"}}
        onMouseEnter={(e)=> ServerButtonHandler(e)}
        onMouseLeave={ServerButtonHandler}
        onClick={ServerBoxHandler}
            > View</button>
    </li>



</ul>
          

        {/* Desktop Version */}

{/*         
{(() =>{
                    if (window.innerWidth > "1100") {
                                     return(

        
                <ul>

                <div id="lineBrake"></div>

                    <div id="phase1">
                <h2 >Phase 1: Design and Plan</h2>
                 </div>
                    <li 
                    className="stage1"                    
                    style={{
                         position: designBox ? "absolute" : "relative",
                         width: designBox ? "85%" : "300px",
                         height: designBox ? "80%" : "300px",
                         padding: designBox ? "30px": "30px",
                         zIndex: designBox ? "120" : "0",
                         gridRow: designBox ? "1/2" : "",
                         gridColumn: designBox ? "1/2" : "",
                         transition: ".3s"}}>
                        <h3>Design UX Prototype</h3>
                        <img 
                            style={{
                                height: designBox ? "5px" : "112px",
                                transition: "1.5s "}}
                        src="/img/designImg.png" alt=""/>

                        <ul
                        className="loop-container"
                        style={{height: designBox ? "97%" : "60px",}}
                        >
                        {myProcess.map((myProcess)=>{
                            if (myProcess.category === "Design")
                                return(
                                    <li>  
                                        <h2 style={{
                                            display: designBox ? "block" : "none",
                                            transition: "1.5s "}}>{myProcess.title}</h2>
                                        <p style={{display: designBox ? "block" : "none",}}
                                        >{myProcess.summary}</p>
                                    </li>

                                );})}
                        </ul>

                        <button 
                         style={{
                            background: designButton ? "#0080BF" : "white",
                            color: designButton ? "white" : "#0080BF",
                            transition: ".3s"}}
                        onMouseEnter={DesignButtonHandler}
                        onMouseLeave={DesignButtonHandler}
                        onClick={DesignBoxHandler}
                         > View</button>
                      
                     
                    </li>


                   
                    <li 
                    className="stage3"                    
                    style={{
                         position: dbBox ? "absolute " : "relative",
                         width: dbBox ? "85%" : "300px",
                         height: dbBox ? "80%" : "300px",
                         padding: dbBox ? "30px": "30px",
                         zIndex: dbBox ? "120" : "0",
                         gridRow: dbBox ? "1/2" : "",
                         gridColumn: dbBox ? "1/2" : "",
                         transition: ".3s"}}>
                        <h3>Relationship and db</h3>
                        <img 
                            style={{
                                height: dbBox ? "5px" : "112px",
                                transition: "1.5s "}}
                        src="/img/relationshipDdImg.png" alt=""/>

                        <ul
                        className="loop-container"
                        style={{height: dbBox ? "97%" : "60px",}}
                        >
                        {myProcess.map((myProcess)=>{ 
                            if(myProcess.category === "DataBase")
                        return(
                            <div>
                           
                                <li>  
                                    <h2 style={{
                                    display: dbBox ? "block" : "none",
                                    transition: "1.5s "}}>{myProcess.title}</h2>
                                    <p
                                    style={{display: dbBox ? "block" : "none",}}
                                    >{myProcess.summary}</p>
                                </li>
                            </div>

                        );})}
                          

                        </ul>
                        
                        <button 
                        style={{
                            background: dbButton ? "#0080BF" : "white",
                            color: dbButton ? "white" : "#0080BF",
                            transition: "1s"}}
                        onMouseEnter={DbButtonHandler}
                        onMouseLeave={DbButtonHandler}
                        onClick={DbBoxHandler}
                            > View</button>
                    </li>
              
            <h2 id="phase2">Phase 2: Development</h2>
              
                    <li
                    className="stage2"                    
                     style={{
                         position: uiDevelopmentBox ? "absolute " : "relative",
                         width: uiDevelopmentBox ? "85%" : "300px",
                         height: uiDevelopmentBox ? "80%" : "300px",
                         padding: uiDevelopmentBox ? "30px": "30px",
                         zIndex: uiDevelopmentBox ? "120" : "0",
                         gridRow: uiDevelopmentBox ? "1/2" : "",
                         gridColumn: uiDevelopmentBox ? "1/2" : "",
                         transition: ".3s"}}>
                        <h3>UI Development</h3>
                        <img 
                            style={{
                                height: uiDevelopmentBox ? "5px" : "112px",
                                transition: "1.5s "}}
                        src="/img/uiDevelopmentImg.png" alt=""/>

                         <ul
                        className="loop-container"
                        style={{height: uiDevelopmentBox ? "97%" : "60px",}}
                        >
                        {myProcess.map((myProcess)=>{ 
                            if (myProcess.category === "UIDevelopment") 
                              return(
                           
                                <li>  
                                    <h2 style={{
                                    display: uiDevelopmentBox ? "block" : "none",
                                    transition: "1.5s "}}>{myProcess.title}</h2>
                                    <p
                                    style={{display: uiDevelopmentBox ? "block" : "none",}}
                                    >{myProcess.summary}</p>
                                </li>

                        );})}
                          

                        </ul>
                        
                        
                        <button 
                        style={{
                            background: uiButton ? "#0080BF" : "white",
                            color: uiButton ? "white" : "#0080BF",
                            transition: "1s"}}
                        onMouseEnter={UiButtonHandler}
                        onMouseLeave={UiButtonHandler}
                        onClick={uiBoxHandler}
                            > View</button>
                    </li>


                    <li 
                    className="stage4"                    
                    style={{
                         position: serverBox ? "absolute " : "relative",
                         width: serverBox ? "85%" : "300px",
                         height: serverBox ? "80%" : "300px",
                         padding: serverBox ? "30px": "30px",
                         zIndex: serverBox ? "120" : "0",
                         gridRow: serverBox ? "1/2" : "",
                         gridColumn: serverBox ? "1/2" : "",
                         transition: ".3s"}}>
                        <h3>Server Development</h3>
                        <img 
                            style={{
                                height: serverBox ? "5px" : "112px",
                                transition: "1.5s "}}
                        src="/img/serverDBDevelopmentImg.png" alt=""/>

                              <ul
                        className="loop-container"
                        style={{height: serverBox ? "97%" : "60px",}}
                        >


                                            
                                     
                    {myProcess.map((myProcess)=>{ 
                        if(myProcess.category === "Server")
                        return(
                           
                                <li>  
                                    <h2 style={{
                                    display: serverBox ? "block" : "none",
                                    transition: "1.5s "}}>{myProcess.title}</h2>
                                    <p
                                    style={{display: serverBox ? "block" : "none",}}
                                    >{myProcess.summary}</p>
                                </li>

                        );})}
                          

                        </ul>
                        <button 
                        style={{
                            background: serverButton ? "#0080BF" : "white",
                            color: serverButton ? "white" : "#0080BF",
                            transition: "1s"}}
                        onMouseEnter={(e)=> ServerButtonHandler(e)}
                        onMouseLeave={ServerButtonHandler}
                        onClick={ServerBoxHandler}
                            > View</button>
                    </li>


           
                </ul>

                )}
    })()} */}
            </aside>
 


            
       
            
        </div>
    )
}



export default MyStory
