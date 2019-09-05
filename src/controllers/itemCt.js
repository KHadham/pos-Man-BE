const itemModel = require('../models/itemMd')
const miscHelpers = require('../helpers/miscHelpers')
const jwt = require('jsonwebtoken')

module.exports = {
////// GET ALL Note ///////////////////////////////////////
CgetAllItem: (req, res) => {
    itemModel.getAllItem()
        .then((resultData) => {
            miscHelpers.response(res, resultData)
        })
        .catch((error) => {
            console.log(error)
        })
    },

/////// GET Note by Category  /////////////////////////////////////////////
    CgetItemByCategory: (req, res) => {
        const nama = req.params.namaKategori

        itemModel.getItemByCategory(nama)
        .then((resultData) => {
            const result = resultData
            miscHelpers.response(res, result, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    },
/////// GET 1 Note /////////////////////////////////////////////
    CgetByidItem: (req, res) => {
        const idnote = req.params.idItem
        console.log(req.params.idnote)
        itemModel.getByidNote(idnote)
        .then((resultData) => {
            const result = resultData
            miscHelpers.response(res, result, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    },
///////  POST item //////////////////////////////////////////////
    CpostItem: (req, res) => {
console.log(req.body.id_category)
        const data = {
            id_category: req.body.id_category,
            item_name: req.body.item_name,
            item_image: "http://localhost:5000/" + req.file.path,
            price: req.body.price

        }
    
        itemModel.createItem(data)
        .then(()=> {
            miscHelpers.response(res, data, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    },
/////// EDIT / PATCH itemn //////////////////////////////////////////////
    CeditItem: (req, res) => {
        let idnya = req.params.idItem

        const data = {
            id_category: req.body.id_category,
            item_name: req.body.item_name,
            item_image: req.file.path
        }
        

        itemModel.editItem(data,idnya)
                .then(() => {
                    miscHelpers.response(res, data, 200)
            })
            .catch((error) => {
                console.log(error)
            })
        },
//////// DELETE itemn /////////////////////////////////////////

CeraseItem: (req, res) => {
    let idnya = req.params.idItem

    itemModel.deleteItem(idnya)
            .then(() => {
                miscHelpers.response(res, idnya, 200)
        })
        .catch((error) => {
            console.log(error)
        })
    },

}