const Model = require('../../models')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


  router.get('/', (req, res) => {
    res.render('login', {error: false})
  })
  router.post('/', (req, res) => {
    Model.User.findOne({
      where: {
        username: req.body.username
      }
    }).then(function(user){
      if(user){
        bcrypt.compare(req.body.password, user.password).then((result) => {
          if (result) {
            req.session.loggedIn = true
            req.session.username = user.username
            // res.json({
            //   msg : "1",
            //   status : "login sukses"
            // })
            res.redirect('/api/transaction/add')
          } else {
            res.render('login', {error: true})
          }
        })
      } else {
        res.render('login', {error: true})
      }
    })
  })

module.exports = router
