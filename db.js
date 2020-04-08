const express = require('express')
const app = express()
const {Client, Pool} = require('pg')

const dbConfig = {
    host:'localhost',
    user:'postgres',
    database:'postgres',
    password:'admin',
    port:5432
}

const pool = new pg.Pool(dbConfig)
pool.on('error', function (err) {
	winston.error('idle client error', err.message, err.stack)
})

module.exports = {
	pool,
	query: (text, params, callback) => {
		return pool.query(text, params, callback)
	}
}