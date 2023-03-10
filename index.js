// Import and require Inquirer and the db folder
const { default: inquirer } = require('inquirer');
const Inquirer = require('inquirer');
const db = require('./db');
require("console.table");

function initPrompts () {
    Inquirer
        .prompt ([
            {
                type: 'list',
                message: "What would you like to do?",
                choices: [
                    {
                        name: "View All Departments",
                        value: "VIEW_DEPARTMENTS"
                    },
                    {
                        name: "View All Roles",
                        value: "VIEW_ROLES"
                    },
                    {
                        name: "View All Employees",
                        value: "VIEW_EMPLOYEES"
                    },
                    {
                        name: "Add a Department",
                        value: "ADD_DEPARTMENT"
                    },
                    {
                        name: "Add a Role",
                        value: "ADD_ROLE"
                    },
                    {
                        name: "Add an Employee",
                        value: "ADD_EMPLOYEE"
                    },
                    {
                        name: "Update an Employee Role",
                        value: "UPDATE_EMPLOYEE"
                    }
                ]
            }
        ]).then(res => {
            let choice = res.choice;
            switch(choice) {
                case "VIEW_DEPARTMENTS":
                    viewDepartments();
                    break;
                case "VIEW_ROLES":
                    viewRoles();
                    break;
                case "VIEW_EMPLOYEES":
                    viewEmployees();
                    break;
                case "ADD_DEPARTMENT":
                    addDepartment();
                    break;
                case "ADD_ROLE":
                    addRole();
                    break;
                case "ADD_EMPLOYEE":
                    addEmployee();
                    break;
                case "UPDATE_EMPLOYEE":
                    updateEmployee();
                    break;
                default:
                    quit();
            };
        });
};

function viewDepartments() {
    db
};

function viewRoles() {

};

function viewEmployees() {

};

function addDepartment() {
    inquirer
        .prompt ([
            {
                type: "input",
                message: "What department would you like to add?",
                name: "new_department"
            }
        ]).then(res => {

        })
};

function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What role would you like to add?",
                name: "new_role"
            }
        ]).then(res => {

        })
};

function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the first name of the employee you would like to add?",
                name: "first_name"
            },
            {
                type: "input",
                message: "What is the last name of the employee you would like to add?",
                name: "last_name"
            }
        ]).then (res => {
            let firstName = res.first_name;
            let lastName = res.last_name;
        })
};

function updateEmployee() {

};

function quit() {
    console.log("Thank you!");
    process.exit();
}

initPrompts();
