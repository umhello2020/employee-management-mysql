// Import and require express, mysql2, and inquirer
const express = require('express');
const mysql = require('mysql2');
const { prompt } = require('inquirer');

const PORT = process.env.port || 3001;
const app = express();

// Use express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database you have created
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Enter your MYSQL username
        user: 'root',
        // Enter your MYSQL password
        password: 'inv7alid',
        database: 'employee_db'
    },
    console.log('Connected to the employee_db database.')
);

// Create a department
app.post('/api/new-department', ({ body }, res) => {
    const sql = `INSERT INTO department ()`
})