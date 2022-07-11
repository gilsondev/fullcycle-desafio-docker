import express from 'express'
const app = express()
const host = '0.0.0.0'
const port = 3000

import {UserService, connectDatabase, closeConnection} from './service.js'

app.get('/', (req, res) => {
  let connection = connectDatabase()
  let service = new UserService(connection)
  let content = `<h1>Full Cycle Rocks!</h1>`
  content += `<br/><hr/><br/>`

  service.insertRandomUser();
  service.fetchUsers((users) => {
    users.forEach(user => {
      content += `User: <strong>${user.name}</strong><br/>`
    }); 

    closeConnection(connection)
    res.send(content)
  });
})

app.listen(port, host, () => {
  console.log(`Node Webapp: Listening on port ${host}:${port}`)
})