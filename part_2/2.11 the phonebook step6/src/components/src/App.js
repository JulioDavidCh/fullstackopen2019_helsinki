import React, { useState, useEffect } from 'react'
import DisplayHeader from "./DisplayHeader"
import DisplayInput from "./DisplayInput"
import DisplayEntries from "./DisplayEntries"
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
    .then(response => setPersons(response.data))
  },[])
  
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
      <DisplayHeader message={"Phonebook"} />
      <DisplayInput message={"filter shown with: "} onChangeHandler={changeHandlerFilter} inputValue={newFilter} />
      <DisplayHeader message={"add a new"} />
      <form onSubmit={submitHandler}>
      <DisplayInput message={"name: "} onChangeHandler={changeHandlerName} inputValue={newName} />
      <DisplayInput value ={"number: "} onChangeHandler={changeHandlerNumber} inputValue={newNumber} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <DisplayHeader message={"Numbers"} />
      <DisplayEntries names={persons} regVal={newFilter} />
    </div>
  )
}

export default App