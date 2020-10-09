const { Pool } = require('pg')

const pool = new Pool({
    user: '',
    host: '',
    database: '',
    password: '',
    port: 5432,
    ssl: { rejectUnauthorized: false }
});

module.exports = {
    async runQuery(query, values) {
        const options = {
            text: query,
            values: values,
        }
        return pool.query(options);
    }
}