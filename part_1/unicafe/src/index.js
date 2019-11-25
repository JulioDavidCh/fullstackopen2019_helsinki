import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Header = ({ text }) => <h1>{text}</h1>

const ComponentMaker = ({ name, value }) =>{
  return(
    <tr><td>{name}</td> <td>{value}</td></tr>
  )
}

const StatisticalTable = ({ good, neutral, bad, all }) =>{
  const average = ((good-bad)/(all == 0? 1 : all) * 100).toFixed(1)
  const positive = ((good)/(all == 0? 1 : all) * 100).toFixed(1)
  return (
    <table>
      <ComponentMaker name={"good"} value={good} />
      <ComponentMaker name={"neutral"} value={neutral} />
      <ComponentMaker name={"bad"} value={bad} />
      <ComponentMaker name={"all"} value={all} />
      <ComponentMaker name={"average"} value={average} />
      <ComponentMaker name={"positive"} value={positive + "%"} />
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let all = good + neutral + bad


  return (
    <div>
      <Header text={"Give feedback"} />
      <Button handleClick={()=> setGood(good + 1)} text="good" />
      <Button handleClick={()=> setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={()=> setBad(bad + 1)} text="bad" />
      <Header text={"Statistics"} />
      <StatisticalTable good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
