
const postgres = require('./core')

async function getUsers() {
    return postgres.runQuery('SELECT * FROM users', []);
}

getUsers().then(data => {
    console.log(data.rows);
});