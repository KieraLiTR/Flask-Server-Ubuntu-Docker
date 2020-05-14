'use strict';

const express = require('express');
const request = require('request');
const http = require('http');
const querystring = require('querystring');

const HOST = '0.0.0.0';
const PORT = 5001;

const app = express();

app.post('/',  (req, res) => {
	const input = req.query.input;

	let data = {
		url: `http://flask:5000/${process.env.API_ENV}/flip/${input}`,
		headers: { 'Content-Type': 'application/json' },
	};

	console.log(data)

	request.post(data, (error, response, body) => {
		let return_json = {
			'actualWord': input,
		    'flippedWord': body,
		    'isPalindrome': input == body,
		};
		res.send(return_json);
	});
})

app.listen(PORT, HOST);