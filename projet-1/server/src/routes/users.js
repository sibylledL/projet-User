import express from "express"
import User from '../models/User'
import moment from 'moment'

const userRouter = express.Router()

//post un user
userRouter.post('/add', (req, res) => {
  const newUser = new User(req.body);
  console.log(req.body)
let dateFormat = moment(req.body.createAt).format("MM-DD-YYYY")
newUser.createAt = dateFormat
    newUser.save((err, user) => {
      if(err) res.send(err)
      res.json(user)
    })
})

//tous les users
userRouter.get('/all', (req, res) => {
  User.find({}, (err, users) => {
    if(err) res.send(err)
    res.json(users)
  })
})


//récupérer un user
userRouter.get('/:id', (req, res) => {//c'est un paramètre id: l'id qu'on rentre ici doit correspondre à celui qu'on find dans notre base de données
  User.find({_id: req.params.id}, (err, user) => {
    if(err) res.send(err)
    res.json(user)
  })
})

//edit
userRouter.post('/edit/:id', (req, res) => {
  console.log(req.body)
  User.findByIdAndUpdate({_id: req.params.id}, req.body, (err, user) => {
    if(err) {
      console.log(error)
      return res.send('ok')
    }
    res.redirect("http://localhost:3000/admin")
  })
});

//delete
userRouter.delete('/delete/:id', (req, res) => {
  console.log('delete')
  let query = {_id:req.params.id}
  User.findByIdAndRemove(query, (err) => {
    if(err) res.send(err)
    res.json({message:"supprimé"})
});
});



export default userRouter
