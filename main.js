#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (condition) {
    let todoListOptions = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: chalk.underline.green("Please Select an option"),
            choices: ["Add item", "Remove item", "Update item", "View list", "Quit"]
        }
    ]);
    if (todoListOptions.options === "Add item") {
        let add = await inquirer.prompt([
            {
                name: "addtodo",
                type: "input",
                message: chalk.magenta("What do you want to add in your todos?")
            }
        ]);
        if (add.addtodo !== '') {
            todos.push(add.addtodo);
            // todos.forEach(todos => console.log(todos));
            for (let item of todos) {
                console.log(chalk.yellowBright(todos.indexOf(item) + 1 + '- ' + item));
            }
        }
        else if (add.addtodo === '') {
            console.log(chalk.redBright("Please add something in your todo list!!!"));
        }
    }
    else if (todoListOptions.options === "Update item") {
        let update = await inquirer.prompt([
            {
                name: "todoupdate",
                type: "list",
                message: chalk.magenta("Select an item which you want to update: "),
                choices: todos.map(item => item)
            }
        ]);
        let add = await inquirer.prompt([
            {
                name: "addtodo",
                type: "input",
                message: chalk.magenta("Which item do you want to add in your todos?")
            }
        ]);
        let newTodos = todos.filter(val => val !== update.todoupdate);
        todos = [...newTodos, add.addtodo];
        // todos.forEach(todoupdate => console.log(todoupdate));
        for (let item of todos) {
            console.log(chalk.yellowBright(todos.indexOf(item) + 1 + '- ' + item));
        }
    }
    else if (todoListOptions.options === "View list") {
        console.log(chalk.blueBright("****Your To-Do List****"));
        // todos.forEach(todos => console.log(todos));
        for (let item of todos) {
            console.log(chalk.bold.yellowBright(todos.indexOf(item) + 1 + '- ' + item));
        }
    }
    else if (todoListOptions.options === "Remove item") {
        let remove = await inquirer.prompt([
            {
                name: "removetodo",
                type: "list",
                message: chalk.magenta("Select an item which you want to remove?"),
                choices: todos.map((item) => item)
            }
        ]);
        let newTodos = todos.filter(val => val !== remove.removetodo);
        todos = [...newTodos];
        // todos.forEach(removetodo => console.log(removetodo));
        for (let item of todos) {
            console.log(chalk.yellowBright(todos.indexOf(item) + 1 + '- ' + item));
        }
    }
    else if (todoListOptions.options === "Quit") {
        console.log(chalk.blackBright("Program is Quiting......."));
        condition = false;
    }
}
