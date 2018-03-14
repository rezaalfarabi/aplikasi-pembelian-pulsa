const Model  = require('../../models');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    Model.Voucher.findAll().then((dataVoucher) => {
      //======= response data JSON ================
      // res.json({
      //   dataVoucher
      // })
        res.render('voucher', {
          data : dataVoucher,
          pageTitle : "Voucher"
        })
    }).catch((err) => {
        res.json(err)
    });
});

router.get('/add', (req, res) => {
    res.render('addVoucher', {
      pageTitle: "addVoucher",
      message: 'success' })
});

router.post('/add', (req, res) => {
    Model.Voucher.create({
        harga: req.body.harga
    }).then(() => {
        res.redirect('/api/voucher')
    }).catch((err) => {
        res.render('addVoucher', {
          pageTitle: "addVoucher",
           message: err.errors[0].type + ' : ' + err.errors[0].message })
    });
});

router.get('/edit/:id', (req, res) => {
    Model.Voucher.findById(req.params.id).then((dataVoucher) => {
      // ========== response JSON ============
      // res.json({
      //   dataVoucher
      // })
        res.render('editVoucher', {
          data: dataVoucher,
           pageTitle: 'Edit Voucher',
           message: '' })
    }).catch((err) => {
        res.json(err)
    })
})

router.post('/edit/:id', (req, res) => {
    Model.Voucher.update({
        id: req.params.id,
        harga: req.body.harga,
    }, {
        where: {
         id: req.params.id
        }
      }).then(() => {
     res.redirect('/api/voucher')
     }).catch((err) => {
      Model.Voucher.findById(req.params.id).then((dataVoucher) => {
      res.render('editVoucher', {
        data: dataVoucher,
        pageTitle: 'Edit Voucher',
        message: err.errors[0].type + ' : ' + err.errors[0].message })
    })
  })
})

router.get('/delete/:id', (req, res) => {
  let hapusRecord = req.params.id
  Model.Voucher.destroy({where:{id:hapusRecord}}).then(() => {
    res.redirect('/api/voucher')
  })
})

module.exports = router;
