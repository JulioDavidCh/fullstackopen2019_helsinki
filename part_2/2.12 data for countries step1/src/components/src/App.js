import React, { useState, useEffect } from 'react'
import DisplayInput from "./DisplayInput"
import axios from 'axios'

const DisplayCountry = ({ country }) =>{
  return(
    <p>
      {country}
    </p>
  )
}

const DisplaySingleCountry = ({ country }) =>{
const languages = country.languages.map(language => <li key={language.name}>{language.name}</li>)
  return(
    <div>
      <h2>{country.name}</h2>
      <p>Capital: <strong>{country.capital}</strong></p>
      <h2>languages</h2>
      <ul>{languages}</ul>
      <img src={country.flag} width={"200 px"} height={"200 px"}></img>
    </div>
  )
}

const DisplayCountries = ({ countries }) =>{
  if(countries.length > 10){
    return(
      <p>
        too many countries!
      </p>
    )
  }else if (countries.length === 1){
    return(
      <DisplaySingleCountry country={countries[0]}  />
    )
  }else{
    const allCountries = countries.map(country => <DisplayCountry key={country.name} country={country.name} />)
    return(
      <div>
        {allCountries}
      </div>
    )
  }
}

const App = () => {
  const [ newCountries, setCountries] = useState([])
  const [ newCountry, setCountry ] = useState('')
  
  const changeHandlerName = (event) => {
    setCountry(event.target.value)
    //we can use this solution if we don't want to use useEffect
    // axios.get(`https://restcountries.eu/rest/v2/name/${newCountry}`)
    // .then(response =>{
    //   setCountries(response.data)
    // })
  }

  useEffect(()=>{
    axios.get(`https://restcountries.eu/rest/v2/name/${newCountry}`)
    .then(response =>{
      setCountries(response.data)
    })
  },[newCountry])

  return (
    <div>
      <DisplayInput message={"find country: "} onChangeHandler={changeHandlerName} inputValue={newCountry} />
      <DisplayCountries countries={newCountries} />
    </div>
  )
}

export default App