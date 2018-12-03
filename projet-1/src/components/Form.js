import React from "react"

const AddUser = (props) => {
  return(
    <div className="column">
    <h2>Add user to data base</h2>

      <form method="POST" action="http://localhost:5679/users/add">
        <input type="text" name="mail" placeholder="email"></input>
        <input type="text" name="firstname" placeholder="firstname"></input>
        <input type="text" name="lastname" placeholder="lastname"></input>
        <input type="date" name="createAt" placeholder="creation date"></input>
        <input type="text" name="address" placeholder="adress"></input>
        <input type="text" name="avatarUrl" placeholder="avatar"></input>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddUser
