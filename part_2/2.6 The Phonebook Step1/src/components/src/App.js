import React, { useState } from 'react'

const DisplayName = ({ name }) => {
    return(
        <div>
            {name}
        </div>
    )
}

const DisplayNames = ({ names }) => {
    const namesArray = names.map((entry) => <DisplayName key={entry.id} name={entry.name} />)
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

  const changeHandler = (event) => setNewName(event.target.value)
  const submitHandler = (event) => {
      event.preventDefault()
      const newPerson = {
          name:newName,
          id:persons.length + 1
      }
      setNewName("")
      setPersons(persons.concat(newPerson))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitHandler}>
        <div>
          name: <input onChange={changeHandler} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <DisplayNames names={persons} />
    </div>
  )
}

export default App