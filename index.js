// Import and require Inquirer and the db folder
const { prompt } = require('inquirer');
const db = require('./db');
require("console.table");


// start initial prompts to navigate user
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

// View all departments
function viewDepartments() {
    db.displayDepartments()
        .then(([departments]) => {
            console.table(departments);
            initPrompts();
        });
};

// View all roles
function viewRoles() {
    db.displayRoles()
        .then(([roles]) => {
            console.table(roles);
            initPrompts();
        });
};

// View all employees
function viewEmployees() {
    db.displayEmployees()
        .then(([employees]) => {
            console.table(employees);
            initPrompts();
        });
};

// Add a department to the database
function addDepartment() {
    prompt ([
        {
            type: "input",
            message: "What department would you like to add?",
            name: "new_department"
        }
    ]).then(newDept => {
        db.addDepartment(newDept)
            .then(() => console.log(`Added ${newDept.name} to the Database!`))
            .then(() => initPrompts());
    });
};

// Add a role to the database
function addRole() {
    db.displayDepartments()
        .then(([depts]) => {
            const departmentChoices = depts.map(({ id, name }) => ({
                name: name,
                value: id
            }));

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
            ]).then(newRole => {
                db.addRole(newRole)
                    .then(() => console.log(`Added ${newRole.name} to the Database!`))
                    .then(() => initPrompts());
            });
        });
   
};

// Add an Employee to the database
function addEmployee() {
    db.displayRoles() 
    .then(([roles]) => {
        const roleChoices = roles.map(({ id, title }) => ({
            name: title,
            value: id
        }));

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
                choices: roleChoices
            
            }
        ]).then(res => {
            let firstName = res.first_name;
            let lastName = res.last_name;
            let newRole = res.new_role;
            
            db.displayEmployees()
                .then(([emps]) => {
                    const managerChoices = emps.map(({ id, first_name, last_name }) => ({
                        name: `${first_name} ${last_name}`,
                        value: id
                    }));

                    managerChoices.unshift({ name: "N/A", value: null });
                    prompt({
                        type: "input",
                        message: "Who is the employee's manager?",
                        name: "choose_mang",
                        choices: managerChoices
                    }).then(res => {
                        let newEmployee = {
                            manager_id: res.choose_mang,
                            role_id: newRole,
                            first_name: firstName,
                            last_name: lastName
                        };

                        db.addEmployee(newEmployee);
                    }).then(() => console.log(`Added ${firstName} ${lastName} to the database!`))
                    .then(() => initPrompts());
                });
        });
    });
};

// Update an employee that is already logged in the database
function updateEmployee() {
    db.displayEmployees()
    .then(([emps]) => {
        const employeeChoices = emps.map(({ id, first_name, last_name }) => ({
            name: `${first_name} ${last_name}`,
            value: id
        }));

        prompt([
            {
                type: "list",
                message: "Which employee would you like to update?",
                name: "choose_emp",
                choices: employeeChoices
            }
        ]).then(res => {
            let employee_id = res.choose_emp;
            db.displayRoles() 
            .then(([roles]) => {
                const roleChoices = roles.map(({ id, title }) => ({
                    name: title,
                    value: id
                }));

                prompt([
                    {
                        type: "list",
                        message: "What is the new role you would like to assign?",
                        name: "update_role",
                        choices: roleChoices
                    }
                ]).then(res => db.changeEmployee(employee_id, res.update_role))
                .then(() => initPrompts());
            });
        });
    });
    
};

function quit() {
    console.log("Thank you!");
    process.exit();
}


initPrompts();