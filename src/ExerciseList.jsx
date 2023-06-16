import { ExerciseItem } from "./ExerciseItem"

export function ExerciseList({ exercises, deleteExercise }) {
  return (
    <ul className="list">
      {exercises.length === 0 && "No exercises!"}
      {exercises.map(exercise => {
        return (
          <ExerciseItem
            {...exercise}
            key={exercise.id}
            deleteExercise={deleteExercise} 
            />
        )
      })}
    </ul>
  )
}