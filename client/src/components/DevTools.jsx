import React from 'react'

const DevTools = props => {
    return (
        <div className="devTools-container">
            <h2>Tools and Technologies</h2>
            
            <section>
            <div className="blueLine"></div>

                <ul>
                    <li>
                    <h2>Languages</h2>
                    <h3>JavaScript, C#, Python, Html5, CSS, Markdown </h3>

                    </li>
                    <li>
                    <h2>Database</h2>
                    <h3>MySQL, MongoDB</h3>
                    </li>

                    <li>
                    <h2>Version Control</h2>
                    <h3>Git, GitHub</h3>

                    </li>
                    <li></li>
                </ul>
            </section>

            <section>
            <div className="blueLine"></div>

                <ul>
                    <li id="frameworks">
                    <h2>Frameworks and Libraries </h2>    
                    <h3>React, Express, Node, Express-fileupload, ASP.NET, Entity Framework, jQuery, SASS </h3>

                    </li>

                </ul>
            </section>
            
        </div>
    )
}


export default DevTools
