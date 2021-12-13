const env = require('./.env')

export default {
  development: {
    client: 'mysql2',
    connection: {
      host: env.host,
      user: env.user,
      database: env.database,
      port: 3306,
      password: env.password
    }
  }
}