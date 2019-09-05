const cartModel = require('../models/cartMd')
const miscHelpers = require('../helpers/miscHelpers')

module.exports = {
////// GET ALL Note ///////////////////////////////////////
CgetAllCart: (req, res) => {
    cartModel.getAllCart()
        .then((resultData) => {
            miscHelpers.response(res, resultData)
        })
        .catch((error) => {
            console.log(error)
        })
    },

///////  POST item //////////////////////////////////////////////
CpostCart: (req, res) => {

    const data = {
        item_list:req.body.item_list ,
        no_reciept: req.body.no_reciept,
        id_kasir: req.body.id_kasir,
        transaksi:req.body.transaksi
    }

    cartModel.createCart(data)
        .then(()=> {
            miscHelpers.response(res, data, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    }