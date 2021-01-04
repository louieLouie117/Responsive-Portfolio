import React, {useState} from 'react'
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
        e.target.innerText = "Read more."
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
            e.target.innerText = "Read more."
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
            e.target.innerText = "Read more."
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
            e.target.innerText = "Read more."
            }
}

    return (
        <div className="myStory-container">
           



            <aside>
                <div>
                    <h2>My story</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ipsa id non officiis veniam possimus facilis molestiae debitis totam, quidem minima magni doloremque assumenda hic saepe. Minima amet minus in!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, adipisci facere? Voluptatibus facilis ratione impedit velit labore, accusantium suscipit corporis in minus aperiam cumque repellat nesciunt, doloribus non ab eveniet?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla autem, rem delectus ipsa recusandae adipisci harum necessitatibus perferendis quod, facilis tenetur doloremque quis? Quis illum autem iusto sequi magni nobis!</p>
                </div>

                <div className="skills-container">
                    <h2>Skills and Technologies</h2>
                   <asie>
                       <h3>Languages[<i>JavaScript, C#, Python, Html5, CSS, Markdown</i>] </h3>
                        <h3>Frameworks/Libraries[<i>React, Express, Node, Express-fileupload, ASP.NET, Entity Framework, jQuery, SASS</i>]</h3>
                        <h3>Database[<i>MySQL, MongoDB</i>]</h3>
                        <h3>Version Control[<i>Git, GitHub</i>] </h3>
                   </asie>
                </div>
            </aside>





            <aside>
            <h2>My Process</h2>
                <ul>
                    <li></li>

                    <li 
                    className="stage1"                    
                    style={{
                         position: designBox ? "absolute " : "relative",
                         width: designBox ? "85%" : "300px",
                         height: designBox ? "90%" : "300px",
                         padding: designBox ? "40px": "30px",
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
                            transition: "1.5s "}}>Section</h2>
                        <p 
                        style={{
                            display: designBox ? "block" : "none",
                            }}
                        
                        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas distinctio recusandae labore vel quia sint nobis perspiciatis tenetur commodi, illum iste voluptatibus? Ad optio quod, quos reprehenderit voluptatibus libero.</p>

                        <h2 style={{
                            display: designBox ? "block" : "none",
                            transition: "1.5s "}}>Section</h2>
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

                    <li
                    className="stage2"                    
                     style={{
                         position: uiDevelopmentBox ? "absolute " : "relative",
                         width: uiDevelopmentBox ? "85%" : "300px",
                         height: uiDevelopmentBox ? "90%" : "300px",
                         padding: uiDevelopmentBox ? "40px": "30px",
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
                         width: dbBox ? "85%" : "300px",
                         height: dbBox ? "90%" : "300px",
                         padding: dbBox ? "40px": "30px",
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
                         width: serverBox ? "85%" : "300px",
                         height: serverBox ? "90%" : "300px",
                         padding: serverBox ? "40px": "30px",
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

                    <li></li>


           
                </ul>
            </aside>

            
        </div>
    )
}



export default MyStory
