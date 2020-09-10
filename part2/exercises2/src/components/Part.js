import React from 'react'

const Part = (props) => {
    return (
        <div>
            <p key={props.id}>{props.name} {props.exercises} </p>
        </div>
    )
}

export default Part
