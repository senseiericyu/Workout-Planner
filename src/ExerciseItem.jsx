export function ExerciseItem({id, title, deleteExercise }) {
    return (
      <li>
        <label>
          {title}
        </label>
        <button onClick={() => deleteExercise(id)} className="btn btn-done">
          Completed
        </button>
      </li>
    )
  }