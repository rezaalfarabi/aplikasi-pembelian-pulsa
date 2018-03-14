const Model  = require('../../models');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    Model.Operator.findAll().then((dataOperator) => {
      //======= response data JSON ================
      // res.json({
      //   dataOperator
      // })
        res.render('operator', {
          data: dataOperator,
          pageTitle: "Operators"
        })
    }).catch((err) => {
        res.json(err)
    });
});

router.get('/add', (req, res) => {
    res.render('addOperator', {
      pageTitle: "addOperator",
      message: 'success' })
});

router.post('/add', (req, res) => {
    Model.Operator.create({
        nama_operator: req.body.nama_operator
    }).then(() => {
        res.redirect('/api/operator')
    }).catch((err) => {
        res.render('addOperator', {
          pageTitle: "addOperator",
           message: err.errors[0].type + ' : ' + err.errors[0].message })
    });
});

router.get('/edit/:id', (req, res) => {
    Model.Operator.findById(req.params.id).then((dataOperator) => {
      // ========== response JSON ============
      // res.json({
      //   dataOperator
      // })
        res.render('editOperator', {
          data: dataOperator,
           pageTitle: 'Edit Operator',
           message: '' })
    }).catch((err) => {
        res.json(err)
    })
})

router.post('/edit/:id', (req, res) => {
    Model.Operator.update({
        id: req.params.id,
        nama_operator: req.body.nama_operator,
    }, {
        where: {
         id: req.params.id
        }
      }).then(() => {
     res.redirect('/api/operator')
     }).catch((err) => {
      Model.Operator.findById(req.params.id).then((dataOperator) => {
      res.render('editOperator', {
        data: dataOperator,
        pageTitle: 'Edit Operator',
        message: err.errors[0].type + ' : ' + err.errors[0].message })
    })
  })
})

router.get('/delete/:id', (req, res) => {
  let hapusRecord = req.params.id
  Model.Operator.destroy({where:{id:hapusRecord}}).then(() => {
    res.redirect('/api/operator')
  })
})

module.exports = router;
