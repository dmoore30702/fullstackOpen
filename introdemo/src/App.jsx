import { useState } from 'react'

const Annecdotes = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)

  console.log(selected)
  return(
    <div>
      <Button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}  text="Get Random Anecdote"/>
      {anecdotes[selected]}
    </div>
  )
}




const Button = ({onClick, text}) => {
  return(
    <div>
      <button onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

const BasicStats = ({reviews}) => {
  return(
    <div>
      <p>Good: {reviews.good}</p>
      <p>Neutral: {reviews.neutral}</p>
      <p>Bad: {reviews.bad}</p>
    </div>
  )
}


const Statistics = ({reviews}) => {
  console.log("Reviews:", reviews)
  const wordToValue = {
    good: 1,
    neutral: 0,
    bad: -1,
  }

  const totalScore = Object.entries(reviews).reduce(
    (sum, [type, count]) => sum + (wordToValue[type] * count), 0
  )

  const totalReviews = Object.entries(reviews).reduce(
    (sum, [type, count]) => sum + count, 0
  )

  const average = totalScore/totalReviews
  const positivePercent = 100 * (reviews.good/totalReviews)

  return(
    <div>
      <h2>Statistics</h2>
      <BasicStats reviews={reviews}/> 
      <p>Average: {average}</p>
      <p>Positive: {positivePercent}%</p>
    </div>
  )
}

const App = () => {
  const[reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const increaseReview = (Type) => {
    setReviews({...reviews, [Type]: reviews[Type] + 1})
  }

  return (
    <div>
      <h1>Give Feedback</h1>

      {Object.keys(reviews).map((type) => (
        <Button key={type} onClick={() => increaseReview(type)} text={type} />
      ))}
      
      <Statistics reviews={reviews} />
      <Annecdotes />
    </div>
  )
}

export default App