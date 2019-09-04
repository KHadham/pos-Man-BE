const categoryModel = require('../models/categoryMd')
const miscHelpers = require('../helpers/miscHelpers')

module.exports = {
////// GET ALL CATEGORY ///////////////////////////////////////

    CgetAllCategory: (req, res) => {
        categoryModel.getAllCategory()
            .then((resultData) => {
                miscHelpers.response(res, resultData)
            })
            .catch((error) => {
                console.log(error)
            })
        },

/////// GET 1 CATEGORY /////////////////////////////////////////////

    CgetByidNote: (req, res) => {
        const idnote = req.params.idCategory

        categoryModel.getByidCategory(idnote)
        .then((resultData) => {
            const result = resultData
            miscHelpers.response(res, result, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    },
///////  POST CATEGORY //////////////////////////////////////////////

CpostCategory: (req, res) => {

        const data = {
            category_name: req.body.category_name,
            category_image: req.file.path,
        }

        categoryModel.createCategory(data)
        .then(()=> {
            miscHelpers.response(res, data, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    },
/////// EDIT / PATCH CATEGORY //////////////////////////////////////////////

    CeditCategory: (req, res) => {
        let idnya = req.params.idCategory

        const data = {
            category_name: req.body.category_name,
            category_image: req.file.path,
        }

    categoryModel.editCategory(data,idnya)
            .then(() => {
                miscHelpers.response(res, data, 200)
        })
        .catch((error) => {
            console.log(error)
        })
    },
//////// DELETE CATEGORY /////////////////////////////////////////

CeraseCategory: (req, res) => {
    let idnya = req.params.idCategory

    categoryModel.deleteCategory(idnya)
        .then(() => {
            miscHelpers.response(res, idnya, 200)
        })
        .catch((error) => {
            console.log(error)
        })
    },
}