const Model  = require('../../models');
const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
    Model.Transaction.findAll({
        include: [Model.Operator, Model.Voucher]
    }).then((dataTransaction) => {
            // console.log(dataTransaction.Subject)
            res.render('transaction', {
              data: dataTransaction,
              pageTitle: "Transaction" })
        }).catch((err) => {
            res.json(err)
        })
})

router.get('/add', (req, res) => {
    Model.Voucher.findAll().then((dataVoucher) => {
      Model.Operator.findAll().then((dataOperator) => {
        res.render('addTransaction', {
          data: dataOperator,
          dataVoucher,
          pageTitle: "Add Data Transaction",
          message: '' })
    }).catch((err) => {
        res.json(err)
    })
  })
})

router.post('/add', (req, res) => {
    Model.Transaction.create({
        phone_number: req.body.phone_number,
        operator: req.body.operator,
        voucher: req.body.voucher,
        operatorId: req.body.operatorId,
        voucherId : req.body.voucherId,
        userId : req.body.userId
    }).then(() => {
        res.redirect('/api/transaction')
    }).catch((err) => {
        Model.Operator.findAll().then((dataOperator) => {
            res.render('addTransaction', {
              data: dataOperator,
              pageTitle: "Add Data Transaction",
              message: err.errors[0].type + ' : ' + err.errors[0].message })
        })
    })
})

module.exports = router;
