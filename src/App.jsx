import { useState } from "react"
import { NewExercises } from "./NewExercises"
import "./styles.css"
import { ExerciseList } from "./ExerciseList"

export default function App() {
  const [exercises, setExercises] = useState([])

  function addExercise(title) {
    setExercises(currentExercise => {
      return [
        ...currentExercise,
        { id: crypto.randomUUID(), title},
      ]
    })
  }


  function deleteExercise(id) {
    setExercises(currentExercise => {
      return currentExercise.filter(exercises => exercises.id !== id)
    })
  }

  return (
    <>
      <NewExercises onSubmit={addExercise} />
      <h1 className="header">Current Exercises:</h1>
      <ExerciseList exercises={exercises} deleteExercise={deleteExercise} />
    </>
  )
}