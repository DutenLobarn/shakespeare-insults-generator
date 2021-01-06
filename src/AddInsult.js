import React from 'react'
import './App.css';

export default function AddInsult(props) {
    return (
        <div className="inputContainer">

            <input onKeyPress={props.handleOnChange1} className="addInsultInput" type="text" placeholder="Write your insult here"  />

            <input onKeyPress={props.handleOnChange2} className="addInsultInput" type="text" placeholder="From were is the source of your insult?" />
            
        </div>
    )
}
