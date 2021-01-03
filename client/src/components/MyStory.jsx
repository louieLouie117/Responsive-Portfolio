import React, {useState} from 'react'
import modules from "../modules/MyStory.modules.css"


const MyStory = props => {


const [designBox, setDesignBox] = useState(false)
const [uiDevelopmentBox, setUiDevelopmentBox] = useState(false)
const [serverBox, setServerBox] = useState(false)
const [dbBox, setDbBox] = useState(false)






const DesignBoxHandler = (e)=>{
    setDesignBox(!designBox)
    console.log(e.target);

    if (designBox === false) {
    e.target.innerText = "Close"
        
    }

    if (designBox === true) {
        e.target.innerText = "Read more."
        }

}


const uiBoxHandler = (e)=>{
    setUiDevelopmentBox(!uiDevelopmentBox)

    if (uiDevelopmentBox === false) {
        e.target.innerText = "Close"
            
        }
    
        if (uiDevelopmentBox === true) {
            e.target.innerText = "Read more."
            }
}


const ServerBoxHandler = (e)=>{
    setServerBox(!serverBox)

    if (serverBox === false) {
        e.target.innerText = "Close"
            
        }
    
        if (serverBox === true) {
            e.target.innerText = "Read more."
            }
}



const DbBoxHandler = (e)=>{
    setDbBox(!dbBox)
    if (dbBox === false) {
        e.target.innerText = "Close"
            
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

                <div>
                    <h2>Skills and Technologies</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nobis eius doloribus sapiente sint ullam asperiores suscipit vel perspiciatis sequi soluta, quisquam, eligendi libero quaerat distinctio at, molestiae facere commodi!</p>
                </div>
            </aside>

            <aside>
            <h2>My Process</h2>
            


                <ul>
           

                    <li style={{
                         position: designBox ? "absolute " : "relative",
                         width: designBox ? "85%" : "300px",
                         height: designBox ? "80%" : "300px",
                         padding: designBox ? "80px ": "30px",
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



                    
                    <li style={{
                         position: uiDevelopmentBox ? "absolute " : "relative",
                         width: uiDevelopmentBox ? "85%" : "300px",
                         height: uiDevelopmentBox ? "80%" : "300px",
                         padding: uiDevelopmentBox ? "80px ": "30px",
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
                   
                            
                   

                             
                    <li style={{
                         position: dbBox ? "absolute " : "relative",
                         width: dbBox ? "85%" : "300px",
                         height: dbBox ? "80%" : "300px",
                         padding: dbBox ? "80px ": "30px",
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


                    <li style={{
                         position: serverBox ? "absolute " : "relative",
                         width: serverBox ? "85%" : "300px",
                         height: serverBox ? "80%" : "300px",
                         padding: serverBox ? "80px ": "30px",
                         zIndex: serverBox ? "120" : "0",
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

            
        </div>
    )
}



export default MyStory
