import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Button} from "./Button/Button";


function App() {
    const [count, setCount] = useState(0)
    const maxValue = 15
    const minValue = 0
    useEffect(() => getLocalStorage(), [])
    useEffect(() => setLocalStorage(), [count])


    const addCount = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(0)
    }

    const setLocalStorage = () => {
        localStorage.setItem('Count', JSON.stringify(count))

    }

    const setSessionStorage = () => {
        sessionStorage.setItem('count + 5', JSON.stringify(count + 5))
    }

    const getLocalStorage = () => {

        let newCountLocalStorage = localStorage.getItem('Count')
        if (newCountLocalStorage) {
            setCount(JSON.parse(newCountLocalStorage))
        }

    }


    return (
        <div className='app'>
            <Counter count={count}/>
            <div className='buttons'>
                <Button disabled={count === maxValue} onClick={addCount}>COUNT</Button>
                <Button onClick={resetCount}>RESET</Button>
                <Button onClick={setSessionStorage}>setSessionStorage</Button>
            </div>

        </div>

    );
}

export default App;
