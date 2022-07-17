import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Button} from "./Button/Button";



function App() {
    const [count, setCount] = useState(0)
    const maxValue = 15
    const minValue = 0

    const addCount = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(0)
    }

    const setLocalStorage = () => {
        localStorage.setItem('Count', JSON.stringify(count))
        localStorage.setItem('Count + 2', JSON.stringify(count + 2))
    }

    const setSessionStorage = () => {
        sessionStorage.setItem('count + 5',JSON.stringify(count + 5))
    }

    const getLocalStorage = () => {

        let newCountLocalStorage = localStorage.getItem('Count')
        if (newCountLocalStorage) {
            setCount(JSON.parse(newCountLocalStorage))
        }

    }

    const clearLocalStorage = () => {
        localStorage.clear()
        setCount(0)
    }
    const removeLocalStorage = () => {
      localStorage.removeItem('Count')
    }

    return (
        <div className='app'>
            <Counter count={count}/>
            <div className='buttons'>
                <Button disabled={count === maxValue} onClick={addCount}>COUNT</Button>
                <Button onClick={resetCount}>RESET</Button>
                <Button onClick={setLocalStorage}>setLocalStorage</Button>
                <Button onClick={setSessionStorage}>setSessionStorage</Button>
                <Button onClick={getLocalStorage}>getLocalStorage</Button>
                <Button onClick={clearLocalStorage}>clearLocalStorage</Button>
                <Button onClick={removeLocalStorage}>removeLocalStorage</Button>
            </div>

        </div>

    );
}

export default App;
