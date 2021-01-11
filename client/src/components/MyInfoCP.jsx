import React,{useState, useEffect} from 'react'
import axios from 'axios'
import modules from "../modules/MyInfo.modules.css"


const MyInfoCP = props => {
    const [name, setName] = useState()
    const [slogan, setSlogan] = useState()
    const [title, setTitle] = useState()
    const [specification, setSpecification] = useState()
    const [myStory, setMyStory] = useState()
    const [languages, setLanguages] = useState()
    const [frameworksLib, setFrameworkLib] = useState()
    const [database, setDatabase] = useState()
    const [versionControl, setVersionControl] = useState()
    const [design, setDesign] = useState()
    const [education, setEducation] = useState()
    const [file, setFile] = useState()
    const [data, getFile] = useState({ name: "", path: "" });




    const onChange = e => {
        setFile(e.target.files[0]);
        console.log("file:",file);
      };

    // Create an new entry to the db
    const submitHandler =(e)=>{
        alert("button was click")
        e.preventDefault()
       
        const fd = new FormData();
        fd.append('name', name);
        fd.append('slogan', slogan);
        fd.append('title', title);
        fd.append('specification', specification);
        fd.append('myStory', myStory);
        fd.append('languages', languages);
        fd.append('frameworksLibraries', frameworksLib);
        fd.append('database', database);
        fd.append('versionControl', versionControl);
        fd.append('design', design);
        fd.append('education', education);
        fd.append('file', file);

        // 
        axios.post("http://localhost:8000/api/myInfo",  fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                  }             
            })
            .then((res)=> {
                getFile({
                    path:'http://localhost:8000/api/myInfo'+ res.data.path
                });
                console.log("res data here",res.data);
            })
            .catch((err)=>{
                console.log("Errors", err);
            }, [], submitHandler)

    }


    const [deleteItem, setDeleteItem] = useState(null)


    const deleteHandler =(deleteId, e)=>{
        alert("button was click")
        axios.delete("http://localhost:8000/api/myInfo/delete/" + deleteId)
        .then((res)=>{
            const filterProject = myInfo.filter((myInfo)=> {
                return myInfo._id !== deleteId
            });

            setDeleteItem(filterProject);
        })

    }



    // Edit Handler and state
    const [refreshPage, setRefreshPage] = useState(false)
    const [dataId, setDataId] = useState()
    // Change input files and to what data is in the db
    const EditHandler = (Data)=>{

        // set id to state to use on Axios
        setDataId(Data._id)

        // set state to use in the input files
        setName(Data.name)
        setSlogan(Data.slogan)
        setTitle(Data.title)
        setSpecification(Data.specification)
        setMyStory(Data.myStory)
        setLanguages(Data.languages)
        setFrameworkLib(Data.frameworksLibraries)
        setDatabase(Data.database)
        setVersionControl(Data.versionControl)
        setDesign(Data.design)
        setEducation(Data.education)

        setRefreshPage(!refreshPage)
     
    }

    // Submit Edit Handler
    const SubmitEditHandler = (e)=>{

        const fd = new FormData();
        fd.append('name', name );
        fd.append('slogan', slogan );
        fd.append('title', title);
        fd.append('specification', specification);
        fd.append('myStory', myStory);
        fd.append('languages', languages);
        fd.append('frameworksLibraries', frameworksLib);
        fd.append('database', database);
        fd.append('versionControl', versionControl);
        fd.append('design', design);
        fd.append('education', education);

        // API call the the db
        axios
        .put("http://localhost:8000/api/myInfo/update/" + dataId, fd)
        .then((res) =>{
            console.log("submitted");
            console.log(res);
        })
        .catch((err) =>{
            console.log("something went wrong");
            console.log(err);
        }, [], SubmitEditHandler)

        // Clear input files
        setName("")
        setSlogan("")
        setTitle("")
        setSpecification("")
        setMyStory("")
        setLanguages("")
        setFrameworkLib("")
        setDatabase("")
        setVersionControl("")
        setDesign("")
        setDataId("")
        setEducation("")
        setRefreshPage(!refreshPage)
  
    }
   


    // get all data for My Info db
    const [myInfo, setMyInfo] = useState(null)
    const apiGetAllMyInfo = 'http://localhost:8000/api/myInfo'

    useEffect(()=>{
        axios
        .get(apiGetAllMyInfo)
        .then((res) =>{
            setMyInfo(res.data.MyInfo)
            console.log(res.data.Project);
        })
        .catch((err)=> {
            console.log(err);
        }) 
        // refresh data must be inside the []
    }, [refreshPage])

    if(myInfo === null){return(<h2>Loading...</h2>)}


    



    return (
        <div className="myInfo-container">
          
      
            <header>
          
                <form encType="multipart/form-data" >
                <h1>Hello, My Info components</h1>

                    <input 
                    type="text" 
                    value={name}
                    onChange={e =>{setName(e.target.value)}}
                    placeholder="name"/>

                    <input 
                    type="text" 
                    value={slogan}
                    onChange={e =>{setSlogan(e.target.value)}}
                    placeholder="slogan"/>

                    <input 
                    type="text" 
                    value={title}
                    onChange={e =>{setTitle(e.target.value)}}
                    placeholder="title"/>

                    <input 
                    type="text" 
                    value={specification}
                    onChange={e =>{setSpecification(e.target.value)}}
                    placeholder="specification"/>

                    <textarea
                    value={myStory}
                    onChange={e =>{setMyStory(e.target.value)}}
                    placeholder="My Story"
                    cols="30" rows="10"></textarea>
                    
                    <input 
                    type="text" 
                    value={languages}
                    onChange={e =>{setLanguages(e.target.value)}}
                    placeholder="languages"/>

                    <input 
                    type="text" 
                    value={frameworksLib}
                    onChange={e =>{setFrameworkLib(e.target.value)}}
                    placeholder="Frameworks/Libraries"/>

                    <input 
                    type="text" 
                    value={database}
                    onChange={e =>{setDatabase(e.target.value)}}
                    placeholder="database"/>

                    <input 
                    type="text" 
                    value={versionControl}
                    onChange={e =>{setVersionControl(e.target.value)}}
                    placeholder="version control"/>

                    <input 
                    type="text" 
                    value={design}
                    onChange={e =>{setDesign(e.target.value)}}
                    placeholder="Design"/>

                    
                    <input 
                    type="text" 
                    value={education}
                    onChange={e =>{setEducation(e.target.value)}}
                    placeholder="education"/>
            
                    <input 
                    type="file" 
                    onChange={onChange}/>

                    <button
                    style={{display: refreshPage ? "none" : "block" }}
                    onClick= {e => {submitHandler(e)}}
                    >Create New</button>


                    <button
                    style={{display: refreshPage ? "block" : "none" }}
                    onClick= {e => {SubmitEditHandler(e)}}
                    > Save Changes</button>

                </form>

            </header>




        {myInfo.map((myInfo)=>{
            return(
                <main
                style={{display: refreshPage ? "none" : "grid" }}

                >
                    <div className="columns3">
                    <h4>{myInfo.name}</h4>

                    <a href="#"
                    onClick={()=>{EditHandler(myInfo)}}
                    >Edit</a>

                    <a 
                    href=""
                    onClick={()=>{deleteHandler(myInfo._id)}}
                    >Delete</a>
                    
                    </div>
                    <img src={"/uploads/" + myInfo.file}/>
                    <h4>{myInfo.slogan}</h4>
                    <h4>{myInfo.title}</h4>
                    <h4>{myInfo.specification}</h4>
                    <p>{myInfo.myStory}</p>
                    <h4>{myInfo.languages}</h4>
                    <h4>{myInfo.frameworksLibraries}</h4>
                    <h4>{myInfo.database}</h4>
                    <h4>{myInfo.versionControl}</h4>
                    <h4>{myInfo.design}</h4>
                    <h4>{myInfo.education}</h4>

                </main>

        );})}


        </div>
    )
}



export default MyInfoCP
