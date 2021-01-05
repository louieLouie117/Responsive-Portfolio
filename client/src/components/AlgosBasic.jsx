import React, {useState} from 'react'
import modules from "../modules/Algos.modules.css"

const AlgosBasic = props => {

    const [basic, setBasic] = useState(true)
    const [sorting, setSorting] = useState(false)
    const [data, setData] = useState(false)




    function showBasicAlgos(){
        setBasic(!basic)
        setSorting(false)
        setData(false)
    }

    function showSortingAlgos(){
        setSorting(!sorting)
        setBasic(false)
        setData(false)
    }

    
    function showDataAlgos(){
        setData(!data)
        setSorting(false)
        setBasic(false)

    }


// print numbers 1-250
const [print, setPrint] = useState(0)
const [printMessage, setPrintMessage] = useState("")

function printFunction() {
    setPrintMessage("")
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
        setPrint("")
        setPrintMessage("Task Completed")

    }
    
}, 1000);

// print odd numbers--------------------------------------
const [odds, setOdds] = useState(0)
const [oddsMessage, setOddsMessage] = useState("")
function printOdds() {
    setOddsMessage("")
    for (let i = 1; i <= 51; i++) { 
        if (i % 2 === 1) {
            task(i); 
          }
        function task(i) { 
            setTimeout(function() { 
                setOdds(i)
                console.log(i);
            }, 200* i); 
          } 

     } 
}
setTimeout(function() { 
    if (odds === 51) {
        setOdds(!odds)
        setOdds("")
        setOddsMessage("Task Completed")

    }
    
}, 1000);

// sum the odd numbers-------------------------
const [sumOdds, setSumOdds] = useState(0)
const [sumOddsMessage, setSumOddsMessage] = useState("")

function sumAllOdds() {
    console.log("sum button was click");
    setSumOddsMessage("")
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
        setSumOdds("")
        setSumOddsMessage("Task Completed")

    }
}, 1000);


// iterate an array-------------------------------------------
const [inputString, setInputString] = useState()
const [iteratingNumber, setIteratingNumber] = useState(true)
function changeState(e){
    console.log("input was selected");
    setInputString(e.target.value);
    // set min/max/average
    setFindMaxString(e.target.value);
    setFindMinString(e.target.value);
    setFindAverageString(e.target.value);

    setIteratingNumber(false);
    setFindAverageNumber(false);
    setFindMaxNumber(false);
    setFindMinNumber(false);


}

function iteratingArray(){
    console.log("button was click");
    // const userArray = inputSting.split(',');
    // const userArray = inputSting.split`,`.map(i=>+i);
    // const userArray = inputSting.split('').map(i=>Number(i));
    const userArray = inputString.split(',', 50);

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



// find the max---------------------------------
const [findMaxString, setFindMaxString] = useState()
const [findMaxNumber, setFindMaxNumber] = useState(true)


function changeStateFindMax(e){
    console.log("input was selected");
    setFindMaxNumber(false)
     setFindMaxString(e.target.value)
}

function findMax(){
    const userArray = findMaxString.split(',').map(Number);

    console.log("user array",userArray);
    let max = userArray[0];
    for (let i = 0; i < userArray.length; i++) {
        console.log("loop", userArray[i]);
        if (max < userArray[i]) {
            max = userArray[i];
            console.log("max in if statement",max);

          }    
          setFindMaxNumber(max)

    }

}



// find the min---------------------------------
const [findMinString, setFindMinString] = useState()
const [findMinNumber, setFindMinNumber] = useState(true)


function changeStateFindMin(e){
    console.log("input was selected");
    setFindMinNumber(false)
    setFindMinString(e.target.value)
}

function findMin(){
    const userArray = findMinString.split(',').map(Number);

    console.log("user array",userArray);
    let min = userArray[0];
    for (let i = 0; i < userArray.length; i++) {
        console.log("loop for min", userArray[i]);

        if ( userArray[i] < min) {
            min = userArray[i];
            console.log("min in if statement",min);

          }    
          setFindMinNumber(min)



    }

    console.log("min after if statement",min);


}




// find the average---------------------------------
const [findAverageString, setFindAverageString] = useState()
const [findAverageNumber, setFindAverageNumber] = useState(true)


function changeStateFindAverage(e){
    console.log("input was selected");
    setFindAverageNumber(false)
     setFindAverageString(e.target.value)
}

function findAverage(){
    const userArray = findAverageString.split(',').map(Number);
    let sum = userArray[0];
    for (let i = 0; i < userArray.length; i++) {
    sum = sum + userArray[i];
    let avgNumber = sum / userArray.length;
    setFindAverageNumber(avgNumber)
        
    }

}



// new array with odd numbers--------------------------------------
const [oddsArray, setOddsArray] = useState(0)
const [newArray, setNewArray] = useState(0)

function arrayWithOdds() {
    console.log("new array with odds was click");
    let newArrayOdds = [];
    for (let i = 1; i <= 31; i++) { 
        task2(i)     
        if (i % 2 === 1) {
            task(i)   
          }    
          function task(i) { 
            setTimeout(()=> {      
                newArrayOdds.push(i)
                newArrayOdds.push(",")  
                setNewArray(0) 
                setNewArray(newArrayOdds)
            }, 300* i);  
    
          }
          function task2(i) { 
            setTimeout(function() { 
                setOddsArray(i)
                console.log(i);
            }, 300* i); 
          }
     }

}

setTimeout(function() { 
    if (oddsArray === 31) {
        setOddsArray(!oddsArray)
        setOddsArray(0)
        setNewArray("Task Completed")

    }
}, 2000);






    return (
        <div  className="basicAlgos-container">
            
         

            <ul>
                <li>
                    <h2>Print 1-250</h2>
                    <h3>{print} {printMessage}</h3>
                    <button 
                    style={{ background:  print? "lightGray" : "rgb(235, 201, 8)" }}
                    disabled={print}
                    onClick={printFunction}
                    >Print 1-250</button>
                </li>

                <li>
                    <h2>Print all odd numbers from 1-51</h2>
                    <h3>{odds} {oddsMessage} </h3>
                    <button 
                    style={{ background:  odds? "lightGray" : "rgb(235, 201, 8)" }}
                    disabled={odds}
                    onClick={printOdds}
                    >Print Odd Numbers</button>
                </li>


                <li>
                    <h2>Print the <u>sum</u> of all the odd numbers from  1-51</h2>
                    <h3>{sumOdds} {sumOddsMessage}</h3>
                    <button 
                    style={{ background:  sumOdds? "lightGray" : "rgb(235, 201, 8)" }}
                    disabled={sumOdds}
                    onClick={sumAllOdds}
                    >Sum all odds </button>
                </li>

                <li>
                    <h2>New Array with odd numbers 1-31</h2>
                    <div>
                        <h4>[{newArray}]</h4>
                        <h3>Loop: {oddsArray}</h3>
                    </div>
                    <button 
                    style={{ background:  oddsArray? "lightGray" : "rgb(235, 201, 8)" }}
                    disabled={oddsArray}
                    onClick={arrayWithOdds}
                    >Create New Array</button>
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

                <li>
                    <h2>find the min number <b> {findMinNumber}</b></h2>
                    <input 
                    className="noBorders"
                    type="text"
                    value={inputString} 
                    // placeholder="create an array separate numbers by a , ex: 1,2,3 "
                    onChange={changeStateFindMin}
                    />

                    <button 
                    style={{ background:  findMinNumber? "lightGray" : "rgb(235, 201, 8)" }}
                    disabled={findMinNumber}
                    onClick={findMin}
                    >Find Min</button>
                </li>
                
                <li>
                    <h2>find the max number <b> {findMaxNumber}</b></h2>
                    <input 
                    className="noBorders"
                    type="text"
                    value={inputString} 
                    // placeholder="create an array separate numbers by a , ex: 1,2,3 "
                    onChange={changeStateFindMax}
                    />

                    <button 
                    style={{ background:  findMaxNumber? "lightGray" : "rgb(235, 201, 8)" }}
                    disabled={findMaxNumber}
                    onClick={findMax}
                    >Find Max</button>
                </li>


 

                <li>
                    <h2>find the average number<b> {findAverageNumber}</b></h2>
                    <input
                    className="noBorders"
                    type="text" 
                    value={inputString}
                    // placeholder="create an array separate numbers by a , ex: 1,2,3 "
                    onChange={changeStateFindAverage}
                    />

                    <button 
                    style={{ background:  findAverageNumber? "lightGray" : "rgb(235, 201, 8)" }}
                    disabled={findAverageNumber}
                    onClick={findAverage}
                    >Find Average</button>
                </li>

                <li></li>

                
            </ul>
            
        </div>
    )
}



export default AlgosBasic
