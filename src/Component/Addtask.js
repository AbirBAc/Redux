import React from 'react'
import {constdispatch } from 'react-redux'


let Addtask= props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Add Task">ADD TASK :</label>
        <input name="Add Task" component="input" type="text" />
      </div>
      <button type="submit">ADD</button>
    </form>
  )
}


export default Addtask;