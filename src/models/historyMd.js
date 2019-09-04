const conn = require('../configs/db')

module.exports = {
////////GET ALL note////////////////////////////
    getAllHistory: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM history' , (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

//////// POST note ///////////////////////////

    createHistory: (data) => {
      return new Promise((resolve, reject) => {
          conn.query('INSERT INTO history SET ?', data, (err, result) => {
              if (!err) {
                  resolve(result)
              } else {
                  reject(err)
              }
          })
      })
    },
  }