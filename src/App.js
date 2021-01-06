import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";

export default function App() {
    const counter = useSelector(({counter}) => counter);
    const user = useSelector(({user}) => user);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
            .then((value) => value.json()).then(value => dispatch({type: 'CHANGE_USER', payload: value}))
    }, [counter])

    return (
        <div>
            <h1>Counter value:{counter}</h1>
            <h1>User:{
                user && user.name
            }</h1>

            <button onClick={() => {
                dispatch({type: "INC_COUNTER"})
            }}>INC
            </button>
            <button onClick={() => dispatch({type: "DEC_COUNTER"})}>DEC</button>
            <button onClick={() => dispatch({type: "RESET"})}>RESET</button>
        </div>
    );
}

