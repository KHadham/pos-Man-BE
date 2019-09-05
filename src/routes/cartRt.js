const app = require('express')
const Routes = app.Router()
const cartController = require('../controllers/cartCt')

Routes
    .get    ('/',           cartController.CgetAllCart  )
    .post   ('/',           cartController.CpostCart )
   

module.exports = Routes