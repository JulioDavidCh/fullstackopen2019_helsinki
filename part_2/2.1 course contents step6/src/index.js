import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ info }) =>{
  return(
    <h1>
      {info}
    </h1>
  )
}

const Part = ({ name, exercises }) =>{
  return(
    <p>
      {name} {exercises}
    </p>
  )
}

const Course = ({ course }) =>{
  const {name, parts} = course
  const  courses = parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}  />)
  return(
    <div>
      <Header info={name} />
      {courses}
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(
  <App  />,
  document.getElementById('root')
)