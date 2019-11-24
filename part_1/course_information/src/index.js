import React from 'react'
import ReactDOM from 'react-dom'


const constructor = (header, parts) =>{
  let head = [<h1> {header}  </h1>];
  let body = parts.map(part => <p> {part.name + ' ' + part.exercises} </p>);
  let total = <p> Number of exercises {parts.reduce((result, next) => result + next.exercises, 0)} </p>
  let result = head.concat(body, total);
  return result;
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      {constructor(course, parts)}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))