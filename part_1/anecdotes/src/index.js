import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ name, clickEvent }) => {
  return (
    <button onClick={clickEvent}>
      {name}
    </button>
  )
}

const DisplayVotes = ({ votes }) =>{
  return(
    <p>
      has {votes} votes
    </p>
  )
}

const DisplayAnecdote = ({ anecdote }) =>{
  return(
    <p>
      {anecdote}
    </p>
  )
}

const DisplayHeader = ({ header }) =>{
  return(
    <h1>
      {header}
    </h1>
  )
}

const DisplayMostVoted = ({ anecdotes, votes }) =>{

  const reducer = (highest, nextVal, index) => {
    if(nextVal>highest.vote)
      return highest = {vote: nextVal, index:index};
    else return highest
  }

  const {vote, index} = votes.reduce(reducer, {vote:0, index:0})

  return(
    <div>
      <p>
        {anecdotes[index]}
      </p>
      <p>
        has {vote} votes
      </p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map(() => 0))


  const handleClick = (currentAnecdote) =>{
    let nextAnecdote = Math.round((anecdotes.length - 1) * Math.random(1))
    if (nextAnecdote === currentAnecdote){
      for(;currentAnecdote === nextAnecdote;){
        nextAnecdote = Math.round((anecdotes.length - 1) * Math.random(1))
      }
    }
    return setSelected(nextAnecdote)
  }

  const handleVote = (votesArray, vote) =>{
    const newVotes = [...votesArray]
    newVotes[vote] = newVotes[vote] + 1
    setVotes(newVotes)
  }

  return (
    <div>
      <DisplayHeader header={"Anecdote of the day!"} />
      <DisplayAnecdote anecdote={props.anecdotes[selected]} />
      <DisplayVotes votes={votes[selected]} />
      <Button name="Next anecdote" clickEvent={() => handleClick(selected)} />
      <Button name={"vote"} clickEvent={() => handleVote(votes, selected)} />
      <DisplayHeader header={"Anecdote with most votes"} />
      <DisplayMostVoted anecdotes={props.anecdotes} votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)