// import { set } from 'mongoose';
import React, {useState} from 'react'
import modules from "../modules/Algos.modules.css"

const BasicAlgos = props => {


const [print, setPrint] = useState(0)
const [odds, setOdds] = useState(0)




function printFunction() {
for (let i=1; i<251; i++) { 
    task(i); 
    function task(i) { 
        setTimeout(function() { 
            setPrint(i)
            console.log(i);

        }, 50* i); 

      } 

 } 
 console.log("done");

}

function printOdds() {
    var sum = 0;
    for (let i = 1; i <= 1001; i++) { 
        if (i % 2 == 1) {
            sum = sum + i;
        task(i); 

          }
        function task(i) { 
            setTimeout(function() { 
                setOdds(i)
                console.log(i);
            }, 120* i); 
          } 
     } 
    }






    return (
        <div  className="basicAlgos-container">
            <ul>
                <li>
                    <h2>Print 1-250</h2>
                    <h3>{print}</h3>
                    <button onClick={printFunction}>Print 1-250</button>
                </li>

                <li>
                    <h2>Print Odd numbers</h2>
                    <h3>{odds}</h3>
                    <button onClick={printOdds}>Print Odd #</button>
                </li>
            </ul>
            
        </div>
    )
}



export default BasicAlgos
