module.exports = {
    connection: process.env.DB_CONNECTION,
    connections: {
        mariadb: {
            driver: 'mysql2',
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || '3306',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            charset: 'utf8'
        }
    }
}