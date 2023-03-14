// Import and require Inquirer and the db folder
const { prompt } = require('inquirer');
const db = require('./db');
require("console.table");


// function to start initial prompts to navigate user
function initPrompts () {
    prompt ([
        {
            type: 'list',
            message: "What would you like to do?",
            name: "choice",
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
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        // whichever user chooses will navigate them to the appropriate function
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
                quit(); //if they do not choose any of the others then the default choice will be to quit the function
        };
    });
};

function viewDepartments() {
    db.displayDepartments()
        .then(([departments]) => {
            console.log(departments);
            console.log("\n");
            console.table(departments);
        }).then(() => initPrompts() ) 
};

function viewRoles() {
    db.displayRoles()
        .then(([roles]) => {
            console.table(roles);
            initPrompts();
        })
};

function viewEmployees() {
    // db.displayEmployees()
    //     .then(([employees]) => {
    //         console.table(employees);
    //     }).then(() => {
    //         initPrompts();
    //     });
};

function addDepartment() {
    prompt ([
        {
            type: "input",
            message: "What department would you like to add?",
            name: "new_department"
        }
    ]).then(res => {

    })
};

function addRole() {
    prompt([
        {
            type: "input",
            message: "What role would you like to add?",
            name: "new_role"
        },
        {
            type: "input", 
            message: "What is the salary of this role?",
            name: "new_salary"
        },
        {
            type: "list",
            message: "What department will this role be in?",
            name: "choose_dep",
            choices: departmentChoices
        }
    ]).then(res => {

    })
};

function addEmployee() {


    prompt([
        {
            type: "input",
            message: "What is the first name of the employee you would like to add?",
            name: "first_name"
        },
        {
            type: "input",
            message: "What is the last name of the employee you would like to add?",
            name: "last_name"
        },
        {
            type: "input",
            message: "What is the employee's role?",
            name: "new_role",
            choices: [empRoles]

        },
        {
            type: "input",
            message: "Who is the employee's manager?",
            name: "choose_mang"
        }
    ]).then (res => {
        let firstName = res.first_name;
        let lastName = res.last_name;
    })
};

function updateEmployee() {
    prompt([
        {
            type: "list",
            message: "Which employee would you like to update?",
            name: "choose_emp",
            choices: employeeChoices
        }
    ]).then ()
};

function quit() {
    console.log("Thank you!");
    process.exit();
}


initPrompts();