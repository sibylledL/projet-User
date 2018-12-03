import React, { Component } from "react"
import axios from "axios"

class User extends Component {

  state = {
    user:{}
  }

  fetchUsers = () => {
      const url = "http://localhost:5679/users"
      fetch(`${url}/${this.props.match.params.id}`)
      .then(res => res.json())//tu veux recup le json puis on veut faire une action
      .then(body => {//body est un objet qui va remplir le tableau movie; tout ce qu'il fetch est dans body
        this.setState({
          user: body
        })
      })
      .catch(err => {throw err})
    }

  deleteUser = () => {
    console.log("delete")
    const url = "http://localhost:5679/users"
    fetch(`${url}/users/delete/${this.props.match.params.id}`, {
      method: 'delete'
    })
    .then(res => res.json());
  }

  componentDidMount =() => {
    this.fetchUsers()
  }

  render () {
    const user = this.state.user[0]

    const renderUser = () => {
      if(this.state.user[0]){

        return(
        <div>
          <p>{user.firstname} {user.lastname}</p>
          <p>{user.mail}</p>
          <p>{user.address}</p>
          <img src={user.avatarUrl}/>
          <p>{user.createAt}</p>
          <span onClick={this.deleteUser}>DELETE</span><br/>
          <span>EDIT</span>
        </div>
      )}
    }

    return (
      <div>
        {renderUser()}
      </div>
    )
  }

}

export default User
