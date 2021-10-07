import path from 'path'

export default {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'cleardb-heroku',
    }
  }
}