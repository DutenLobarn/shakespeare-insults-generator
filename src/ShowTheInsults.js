import React from 'react'

export default function ShowTheInsults(props) {
    return (
        <div>

            <h3>{props.allInsults}</h3>

            <h5>{props.allPlay}</h5>

            <h2>Do u want to add an insult? =D</h2>

            <h3>{props.addOneInsultText}</h3>

            <h5>{props.addOnePlayText}</h5>

        </div>
    )
}
