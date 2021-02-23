import React from 'react'

const MyHeader = props => {
    return (
        <div className="myHeader-container">
            <header>
            <div className="name-container">
            <div>
            <h3>Hello, my name is </h3>
            <h1>Luis Cardona</h1>
            <p>I am a creative developer.</p>
            </div>
            <img src="/img/portfolioImg.png" alt=""/>
            <button>Resume</button>

            </div>

            <div className="mySkills-container">
              <h1>My Skills</h1>

          <ul>
              <li>skill1</li>
              <li>skill2</li>
              <li>skill3</li>
              <li>skill4</li>
              <li>skill5</li>
              {/* <li>skill6</li>
              <li>skill7</li>
              <li>skill8</li>
              <li>skill9</li>
              <li>skill10</li>
              <li>skill11</li>
              <li>skill12</li>
              <li>skill13</li>
              <li>skill14</li>
              <li>skill15</li>
              <li>skill16</li>
              <li>skill17</li>
              <li>skill18</li>
              <li>skill19</li>
              <li>skill20</li>
              <li>skill20</li>
              <li>skill20</li>
              <li>skill20</li>
              <li>skill20</li>
              <li>skill20</li> */}

              <button>View More</button>

          </ul>

          
            </div>
            </header>
            <main>
            <div className="myFocus-container">
            <h1>My Focus</h1>

                <ul>
                    <li>
                    <h3>Section 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quo quis libero ullam natus quod obcaecati. Ex pariatur autem magnam deserunt laboriosam dolorum veritatis soluta sunt, animi quasi, magni repellendus.</p>
                    </li>
                    <li>
                    <h3>Section 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quo quis libero ullam natus quod obcaecati. Ex pariatur autem magnam deserunt laboriosam dolorum veritatis soluta sunt, animi quasi, magni repellendus.</p>
                    </li>
                    <li>
                    <h3>Section 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quo quis libero ullam natus quod obcaecati. Ex pariatur autem magnam deserunt laboriosam dolorum veritatis soluta sunt, animi quasi, magni repellendus.</p>
                    </li>
                
                </ul>
            </div>

            </main>
        </div>
       
    )
}


export default MyHeader
