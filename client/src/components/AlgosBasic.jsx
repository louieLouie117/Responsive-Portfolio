import React, {useState} from 'react'
import modules from "../modules/Algos.modules.css"

const AlgosBasic = props => {


const [print, setPrint] = useState(0)
function printFunction() {
for (let i=1; i<251; i++) { 
    task(i); 
    function task(i) { 
        setTimeout(function() { 
            setPrint(i)
            console.log(i);
        }, 20* i); 
        
      }
 }

}

setTimeout(function() { 
    if (print === 250) {
        setPrint(!print)
        setPrint(0)

    }
    
}, 1000);


const [odds, setOdds] = useState(0)
function printOdds() {
    var sum = 0;
    for (let i = 1; i <= 51; i++) { 
        if (i % 2 === 1) {
            sum = sum + i;
            task(i); 

          }
        function task(i) { 
            setTimeout(function() { 
                setOdds(i)
                console.log(i);
            }, 200* i); 
          } 

          console.log(sum);
     } 
}
setTimeout(function() { 
    if (odds === 51) {
        setOdds(!odds)
        setOdds(0)
    }
    
}, 1000);


const [sumOdds, setSumOdds] = useState(0)
function sumAllOdds() {
    console.log("sum button was click");
    var sum = 0;
    for (let i = 1; i <= 51; i++) { 
        if (i % 2 === 1) {
            sum = sum + i;
            task(sum); 


          }
        function task(sum) { 
            setTimeout(function() { 
                // setSumOdds(i)
                setSumOdds(sum)

            }, 160* i); 
          } 
          console.log(sum);
     } 
}

setTimeout(function() { 
    if (sumOdds === 676) {
        setSumOdds(!sumOdds)
        setSumOdds(0)
    }
}, 1000);


const [inputString, setInputString] = useState()
const [iteratingNumber, setIteratingNumber] = useState(true)


function changeState(e){
    console.log("input was selected");
    setIteratingNumber(false)
     setInputString(e.target.value)
}

function iteratingArray(){
    console.log("button was click");
    // const userArray = inputSting.split(',');
    // const userArray = inputSting.split`,`.map(i=>+i);
    console.log(inputString);
    const userArray = inputString.split(',', 10);

    // const userArray = inputSting.split('').map(i=>Number(i));

    console.log("user array",userArray);

    for (let i = 0; i < userArray.length; i++) {
        console.log("loop", userArray[i]);

        task(userArray[i]); 
        function task(newArr) { 
            setTimeout(function() { 
                console.log("inside the time the timer",newArr);
                setIteratingNumber(newArr) 

            }, 800* i); 
            
          }
    }



}








    return (
        <div  className="basicAlgos-container">
            <ul>
                <li>
                    <h2>Print 1-250</h2>
                    <h3>{print}</h3>
                    <button 
                    style={{ background:  print? "lightGray" : "rgb(235, 201, 8)" }}
                    disabled={print}
                    onClick={printFunction}
                    >Print 1-250</button>
                </li>

                <li>
                    <h2>Print all odd numbers from 1-51</h2>
                    <h3>{odds}</h3>
                    <button 
                    style={{ background:  odds? "lightGray" : "rgb(235, 201, 8)" }}
                    disabled={odds}
                    onClick={printOdds}
                    >Print Odd #</button>
                </li>


                <li>
                    <h2>Print the <u>sum</u> of all the odd numbers from  1-51</h2>
                    <h3>{sumOdds}</h3>
                    <button 
                    style={{ background:  sumOdds? "lightGray" : "rgb(235, 201, 8)" }}
                    disabled={sumOdds}
                    onClick={sumAllOdds}
                    >Sum all odds </button>
                </li>


                <li>
                    <h2>Iterating through an Array <b> {iteratingNumber}</b></h2>
                    <input 
                    type="text" 
                    placeholder="create an array separate numbers by a , ex: 1,2,3 "
                    onChange={changeState}
            
                    />

                    <button 
                    style={{ background:  iteratingNumber? "lightGray" : "rgb(235, 201, 8)" }}
                    disabled={iteratingNumber}
                    onClick={iteratingArray}
                    >Start Iterating</button>
                </li>


                
            </ul>
            
        </div>
    )
}



export default AlgosBasic
