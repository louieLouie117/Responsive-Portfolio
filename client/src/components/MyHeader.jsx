import React,{useEffect, useState} from 'react'
import axios from 'axios'


const MyHeader = props => {

const [firstItem, setFirstItem] = useState("")


var Cookies = document.cookie;
console.log("hello cookies",Cookies);

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
      console.log("getting item from cookies",getItem);
      
    const ItemSelected = e.target.id
    console.log("Current Item:",ItemSelected);

    const lastItemID = getItem + "text"
    document.cookie = "lastItem" + "=" + ItemSelected +";";


    const itemID = e.target.id + "text"

    document.getElementById(lastItemID).style.display ="none";
    document.getElementById(itemID).style.display ="block";


    
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
            <div>
            <h3>Hello, my name is </h3>
            
        {myInfo.map((myInfo)=>{
            return(
                <div>
            <h1>{myInfo.name}</h1>

            <p>{myInfo.slogan}</p>
            </div>
            );})}

            </div>
            <img src="/img/portfolioImg.png" alt=""/>
            <button>Resume</button>

            </div>

            <div className="mySkills-container">
              <h1>My Skills</h1>

          <ul>
            {myProcess.map((myProcess)=>{ 
            if(myProcess.category === "MySkills")
            return(  
                    
                    <li>{myProcess.title}</li>
            );})}

          


          </ul>
        <button>View More</button>
                                  
         
          
            </div>
            </header>
            <main>
            <div className="myFocus-container">
            <h1>My Focus</h1>

                <ul>  
                {myProcess.map((myProcess)=>{ 
                if(myProcess.category === "MyFocus")
                return(       
                    <li>
                    <h2 id={myProcess._id} onClick={(e)=>FocusItem(e)}>{myProcess.title}</h2>
                    <p onChange={firstItem}  id={myProcess._id +"text"}>{myProcess.summary}</p>

                        {/* <p   id={myProcess._id +"text"}>{myProcess.summary}</p> */}
                    {/* <p onChange={e => setShowFocusItem(e)}>{myProcess.summary}</p> */}
                    </li>
                );})}

                
                </ul>
            </div>

            </main>
        </div>
       
    )
}


export default MyHeader
