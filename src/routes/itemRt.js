const app = require('express')
const Routes = app.Router()
const ItemControler = require('../controllers/itemCt')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage })

Routes
    .get    ('/',           ItemControler.CgetAllItem  )
    .get    ('/:idItem',    ItemControler.CgetByidItem )
    .get    ('/byCategory/:namaKategori',    ItemControler.CgetItemByCategory )
    .post   ('/',           upload.single('item_image'),ItemControler.CpostItem )
    .patch  ('/edit/:idItem',upload.single('item_image'), ItemControler.CeditItem)
    .delete ('/delete/:idItem', ItemControler.CeraseItem)

module.exports = Routes