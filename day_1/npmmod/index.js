// first we hve to initialize the npm to use (i:e - npm init)


const chalk = require("chalk")
const validator = require('validator')

console.log(chalk.red.inverse('chinmay'))

const a = validator.isEmail("chinmay@dora.com")
console.log(a ? chalk.green(a) : chalk.red(a))
