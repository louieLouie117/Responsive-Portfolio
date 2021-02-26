import React,{useState, useEffect} from 'react'
import axios from 'axios'
import modules from "../modules/MyProcess.modules.css"


const MyProcessCP = props => {


    const [title, setTitle] = useState()
    const [category, setCategory] = useState()
    const [summary, setSummary] = useState()
    const [filter, setFilter] = useState("Design")

    const submitHandler =(e)=> {
        e.preventDefault()
        const fd = new FormData();
        fd.append('title', title);
        fd.append('category', category);
        fd.append('summary', summary);
       

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
        setCategory("")
        setSummary("")


    }


    const [itemId, setItemId] = useState()
    const [refreshPage, setRefreshPage] = useState(false)

    const EditData = (EditData)=>{

        setItemId(EditData._id)

        setTitle(EditData.title)
        setCategory(EditData.category)
        setSummary(EditData.summary)
       
        setRefreshPage(!refreshPage)


    }


     // Submit Edit Handler
     const SubmitEditHandler = (e)=>{
        const fd = new FormData();
        fd.append('title', title );
        fd.append('category', category);
        fd.append('summary', summary);
       
     

        // API call the the db
        axios
        .put("http://localhost:8000/api/myProcess/update/" + itemId, fd)
        .then((res) =>{
            console.log("submitted");
            console.log(res);
        })
        .catch((err) =>{
            console.log("something went wrong");
            console.log(err);
        }, [], SubmitEditHandler)

        // Clear input files
        setTitle("")
        setCategory("")
        setSummary("")
        setRefreshPage(!refreshPage)
  
    }



// delete item from db
const [deleteItem, setDeleteItem] = useState(null)
const deleteHandler =(deleteId, e)=>{
    // alert("button was click")
    axios.delete("http://localhost:8000/api/myProcess/delete/" + deleteId)
    .then((res)=>{
        const filterProject = myProcess.filter((myProcess)=> {
            return myProcess._id !== deleteId
        });

        setDeleteItem(filterProject);
    })

}


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
}, [filter, deleteItem, title])


if(myProcess === null){return(<h2>Loading db...</h2>)}

    return (
        <div className="myProcess-container">

            <header>
                <form encType="multipart/form-data" >
                    <h1>Hello, My Process</h1>

                        <input 
                        value={title}
                        type="text" 
                        onChange={e =>{setTitle(e.target.value)}}
                        placeholder="title"/>

                        <input 
                        value={category}
                        placeholder="Design, UIDevelopment, DataBase, Server, StatusUpdates CoffeeMsg"
                        onChange={e =>{setCategory(e.target.value)}}
                        type="text"/>
                   

                        <textarea
                        value={summary}
                        onChange={e =>{setSummary(e.target.value)}}
                        placeholder="Summary"
                        cols="30" rows="10"></textarea>

                        <button
                        onClick= {e => {submitHandler(e)}}
                        style={{display: refreshPage ? "none" : "block" }}
                        >+ new Article/Section</button>


                        <button
                        onClick={()=> SubmitEditHandler()}                            
                        style={{display: refreshPage ? "block" : "none" }}
                        >Save Changes</button>

                </form>



                <footer>
                <button
                    onClick={()=>{setFilter("MyFocus")}}
                    >MyFocus</button>

                    <button
                    onClick={()=>{setFilter("MySkills")}}
                    >MySkills</button>
                    <button
                    onClick={()=>{setFilter("Design")}}
                    >Design</button>

                    <button
                    onClick={()=>{setFilter("UIDevelopment")}}
                    >UI Development</button>

                    <button
                    onClick={()=>{setFilter("DataBase")}}
                    >Database</button>

                    <button
                    onClick={()=>{setFilter("Server")}}
                    >Server</button>

                    <button
                    onClick={()=>{setFilter("ProjectBackStory")}}
                    >Project Backstory</button>

                    <button
                    onClick={()=>{setFilter("StatusUpdates")}}
                    >Status/Updates</button>
                     <button
                    onClick={()=>{setFilter("CoffeeMsg")}}
                    >Coffee Message</button>
                    
                    <button
                    onClick={()=>{setFilter("Resume")}}
                    >Resume</button>

                  
                </footer>

            </header>


        
            <main>


                                           
            {myProcess.map((myProcess)=>{ 
                if(myProcess.category === filter)
            return(   
            <div>
                    <section>

                        <aside>
                            
                            <h4>{myProcess.title}</h4>
                            <h4>{myProcess.category}</h4>
                            <h4>Likes: {myProcess.likeCount}</h4>
                            
                            <a 
                            onClick={()=> EditData(myProcess)}                            
                            href="#"> Edit</a>

                            <a 
                            onClick={()=> deleteHandler(myProcess._id)}                            
                            href="#"> Delete</a>
                        </aside>
                        <p>{myProcess.summary}</p>
                    </section>
                
            </div>   

            );})}

            </main>
            
        </div>
    )
}



export default MyProcessCP
