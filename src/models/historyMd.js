const conn = require('../configs/db')

module.exports = {
////////GET ALL note////////////////////////////
    getAllHistory: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM history INNER JOIN user ON history.id_kasir = user.id_user  ORDER BY history.id_history DESC' , (err, result) => {
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