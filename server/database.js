
const Pool = require("pg").Pool;

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

// pool.connect((err, client, release) => {
//     if (err) {
//         return console.error('Error acquiring client', err.stack);
//     }
//     console.log('Connected to PostgreSQL database');
//     release(); // release the client back to the pool
// });

// pool.connect((err, client, release) => {
//     if (err) {
//         return console.error('Error acquiring client', err.stack);
//     }
//     console.log('Connected to PostgreSQL database');
//     release(); // Release the client back to the pool
// });

// // Handle connection errors
// pool.on('error', (err, client) => {
//     console.error('Unexpected error on idle client', err);
//     process.exit(-1); // Exit the application on error
// });

module.exports = pool;