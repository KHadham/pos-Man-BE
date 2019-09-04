const app = require('express')
const Routes = app.Router()
const HistoryController = require('../controllers/historyCt')

Routes
    .get    ('/',           HistoryController.CgetAllHistory  )
    //.get    ('/:idItem',    HistoryController.CgetByidItem )
    .post   ('/',           HistoryController.CpostHistory )
    //.patch  ('/edit/:idItem',upload.single('item_image'), HistoryController.CeditItem)
    //.delete ('/delete/:idItem', HistoryController.CeraseItem)

module.exports = Routes