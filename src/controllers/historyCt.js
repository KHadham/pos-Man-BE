const historyModel = require('../models/historyMd')
const miscHelpers = require('../helpers/miscHelpers')

module.exports = {
////// GET ALL Note ///////////////////////////////////////
CgetAllHistory: (req, res) => {
    historyModel.getAllHistory()
        .then((resultData) => {
            miscHelpers.response(res, resultData)
        })
        .catch((error) => {
            console.log(error)
        })
    },

///////  POST item //////////////////////////////////////////////
CpostHistory: (req, res) => {

    const data = {
        item_list:req.body.item_list ,
        no_reciept: req.body.no_reciept,
        id_kasir: req.body.id_kasir,
        transaksi:req.body.transaksi
    }

    historyModel.createHistory(data)
    .then(()=> {
        miscHelpers.response(res, data, 200)
    })
        .catch((err) => {
            console.log(err)
        })
    },

    }