import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import AllProjects from '../components/AllProjects'
import CreateNewProject from '../components/CreateNewProject'
import MyInfoCP from '../components/MyInfoCP'
import MyProcessCP from '../components/MyProcessCP'
import UpdateProject from '../components/UpdateProject'
import { set } from "mongoose";

const Dashboard = props => {

    const logout = () => {
        axios
          .post(
            "http://localhost:8000/api/logout",
            {},
            {
              // need to send the cookie in request so server can clear it
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res);
          })
          .catch(console.log);
    
        navigate("/");
      };
    
  
      const [users, setUsers] = useState([]);
      const [email, setEmail] = useState();
      const [filter, setFilter] = useState();


  
   
    
      useEffect(() => {
        axios
          .get("http://localhost:8000/api/users", {
            withCredentials: true,
          })
          .then((res) => {
            setUsers(res.data);
            // setEmail(res.data[0].email)

          
            setFilter(res.data);
            console.log("get email",res.data);

          })
          .catch((err) => {
            console.log("Not Authorized!!!");
            console.log(err.response);
          // not authorized redirect to homepage
            navigate("/");
          });
      }, []);

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


  
          
    {/* {(() =>{
        if (filter === "cardona-luis@outlook.com") {
             return( */}
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

                    {/* <li>
                    {users.map((user) => (

                    <div key={user._id}>
                        
                    <ul>
                        <li>
                        {user.email}

                        </li>
                        </ul>
                    </div>
                    ))}
           
                    </li> */}

                    {/* <li>{filter}</li> */}
                    <li>

                    { <button onClick={logout}>Logout</button>}
                    </li>
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

{/* )}
})()} */}
       
        </div>
     
            
    )
}


Dashboard.propTypes = {

}

export default Dashboard
