import React from "react"

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

export default DisplayEntries