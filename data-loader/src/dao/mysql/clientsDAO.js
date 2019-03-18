const pool = require('./pool');

const save = client => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO clients SET ?';
        pool.query(sql, client, (error, results) => {
            if(error) reject({ success: false, message: error.sqlMessage });
            if(results) {
                resolve({ success: !!results.affectedRows });
            }
        });
    });
}

module.exports = {
    save,
};