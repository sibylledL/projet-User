import React, { Component } from "react"
import axios from "axios"

class User extends Component {

  state = {
    user:{},
    edit: false
  }


  fetchUsers = () => {
    const url = "http://localhost:5679/users"

      fetch(`${url}/${this.props.match.params.id}`)
      .then(res => res.json())//tu veux recup le json puis on veut faire une action
      .then(body => {//body est un objet qui va remplir le tableau movie; tout ce qu'il fetch est dans body
        this.setState({
          user: body[0]
        })
      })
      .catch(err => {throw err})
    }

  deleteUser = () => {
    const url = "http://localhost:5679/users"

    fetch(`${url}/delete/${this.props.match.params.id}`, {
      method: 'delete'
    })
    .then(res => res.json());
  }

  saveEdit = () => {
    const url = "http://localhost:5679/users"
    fetch(`${url}/edit/${this.props.match.params.id}`, {
      method: 'post'
    })
    .then(res => res.json());
  }

  toggleEdit = () => {
    if(this.state.edit){
      this.setState({
        edit:false
      })
      this.saveEdit()
    }else{
      this.setState({
        edit:true
      })
    }
  }

  recordChanges = (e) => {
    e.preventDefault();
    console.log(e.target.name)
    this.setState({
       user:{...this.state.user,
         [e.target.name] : e.target.value
        }
      })
  }


  componentDidMount =() => {
    this.fetchUsers()
  }

  render () {
    const user = this.state.user
    const renderUser = () => {
      if(this.state.user && this.state.edit){
        return(
        <div>
          <p>{user.firstname} {user.lastname}</p>
          <p>{user.mail}</p>
          <p>{user.address}</p>
          <img src={user.avatarUrl}/>
          <p>{user.createAt}</p>
          <span onClick={this.deleteUser}>DELETE</span><br/>
          <span onClick={this.toggleEdit}>EDIT</span>
        </div>
      )
    }else if(this.state.user){
        return(
          <div>
            <input name="firstname" type="text" defaultValue={user.firstname} onChange={this.recordChanges}/><br/>
            <input name="lastname" type="text" defaultValue={user.lastname} onChange={this.recordChanges}/><br/>
            <input name="mail" type="text" defaultValue={user.mail} onChange={this.recordChanges}/><br/>
            <input name="address" type="text" defaultValue={user.address} onChange={this.recordChanges}/><br/>
            <input name="avatarUrl" type="text" defaultValue={user.avatarUrl} onChange={this.recordChanges}/><br/>
            <input name="createAt" type="date" defaultValue={user.createAt} onChange={this.recordChanges}/><br/>
            <span onClick={this.deleteUser}>DELETE</span><br/>
            <span onClick={this.toggleEdit}>EDIT</span>
          </div>
        )
      }
    }

    return (
      <div>
        {renderUser()}
      </div>
    )
  }

}

export default User
