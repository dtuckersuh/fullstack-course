import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => {
    return (
        <div>
            <h1>{ text }</h1>
        </div>
    )
}

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const Statistics = (props) => {
    let all = props.good + props.neutral + props.bad
    let positive = (props.good / all) * 100
    if (all === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>   
        )
    }
    return (
        <div>
            <p>good: {props.good}</p>
            <p>neutral: {props.neutral}</p>
            <p>bad: {props.bad}</p>
            <p>all: {all}</p>
            <p>average: {(props.good - props.bad) / all}</p>
            <p>positive: {positive}%</p>
        </div>
    )
}

const App = () => {
    // Save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <Header text="Give Feedback"/>
            <Button onClick={handleGoodClick} text="good"/>
            <Button onClick={handleNeutralClick} text="neutral"/>
            <Button onClick={handleBadClick} text="bad"/>
            <Header text="Statistics" />
            <Statistics good={good} neutral={neutral} bad={bad} /> 
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
