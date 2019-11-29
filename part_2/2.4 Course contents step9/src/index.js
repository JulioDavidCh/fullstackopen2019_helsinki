import React from 'react'
import ReactDOM from 'react-dom'

const CoursesConstructor = ({ coursesData }) =>{
  const allCourses = coursesData.map((nextCourse) => <Course key={nextCourse.id} course={nextCourse} />)
  return(
    <div>
      {allCourses}
    </div>
  )
}

const Total = ({ total }) =>{
  return(
    <strong>
      total of {total} exercises
    </strong>
  )
}

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
  const courses = parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}  />)
  const totalExercises = parts.reduce((sum, next)=> sum + next.exercises, 0)

  return(
    <div>
      <Header info={name} />
      {courses}
      <Total total={totalExercises} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <CoursesConstructor coursesData={courses} />
    </div>
  )
}

ReactDOM.render(
  <App  />,
  document.getElementById('root')
)