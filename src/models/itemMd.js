const conn = require('../configs/db')

module.exports = {
////////GET ALL note////////////////////////////
    getAllItem: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT item.* ,category.category_name FROM item INNER JOIN category ON item.id_category = category.id_category' , (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

////////GET ALL note////////////////////////////
    getItemByCategory: (namaKategori) => {
        return new Promise((resolve, reject) => {
            conn.query(
                'SELECT item.* ,category.category_name FROM item INNER JOIN category ON item.id_category = category.id_category WHERE category.category_name = ?' ,namaKategori, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },  
////////GET 1 note////////////////////////////

    getByidItem: (idnote) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM note WHERE id_note = ?', idnote, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
//////// POST note ///////////////////////////

    createItem: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO item SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },

////////  EDIT note ////////////////////////////

    editItem: (data, id) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE item SET ? WHERE id_item = ?', [data, id], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
//////// DELETE item ////////////////////////////
    deleteItem: (id_nya) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM item WHERE id_item = ?', id_nya, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
}