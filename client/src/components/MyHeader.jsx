import React,{useEffect, useState} from 'react'
import axios from 'axios'


const MyHeader = props => {



    const [title, setTitle] = useState()
    const [category, setCategory] = useState("Resume")
    const [summary, setSummary] = useState()
    const [filter, setFilter] = useState("Design")
    const [errors, setErrors] = useState(null);


    const submitHandler =(e)=> {
        alert("button was click")

        e.preventDefault()
        const fd = new FormData();
        fd.append('title', title);
        fd.append('category', category);
        fd.append('summary', summary);
       
        console.log(fd);

        // 
        axios
        .post("http://localhost:8000/api/myProcess",  fd, {           
            })
            .then((res)=> {
                console.log("res data here",res.data);
            })
            .catch((err)=>{
                console.log("Errors", err);
            }, [], submitHandler)


     
        setTitle("")
        setSummary("")


    }

const [firstItem, setFirstItem] = useState("")


const [resume, setResume] = useState(false)
const [resumeButton, setResumeButton] = useState("Resume")

const ResumeHandler =(e)=>{

    if(resumeButton === "Resume"){
        setResumeButton("Close")
        setResume(true)
    }

    if(resumeButton === "Close"){
        setResumeButton("Resume")
        setResume(false)
        setResumeMsg(false)
        setResumeMsgText("add a massage")
        setDisabled(false)
    }


}


const [resumeBTN, setResumeBTN] = useState(false)
const ResumeFade =()=>{
setResumeBTN(!resumeBTN)

}


const [resumeMsg, setResumeMsg] = useState(false)
const [resumeMsgText, setResumeMsgText] = useState("add a message")

const ResumeMsgHandler =()=>{
    setResumeMsg(!resumeMsg)

    if(resumeMsg === false){
        setResumeMsgText("just email")

    }
    if(resumeMsg === true){
        setResumeMsgText("add a message")

    }
}


var Cookies = document.cookie;
// console.log("hello cookies",Cookies);

const FocusItem = (e) =>{

    var allCookies = document.cookie;
    console.log(allCookies);

    function getCookie() {
        var item = "lastItem=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(item) == 0) {
            console.log("get item from cookies",c);

            return c.substring(item.length, c.length);
          }
          
        }

        return "";
      }

      var getItem = getCookie("lastItem");
    //   console.log("getting item from cookies",getItem);
      
    const ItemSelected = e.target.id
    console.log("Current Item:",ItemSelected);

    const lastItemID = getItem + "list"
    document.cookie = "lastItem" + "=" + ItemSelected +";";


    const itemID = e.target.id + "list"

    document.getElementById(lastItemID).style.height ="20px";
    document.getElementById(itemID).style.height ="250px";
    document.getElementById(itemID).style.transform ="smooth";
    document.getElementById(itemID).style.transition =".5s";




    
}

const MoveItem = (e) =>{

    var allCookies = document.cookie;
    console.log(allCookies);

    function getCookie() {
        var item = "lastItem=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(item) == 0) {
            console.log("get item from cookies",c);

            return c.substring(item.length, c.length);
          }
          
        }

        return "";
      }

      var getItem = getCookie("lastItem");
      console.log("getting item from cookies",getItem);
      
    const ItemSelected = e.target.id
    console.log("Current Item:",ItemSelected);

    const lastItemID = getItem + "list"
    document.cookie = "lastItem" + "=" + ItemSelected +";";

    const lastItemIDList = getItem + "list"
    document.cookie = "lastItem" + "=" + ItemSelected +";";


    const itemIDText = e.target.id;
    const itemID = e.target.id + "list"


    document.getElementById(lastItemID).style.height ="20px";
     document.getElementById(itemID).style.height ="auto";
    // document.getElementById(itemID).style.transform ="smooth";
    // document.getElementById(itemID).style.transition =".5s";
    document.getElementById(itemID).style.gridColumn ="1/2";
    document.getElementById(itemID).style.gridRow ="1/4";
    document.getElementById(lastItemIDList).style.gridColumn ="auto";
    document.getElementById(lastItemIDList).style.gridRow ="auto";


}

const [disabled, setDisabled] = useState(false)
const [disabledText, setDisabledText] = useState(0)

const emailHandler =(e)=>{
    
    let textFromUser = e.target.value.length
    
    if (textFromUser === disabledText) {
    setDisabled(false)
        
    } else {
    setDisabled(true)
    }
    setTitle(e.target.value)
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


if(myInfo === null){return(<h2>Loading db...</h2>)}
if(myProcess === null){return(<h2>Loading db...</h2>)}


    return (

        <div className="myHeader-container">
            <header>
            <div className="name-container">
            <header>
            <h3>Hello, my name is </h3>
            
        {myInfo.map((myInfo)=>{
            return(
                <div>
            <h1>{myInfo.name}</h1>

            <p>{myInfo.slogan}</p>
            </div>
            );})}

            </header>
            {/* <div className="photo-container"> */}
            <img src="/img/portfolioImg.png" alt=""/>

            <button
            style={{
                background: resumeBTN ? "#3c78c7":"#2862AF",
                transition: ".5s",
                transform: "smooth"
        }}
            onClick={ResumeHandler}
            onMouseEnter={ResumeFade}
            onMouseLeave={ResumeFade}
            >{resumeButton}</button>
            {/* </div> */}
            </div>
            <aside
                style={{
                    top: resume ?  "190px" : "-300px",
                    paddingTop: resume ? "170px":"20px",
                
                    transition: "smooth",
                    transition: "1s"}}
            >
                <header>
        <h4>Where should I send my resume to?</h4>
        </header>
            <form onSubmit={(e)=> {submitHandler(e);}}
                  style={{
                    gridTemplateColumns: resumeMsg ? "1fr":"1fr 100px",
                    paddingTop: resumeMsg ? "20px":"20px",
                    paddingBottom: resumeMsg ? "120px":"110px",
                    paddingBottom: resume ? "200px":"20px",
                    transition: "smooth",
                    transition: "1s"}}
                    >
   

                        <input 
                        value={title}
                        type="email" 
                        onChange={(e) =>emailHandler(e)}
                        placeholder="email"/>

                        <input 
                        value={category}
                        // onChange={e =>{setCategory(e.target.value)}}
                        type="hidden"/>
                   

                        <textarea
                        style={{display: resumeMsg ? "block":"none"}}
                        value={summary}
                        onChange={e =>{setSummary(e.target.value)}}
                        placeholder="Message"
                        cols="30" rows="10"></textarea>

                
                        <button
                        disabled={!disabled}
                        type="submit"
                           style={{
                            gridColumn: resumeMsg ? "1/2":"2/3",
                            background: disabled ? "#2862AF":"#7093c2",
                            cursor: disabled ? "pointer":"default",
                            // color: disabled ? "white":"white",
                            transition: ".5s",
                        }}

                        // onClick= {e => {submitHandler(e)}}
                        >Send</button>
                        <p
                        onClick={ResumeMsgHandler}
                        >{resumeMsgText}</p>


                </form>
            </aside>

            <div className="mySkills-container">
              <h1>My Skills</h1>

          <ul>
            {myProcess.map((myProcess)=>{ 
            if(myProcess.category === "MySkills")
            return(  
                    
                    <li>{myProcess.title}</li>
            );})}

          


          </ul>
            </div>
            </header>




        
        {/* Mobile version */}

        {(() =>{
                    if (window.innerWidth < "750") {
                                     return(
            <main>
            <div className="myFocus-container">
            <h1>My Specializations</h1>

                <ul>  
                {myProcess.map((myProcess)=>{ 
                if(myProcess.category === "MyFocus")
                return(       
                    <li  id={myProcess._id +"list"}>
                    <h2 id={myProcess._id} onClick={(e)=>FocusItem(e)}>{myProcess.title}</h2>
                    <p onChange={firstItem}  id={myProcess._id +"text"}>{myProcess.summary}</p>

                        {/* <p   id={myProcess._id +"text"}>{myProcess.summary}</p> */}
                    {/* <p onChange={e => setShowFocusItem(e)}>{myProcess.summary}</p> */}
                    </li>
                );})}

                
                </ul>
            </div>

            </main>    

)}
})()}

        {/* Desktop version */}

            {(() =>{
                    if (window.innerWidth > "750") {
                                     return(
            <main>
            <div className="myFocus-container">
            <h1>My Specializations</h1>

                <ul>  
                {myProcess.map((myProcess)=>{ 
                if(myProcess.category === "MyFocus")
                return(       
                    <li  id={myProcess._id +"list"}>
                    <h2 id={myProcess._id} onClick={(e)=>MoveItem(e)}>{myProcess.title}</h2>
                    <p onChange={firstItem}  id={myProcess._id +"text"}>{myProcess.summary}</p>

                        {/* <p   id={myProcess._id +"text"}>{myProcess.summary}</p> */}
                    {/* <p onChange={e => setShowFocusItem(e)}>{myProcess.summary}</p> */}
                    </li>
                );})}

                
                </ul>
            </div>

            </main>


)}
})()}
        </div>
       
    )
}


export default MyHeader
