const Model = require('../../models')
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('register')
})
  router.post('/',(req,res) =>{
  let obj = {
    username : req.body.username,
    password : req.body.password,
  }
  Model.User.create(obj)
  .then(() => {
    res.redirect('/login')
  })
  .catch((err) => {
    console.log(err);
  })
})

module.exports = router
