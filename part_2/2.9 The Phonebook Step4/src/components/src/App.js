import React, { useState } from 'react'

const DisplayEntry = ({ name, number }) => {
    return(
        <div>
            {name} {number}
        </div>
    )
}

const DisplayEntries = ({ names, regVal }) => {
    const regExp = new RegExp(regVal, "i")
    const filteredArray = names.filter((entry) => regExp.test(entry.name))
    const namesArray = filteredArray.map((entry) => <DisplayEntry key={entry.id} name={entry.name} number={entry.number} />)
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
  const [ newFilter, setNewFilter ] = useState('')

  const changeHandlerName = (event) => setNewName(event.target.value)

  const changeHandlerNumber = (event) => setNewNumber(event.target.value)

  const changeHandlerFilter = (event) => setNewFilter(event.target.value)

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
        <div>
          filter shown with: <input onChange={changeHandlerFilter} value={newFilter} />
        </div>
      <h2>add a new</h2>
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
      <DisplayEntries names={persons} regVal={newFilter} />
    </div>
  )
}

export default App