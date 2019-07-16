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


exports.insertT = function(id,content,progress){
    
    const query = {
        text: 'INSERT INTO todos VALUES($1, $2, $3)',
        values: [id, content, progress],
    }
    
    client.query(query, (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
          console.log("values inserted");
        }
      })
}