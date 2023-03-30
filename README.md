# Employee Management MYSQL

## Description
    
This project is specifically a back end application. Getting this project started was probably one of my more challenging assignments, however once I got the ball rolling it became a lot simpler to execute. This project is an employee management system, where, via prompts, a user will be able to: view all roles/departments/employees, add a/an role/department/employee, or update an employee. All of this information is stored via tables in the schema, and the data is able to be added to the tables via the seeds. The user experience is a lot simpler than what it was to create this application.
    
## Table of Contents
[Title](#-employee-managment-mysql)

[Description](##-description)

[Visuals](##-visuals)
  
[Installation Instructions](##-installation)

[Usage Information](##-usage)

[License](##-license)

[Contribution](##-contribution)

[Test Instructions](##-tests)

[Questions](##-questions)

## Visuals

Here is a demo video walking a user through the application.
    
## Installation
    
To use this application, you will need to have Node.js installed on your desktop. Once in your code editor of choice, you will need to open your terminal and initialize npm with the command: npm init. Once you have npm initialized, you will install npm with the command: npm install. You will need to ensure that you have mysql2, inquirer, and console.tables installed.
            
## Usage
    
To use this application, a user will need to initalize and install npm. Make sure that your personal mysql username and password are in the 'connection.js' file. After doing so you will be able to run the command "mysql -u root -p" and you will then be prompted to enter your password. Once you have entered the mysql terminal, you will then source your schema file with the command "source ./db/schema.sql", and you should then have the number of queries in that table displayed. You will then source your seeds with the command 'source ./db/seeds.sql,' which will then show you the number of queries you have in that table. You may then type "quit" to exit the mysql terminal. Lastly, you will need to run the command "node index.js" to initiate the prompts. From here the prompts will start and you will be able to navigate your way through them. 
    
## License 

This application is covered under the MIT License. For further explanation of what this license does please visit this provided link:  https://opensource.org/licenses/MIT
    
## Contribution
    
I am the sole contributor for this project.
  
## Tests
  
N/A
  
## Questions

Here is a link to my Github: [Olivia Gilbert](https://github.com/umhello2020)
If you have any additional questions, you may reach me at my personal email umhello2020@gmail.com.

