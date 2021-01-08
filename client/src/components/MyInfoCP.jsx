import React,{useState, useEffect} from 'react'
import axios from 'axios'
import modules from "../modules/MyInfo.modules.css"


const MyInfoCP = props => {



    const [name, setName] = useState()
    const [slogan, setSlogan] = useState()
    const [specification, setSpecification] = useState()
    const [myStory, setMyStory] = useState()
    const [languages, setLanguages] = useState()
    const [frameworksLib, setFrameworkLib] = useState()
    const [database, setDatabase] = useState()
    const [versionControl, setVersionControl] = useState()
    const [file, setFile] = useState()
    const [data, getFile] = useState({ name: "", path: "" });




    const onChange = e => {
        setFile(e.target.files[0]);
        console.log("file:",file);
      };

    const submitHandler =(e)=>{
        e.preventDefault()
        console.log(name);
        console.log(slogan);
        console.log(specification);
        console.log(myStory);
        console.log(languages);
        console.log(frameworksLib);
        console.log(database);
        console.log(versionControl);
        console.log(file);


        const fd = new FormData();
        fd.append('name', name);
        fd.append('slogan', slogan);
        fd.append('specification', specification);
        fd.append('myStory', myStory);
        fd.append('languages', languages);
        fd.append('frameworkLib', frameworksLib);
        fd.append('database', database);
        fd.append('versionControl', versionControl);
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


    if(myInfo === null){return(<h2>Loading...</h2>)}


    return (
        <div className="myInfo-container">
            <header>
                <form encType="multipart/form-data" onSubmit= {e => {submitHandler(e)}}>
                <h1>Hello, My Info components</h1>

                    <input 
                    type="text" 
                    onChange={e =>{setName(e.target.value)}}
                    placeholder="name"/>

                    <input 
                    type="text" 
                    onChange={e =>{setSlogan(e.target.value)}}
                    placeholder="slogan"/>

                    <input 
                    type="text" 
                    onChange={e =>{setSpecification(e.target.value)}}
                    placeholder="specification"/>

                    <textarea
                    onChange={e =>{setMyStory(e.target.value)}}
                    placeholder="My Story"
                    cols="30" rows="10"></textarea>
                    
                    <input 
                    type="text" 
                    onChange={e =>{setLanguages(e.target.value)}}
                    placeholder="languages"/>

                    <input 
                    type="text" 
                    onChange={e =>{setFrameworkLib(e.target.value)}}
                    placeholder="Frameworks/Libraries"/>
                    <input 
                    type="text" 
                    onChange={e =>{setDatabase(e.target.value)}}
                    placeholder="database"/>

                    <input 
                    type="text" 
                    onChange={e =>{setVersionControl(e.target.value)}}

                    placeholder="version control"/>
            
                    <input 
                    type="file" 
                    onChange={onChange}/>

                    <button> Save</button>




                </form>
            </header>

        {myInfo.map((myInfo)=>{
            return(
                <main>
                    <h4>{myInfo.name}</h4>
                    <img src={"/uploads/" + myInfo.file}/>
                    <h4>{myInfo.slogan}</h4>
                    <h4>{myInfo.specification}</h4>
                    <p>{myInfo.myStory}</p>
                    <h4>{myInfo.languages}</h4>
                    <h4>{myInfo.frameworksLibraries}</h4>
                    <h4>{myInfo.database}</h4>
                    <h4>{myInfo.versionControl}</h4>
                    <h4>{myInfo.design}</h4>
                </main>

        );})}


        </div>
    )
}



export default MyInfoCP
