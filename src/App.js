import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [text, setText] = useState('');

    let data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 
        33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 
        16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 
        26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 
        39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 1003, 5];

    function search(e) {
        e.preventDefault();
        let count = 0;
        let found;

        for (let i = 0; i < data.length; i++) {
            count++;
            if (data[i] == text) {
                found = data[i];
                console.log('item found: ' + found + ', count took: ' + count);
                return;
            }
        }

        if (!found) {
            console.log('item not found, count took ' + count);
            return 'item not found, count took ' + count;
        } else console.log('item found: ' + found + ', count took: ' + count);
        return;
    }

    function binarySearch(array, value, start, end, count = 1) {
        var start = start === undefined ? 0 : start;
        var end = end === undefined ? array.length : end;
        let values = [];

        if (start > end) {
            return -1;
        }

        const index = Math.floor((start + end) / 2);
        const item = array[index];

        if (item === value) {
            values = [count, index];
            return values;
        } else if (item < value) {
            count = count + 1;
            return binarySearch(array, value, index + 1, end, count);
        } else if (item > value) {
            count = count + 1;
            return binarySearch(array, value, start, index - 1, count);
        }
        if (start === end && item !== value) {
            values = [count, null];
            return values;
        }

        values = [count, index];
        return values;
    }

    function binary(e) {
        e.preventDefault();

        let sortedData = data.sort(function (a, b) {
            return a - b;
        });

        let value = binarySearch(sortedData, Number.parseInt(text, 10));

        if (value[1] === null) {
            console.log('item not found, count took: ' + value[0]);
            return;
        } else {
            console.log('item found: ' + sortedData[value[1]] + ', count took: ' + value[0]);
            return;
        }
    }

    // 3. Find a book

    //system is 000 - 999, with each level being a different kind of book
    //if num = 000  num[0] defines the level
    ///if given dewey and title
    ////system has a deep structure, like: economics is 300s, but a super subcat western europe at 338.476772109
    //so basically, you would make sure full dewey given, matches 
    //once you have that pending, you would search that collection of books to find the one with a matching title
    //unfortunately, in the subcategories the books are a-z by authors last name - so the title is less helpful but still useful
    // function deweyBinarySearch(array, dewey, title, start, end, count = 1) {
    //     var start = start === undefined ? 0 : start;
    //     var end = end === undefined ? array.length : end;
    //     let values = [];

    //     if (start > end) {
    //         return -1;
    //     }

    //     const index = Math.floor((start + end) / 2);
    //     const item = array[index];

    //     if (item === dewey) {
    //         //found dewey cat, so mow we take that collection and search it for the title, which would have to be a linear search
    //         let foundBook;

    //         for (let i = 0; i < item.length; i++) {
    //             if (item[i] === text) {
    //                 foundBook = item[i];
    //                 return foundBook;
    //             }
    //         }
    //         return foundBook;
    //     } else if (item < dewey) {
    //         count = count + 1;
    //         return deweyBinarySearch(array, dewey, title, index + 1, end, count);
    //     } else if (item > dewey) {
    //         count = count + 1;
    //         return deweyBinarySearch(array, dewey, title, start, index - 1, count);
    //     }
    //     if (start === end && item !== dewey) {
    //         values = [count, null];
    //         return values;
    //     }

    //     values = [count, index];

    //     if (values[1] === null) {
    //         console.log('We have nothing in the category for: ' + dewey);
    //         return null;
    //     } 
    // }

    // function findBook(dewey, title) {
    //     e.preventDefault();

        
    //     let book = deweyBinarySearch(bookSet, dewey, title)

    //     console.log(book)

    //     if (book === null) {
    //         console.log('Sorry, we do not have that book');
    //         return;
    //     } else {
    //         console.log('item found: ' + book);
    //         return;
    //     }
    // }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <form>
                    <p>search algorithms</p>
                    <input onChange={e => setText(e.target.value)} value={text} id="search"></input>
                    <button onClick={e => binary(e)}>search</button>
                </form>
            </header>
        </div>
    );
}

export default App;
