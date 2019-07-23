const { Client } = require('pg')

const client = new Client({
    user: 'bosmanwillem94',
    host: 'localhost',
    database: 'tododb',
    password: 'mieper',
    port: 5432,
})
client.connect()
todoout = [];


client.query('SELECT * FROM todos', (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    todoout.push(res.rows);
    exports.todoout = todoout;
  }
})





