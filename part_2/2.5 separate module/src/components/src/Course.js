import React from 'react'

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

export default Course