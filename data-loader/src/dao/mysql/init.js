const pool = require('./pool');

const init = () => {
    const sql = `CREATE TABLE clients 
        (
            id BIGINT,
            first_name VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci,
            last_name VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci,
            email VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci,
            gender VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci,
            ip_address VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci,
            last_login VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci,
            account_balance VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci,
            country VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci,
            favorite_color VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci,
            PRIMARY KEY (id)
        );`

    pool.query(sql, (err, result) => {
        if (err) {
            console.log("table exist")
        } else {
            console.log("Table created"), result;
        }
    });
}

module.exports = init;