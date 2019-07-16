const { Client } = require('pg')

const client = new Client({
    user: 'bosmanwillem94',
    host: 'localhost',
    database: 'tododb',
    password: 'mieper',
    port: 5432,
})
client.connect()

client.query("DELETE FROM todos", (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log("values deleted successfully");
    }
  })


  