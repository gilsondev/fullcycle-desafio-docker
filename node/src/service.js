import mysql from 'mysql'
const db_config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const names = ["Wesley", "Alexandre", "Carlos", "Marcos", "Henrique", "João", "Augusto", "Juliana"]

const randomNames = () => {
  let index = Math.floor(Math.random() * names.length)
  return names[index]
}

export const connectDatabase = () => {
    let connection = mysql.createConnection(db_config)
    connection.connect((error) => {
        if (error) throw error
    });

    return connection
}

export const closeConnection = (connection) => {
  connection.end()
}

export class UserService {
  constructor(connection) {
    this.connection = connection
  }

  insertRandomUser() {
    this.connection.query(`INSERT INTO people (name) VALUES ('${randomNames()}')`, (error) => {
      if (error) throw error;
    })
  }

  fetchUsers(callback) {
    this.connection.query("SELECT name FROM people", (error, result) => {
      if (error) throw error;
      callback(result)
    })
  }
}