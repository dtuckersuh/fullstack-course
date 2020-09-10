import React from 'react'
import Part from './Part'
import PartSum from './PartSum'

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part =>
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            )}
            <PartSum sum={parts.reduce((total, part) => total + part.exercises, 0)} />
        </div>
    )
}

export default Content
