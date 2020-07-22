import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


// 1. Linear search
// - Given the following dataset, find out how many tries it took to search for a particular item in the dataset. 
// - If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.
// 2. Binary search
// - Use the same front end and the dataset from the previous exercise for this exercise. Use array.sort to sort the dataset. 
// - Then implement a binary search to find a particular value in the dataset. 
// - Display how many tries it took to search for a particular item in the dataset using binary search. 
// - If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

function App() {
    const [text, setText] = useState('');
    const [foundItem, setFoundItem] = useState('');
    const [countToItem, setCount] = useState('');

    let data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 
        33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 
        16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 
        26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 
        39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 1003, 5]

    function search(e){
        e.preventDefault();
        let count = 0;
        let found 

        for(let i=0; i<data.length; i++){
            count ++
            if(data[i] == text){               
                found = data[i]
                console.log('item found: ' + found + ', count took: ' + count)
                return;
            } 
        }

        if(!found){
            console.log('item not found, count took ' + count)
            return 'item not found, count took ' + count
        } else 
            console.log('item found: ' + found + ', count took: ' + count)
            return 
    }

    function binarySearch(array, value, start, end) {
        var start = start === undefined ? 0 : start;
        var end = end === undefined ? array.length : end;
        let count = 1
    
        if (start > end) {
            return -1;
        }
    
        const index = Math.floor((start + end) / 2);
        const item = array[index];
    
        //console.log(start, end, count);
        if (item == value) {
            console.log(count)
            return index;
        }
        else if (item < value) {
            count = count + 1
            return binarySearch(array, value, index + 1, end);
        }
        else if (item > value) {
            count = count + 1
            return binarySearch(array, value, start, index - 1);
        }
        return count
    };

    //count not working, but search is working
    function binary(e){
        e.preventDefault();

        // let sortedData = data.sort((function(a, b) {
        //     return a - b;
        // }))
        // console.log(sortedData[35])
        
        // let search = binarySearch(sortedData, Number.parseInt(text, 10))

        console.log(search)
    }
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
            <p>search algorithms</p>
            <input onChange={(e) => setText(e.target.value)} value={text} id='search'></input>
            <button  onClick={(e) => search(e)}>search</button>
        </form >
       <p>Item found:</p>
        <p value={foundItem} ></p>
        <p>Count</p>
        <p value={countToItem} ></p> 
         
      </header>
    </div>
  );
}

export default App;

// 1) Linear search

//Given the following dataset, find out how many tries it took to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out