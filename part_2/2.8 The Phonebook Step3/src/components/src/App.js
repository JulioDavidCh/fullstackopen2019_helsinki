import React, { useState } from 'react'

const DisplayEntry = ({ name, number }) => {
    return(
        <div>
            {name} {number}
        </div>
    )
}

const DisplayEntries = ({ names }) => {
    const namesArray = names.map((entry) => <DisplayEntry key={entry.id} name={entry.name} number={entry.number} />)
    return(
    <div>
        {namesArray}
    </div>
    )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', id:1 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const changeHandlerName = (event) => setNewName(event.target.value)

  const changeHandlerNumber = (event) => setNewNumber(event.target.value)

  const submitHandler = (event) => {
      event.preventDefault()

      if(persons.some((entry)=> entry.name === newName)){
          alert(`${newName} is already added in our phonebook`)
          setNewName("")
          setNewNumber("")
      }else{
        const newPerson = {
            name:newName,
            number:newNumber,
            id:persons.length + 1
        }
        setNewName("")
        setNewNumber("")
        setPersons(persons.concat(newPerson))
      }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitHandler}>
        <div>
          name: <input onChange={changeHandlerName} value={newName} />
        </div>
        <div>
          number: <input onChange={changeHandlerNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <DisplayEntries names={persons} />
    </div>
  )
}

export default App