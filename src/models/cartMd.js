const conn = require('../configs/db')

module.exports = {
////////GET ALL note////////////////////////////
    getAllCart: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM cart ' , (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

//////// POST note ///////////////////////////

    createCart: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO cart SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
}