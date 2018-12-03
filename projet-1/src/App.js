import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';


class App extends Component {

  constructor(props){
    super(props)//paramètre pour accéder à un contenu privé
    this.state = {
      users: [],
      toggleForm: false,
    }
  }

fetchUsers = () => {
    fetch('http://localhost:5679/users/all')//connexion grace au fetch à cette url
    .then(res => res.json())//tu veux recup le json puis on veut faire une action
    .then(body => {//body est un objet qui va remplir le tableau movie; tout ce qu'il fetch est dans body
      this.setState({
        users: body
      })
    })
    .catch(err => {throw err})

  }

componentDidMount() {
    this.fetchUsers()
  }


  render() {
        return (
          <div className="App">

                <div>

                    <h2> List of User </h2>
                    <Link to='/form' className="link">Add a user</Link>

                    <div className="list">
                    {
                      this.state.users.map(x  =>
                        <Link to={`/user/${x._id}`}>
                            <p key={x.id}>{x.firstname} {x.lastname}</p>
                        </Link>
                      )
                    }
                    </div>
                </div>

          </div>
      )
  }
}

export default App;
