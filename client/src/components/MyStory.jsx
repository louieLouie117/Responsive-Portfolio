import React, {useState, useEffect} from 'react'
import axios from 'axios'
import modules from "../modules/MyStory.modules.css"


const MyStory = props => {


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


    if(myInfo === null){return(<h2>Loading...</h2>)}
    if(myProcess === null){return(<h2>Loading...</h2>)}
    

    return (
        <div className="myStory-container">
           

        {myInfo.map((myInfo)=>{
        return(

            <aside>
                <div>
                    <h2>My story</h2>
                    <p>{ myInfo.myStory }</p>
                </div>


                <div className="skills-container">
                    <h2>Skills, Technologies, and Education</h2>
                   <section>
                       <h3>Languages[<i>{myInfo.languages}</i>] </h3>
                        <h3>Frameworks/Libraries[<i>{myInfo.frameworksLibraries}</i>]</h3>
                        <h3>Database[<i>{myInfo.database}</i>]</h3>
                        <h3>Version Control[<i>{myInfo.versionControl}</i>] </h3>
                        <h3>Design[<i>{myInfo.design}</i>] </h3>
                        {/* <h3>Education[<i>Coding Dojo</i>] </h3> */}


                   </section>
                </div>
            </aside>
        );})}



{/* Mobile */}
{(() =>{
            if (window.innerWidth < "1100") {
            return(
            <aside>
            <h2>My Process</h2>
        

                <ul>

                {myProcess.map((myProcess)=>{
            return(
                    <li 
                    className="stage1"                    
                    style={{
                         position: designBox ? "static " : "relative",
                         width: designBox ? "90%" : "300px",
                         height: designBox ? "100vh" : "300px",
                         padding: designBox ? "10px": "30px",
                         zIndex: designBox ? "120" : "0",
                         transition: ".3s"}}>
                        <h3>Design UX Prototype</h3>
                        <img 
                            style={{
                                height: designBox ? "5px" : "112px",
                                transition: "1.5s "}}
                        src="/img/designImg.png" alt=""/>

                        <p 
                        style={{
                            height: designBox ? "auto" : "60px",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? </p>

                        <h2 style={{
                            display: designBox ? "block" : "none",
                            transition: "1.5s "}}>{myProcess.title}</h2>
                        <p 
                        style={{
                            display: designBox ? "block" : "none",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.</p>

                    
                        <a 
                            onClick={DesignBoxHandler}
                            href="#"> Read more</a>
                    </li>

                    );})}

                    <li
                    className="stage2"                    
                     style={{
                        position: designBox ? "static " : "relative",
                         width: uiDevelopmentBox ? "90%" : "300px",
                         height: uiDevelopmentBox ? "100vh" : "300px",
                         padding: uiDevelopmentBox ? "10px": "30px",
                         zIndex: uiDevelopmentBox ? "120" : "0",
                         transition: ".3s"}}>
                        <h3>UI Development</h3>
                        <img 
                            style={{
                                height: uiDevelopmentBox ? "5px" : "112px",
                                transition: "1.5s "}}
                        src="/img/uiDevelopmentImg.png" alt=""/>

                        <p 
                        style={{
                            height: uiDevelopmentBox ? "auto" : "60px",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? </p>

                        <h2 style={{
                            display: uiDevelopmentBox ? "block" : "none",
                            transition: "1.5s "}}>Section</h2>
                        <p 
                        style={{
                            display: uiDevelopmentBox ? "block" : "none",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.</p>

                        <h2 style={{
                            display: uiDevelopmentBox ? "block" : "none",
                            transition: "1.5s "}}>Section</h2>
                        <p 
                        style={{
                            display: uiDevelopmentBox ? "block" : "none",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.</p>

                        
                        
                        <a 
                            onClick={uiBoxHandler}
                            href="#"> Read more</a>
                    </li>
                                  

                    <li 
                    className="stage3"                    
                    style={{
                        position: designBox ? "static " : "relative",
                         width: dbBox ? "90%" : "300px",
                         height: dbBox ? "100vh" : "300px",
                         padding: dbBox ? "10px": "30px",
                         zIndex: dbBox ? "120" : "0",
                         

                         transition: ".3s"}}>
                        <h3>Relashanship and db</h3>
                        <img 
                            style={{
                                height: dbBox ? "5px" : "112px",
                                transition: "1.5s "}}
                        src="/img/relationshipDdImg.png" alt=""/>

                        <p 
                        style={{
                            height: dbBox ? "auto" : "60px",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? </p>

                        <h2 style={{
                            display: dbBox ? "block" : "none",
                            transition: "1.5s "}}>Section</h2>
                        <p 
                        style={{
                            display: dbBox ? "block" : "none",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.</p>

                        <h2 style={{
                            display: dbBox ? "block" : "none",
                            transition: "1.5s "}}>Section</h2>
                        <p 
                        style={{
                            display: dbBox ? "block" : "none",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.</p>

                        
                        
                        <a 
                            onClick={DbBoxHandler}
                            href="#"> Read more</a>
                    </li>

                                           
                    <li 
                    className="stage4"                    
                    style={{
                        position: designBox ? "static " : "relative",
                         width: serverBox ? "90%" : "300px",
                         height: serverBox ? "90%" : "300px",
                         padding: serverBox ? "10px": "30px",
                         zIndex: serverBox ? "120" : "0",
                         marginTop: serverBox ? "-200px" : "0",
                         transition: ".3s"}}>
                        <h3>Server Development</h3>
                        <img 
                            style={{
                                height: serverBox ? "5px" : "112px",
                                transition: "1.5s "}}
                        src="/img/serverDBDevelopmentImg.png" alt=""/>

                        <p 
                        style={{
                            height: serverBox ? "auto" : "60px",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? </p>

                        <h2 style={{
                            display: serverBox ? "block" : "none",
                            transition: "1.5s "}}>Section</h2>
                        <p 
                        style={{
                            display: serverBox ? "block" : "none",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.</p>

                        <h2 style={{
                            display: serverBox ? "block" : "none",
                            transition: "1.5s "}}>Section</h2>
                        <p 
                        style={{
                            display: serverBox ? "block" : "none",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.</p>

                        
                        
                        <a 
                            onClick={ServerBoxHandler}
                            href="#"> Read more</a>
                    </li>


                    <li></li>

           
                </ul>
            </aside>
            )}
            })()}



{/* Desktop */}
            {(() =>{
                        if (window.innerWidth > "1100") {
                            return(
            <aside>
            <h2>My Process</h2>
                <ul>
                    

                {myProcess.map((myProcess)=>{
            return(
                    <li 
                    className="stage1"                    
                    style={{
                         position: designBox ? "absolute " : "relative",
                         width: designBox ? "97%" : "300px",
                         height: designBox ? "90%" : "300px",
                         padding: designBox ? "30px": "30px",
                         zIndex: designBox ? "120" : "0",
                         gridRow: designBox ? "1/2" : "1/2",
                         gridColumn: designBox ? "1/2" : "1/2",
                         transition: ".3s"}}>
                        <h3>Design UX Prototype</h3>
                        <img 
                            style={{
                                height: designBox ? "5px" : "112px",
                                transition: "1.5s "}}
                        src="/img/designImg.png" alt=""/>

                        <h2 style={{
                            display: designBox ? "block" : "none",
                            transition: "1.5s "}}>{myProcess.title}</h2>
                        <p 
                        style={{
                            height: designBox ? "auto" : "60px",
                            }}
                        
                        >{myProcess.summary}</p>

                     
                        <a 
                            onClick={DesignBoxHandler}
                            href="#"> Read more</a>
                    </li>

                    );})}

                    <li
                    className="stage2"                    
                     style={{
                         position: uiDevelopmentBox ? "absolute " : "relative",
                         width: uiDevelopmentBox ? "97%" : "300px",
                         height: uiDevelopmentBox ? "90%" : "300px",
                         padding: uiDevelopmentBox ? "30px": "30px",
                         zIndex: uiDevelopmentBox ? "120" : "0",
                         gridRow: uiDevelopmentBox ? "1/2" : "1/2",
                         gridColumn: uiDevelopmentBox ? "1/2" : "2/3",
                         transition: ".3s"}}>
                        <h3>UI Development</h3>
                        <img 
                            style={{
                                height: uiDevelopmentBox ? "5px" : "112px",
                                transition: "1.5s "}}
                        src="/img/uiDevelopmentImg.png" alt=""/>

                        <p 
                        style={{
                            height: uiDevelopmentBox ? "auto" : "60px",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? </p>

                        <h2 style={{
                            display: uiDevelopmentBox ? "block" : "none",
                            transition: "1.5s "}}>Section</h2>
                        <p 
                        style={{
                            display: uiDevelopmentBox ? "block" : "none",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.</p>

                        <h2 style={{
                            display: uiDevelopmentBox ? "block" : "none",
                            transition: "1.5s "}}>Section</h2>
                        <p 
                        style={{
                            display: uiDevelopmentBox ? "block" : "none",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.</p>

                        
                        
                        <a 
                            onClick={uiBoxHandler}
                            href="#"> Read more</a>
                    </li>
                   
                    <li 
                    className="stage3"                    
                    style={{
                         position: dbBox ? "absolute " : "relative",
                         width: dbBox ? "97%" : "300px",
                         height: dbBox ? "90%" : "300px",
                         padding: dbBox ? "30px": "30px",
                         zIndex: dbBox ? "120" : "0",
                         gridRow: dbBox ? "1/2" : "2/3",
                         gridColumn: dbBox ? "1/2" : "1/2",
                         transition: ".3s"}}>
                        <h3>Relashanship and db</h3>
                        <img 
                            style={{
                                height: dbBox ? "5px" : "112px",
                                transition: "1.5s "}}
                        src="/img/relationshipDdImg.png" alt=""/>

                        <p 
                        style={{
                            height: dbBox ? "auto" : "60px",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? </p>

                        <h2 style={{
                            display: dbBox ? "block" : "none",
                            transition: "1.5s "}}>Section</h2>
                        <p 
                        style={{
                            display: dbBox ? "block" : "none",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.</p>

                        <h2 style={{
                            display: dbBox ? "block" : "none",
                            transition: "1.5s "}}>Section</h2>
                        <p 
                        style={{
                            display: dbBox ? "block" : "none",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.</p>

                        
                        
                        <a 
                            onClick={DbBoxHandler}
                            href="#"> Read more</a>
                    </li>
              
                    <li 
                    className="stage4"                    
                    style={{
                         position: serverBox ? "absolute " : "relative",
                         width: serverBox ? "97%" : "300px",
                         height: serverBox ? "90%" : "300px",
                         padding: serverBox ? "30px": "30px",
                         zIndex: serverBox ? "120" : "0",
                         gridRow: serverBox ? "1/2" : "2/3",
                         gridColumn: serverBox ? "1/2" : "2/3",
                         transition: ".3s"}}>
                        <h3>Server Development</h3>
                        <img 
                            style={{
                                height: serverBox ? "5px" : "112px",
                                transition: "1.5s "}}
                        src="/img/serverDBDevelopmentImg.png" alt=""/>

                        <p 
                        style={{
                            height: serverBox ? "auto" : "60px",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? </p>

                        <h2 style={{
                            display: serverBox ? "block" : "none",
                            transition: "1.5s "}}>Section</h2>
                        <p 
                        style={{
                            display: serverBox ? "block" : "none",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.</p>

                        <h2 style={{
                            display: serverBox ? "block" : "none",
                            transition: "1.5s "}}>Section</h2>
                        <p 
                        style={{
                            display: serverBox ? "block" : "none",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.</p>

                        
                        
                        <a 
                            onClick={ServerBoxHandler}
                            href="#"> Read more</a>
                    </li>


           
                </ul>
            </aside>
            )}
            })()}
            
        </div>
    )
}



export default MyStory
