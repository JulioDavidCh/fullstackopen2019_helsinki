import React from 'react'
import ReactDOM from 'react-dom'


const Constructor = ({header, courseParts}) =>{
  let head = [<h1> {header}  </h1>];
  let body = courseParts.map(part => <p> {part.name + ' ' + part.exercises} </p>);
  let total = <p> Number of exercises {courseParts.reduce((result, next) => result + next.exercises, 0)} </p>
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
      <Constructor header={course} courseParts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
