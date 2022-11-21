import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackSate from "./components/FeedbackStat.jsx"
import FeedbackForum from "./components/FeedbackForum"
import FeedbackData from "./data/FeedbackData"

function App(){
  const [feedback, setFeedback] = useState(FeedbackData) 

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure?')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return(
    <>
      <Header />
      <div className="container">
        <FeedbackForum handleAdd={addFeedback} />
        <FeedbackSate feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App