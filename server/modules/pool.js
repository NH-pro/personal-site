const pg = require('pg'); // Postgres
const url = require('url');
let config = {};

if (process.env.DATABASE_URL) {
    let params = url.parse(process.env.DATABASE_URL);
    let auth = params.auth.split(':');

    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: { rejectUnauthorized: false },
        max: 10,
        idleTimeoutMillis: 30000,
    };

} else {
    config = {
        user: process.env.PG_USER || null,
        password: process.env.DATABASE_SECRET || null,
        host: process.env.DATABASE_SERVER || 'localhost', // Server hosting the postgres database
        port: process.env.DATABASE_PORT || 5432, //env var: PGPORT
        database: process.env.DATABASE_NAME || 'personal-website', //env var: PGDATABASE or DB name
        max: 10,
        idleTimeoutMillis: 30000,
    };
}

module.exports = new pg.Pool(config);