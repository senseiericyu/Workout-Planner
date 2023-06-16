import { useState } from "react"

export function NewExercises({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="log-workout">
      <div className="form-row">
        <label htmlFor="item">Create your workout! </label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
          autoComplete="Off"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}