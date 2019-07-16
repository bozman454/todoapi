const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req,res,next)=>{
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Headers','content-type');
	return next();
});
const todoQuery = require('./dbget.js')
const todoInsert = require('./dbinsert.js')
todos = [];

function getTodos(){
	return new Promise(function(resolve,reject){
		todoout = todoQuery.todoout
	})
}

insertT = todoInsert.insertT;

getTodos() 
.then(
	app.get('/api/v1/todos', (req, expressres) => {
	expressres.status(200).send(todoout)
	})
)

app.post('/api/v1/todos', (req, res) =>{
	console.log(req.body);
	if(!req.body.content || !req.body.id){
		return res.send(400).send({
			success: 'false',
			message: 'your json sucks brah'
		});
	}
	else{
		 const newtodo = {
			 id: req.body.id,
			 content: req.body.content,
			 progress: req.body.progress
		 }
		 insertT(req.body.id, req.body.content, req.body.progress)
		 
		 return res.status(201).send({
			 success: 'true',
			 message: 'you did it dude',
			 newtodo
		 })
		
	}
});

app.listen(port, () => {console.log('Server Started')})


