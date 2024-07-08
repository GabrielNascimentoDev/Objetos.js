const setup = require("./setup.json")

const objSetup = JSON.parse(setup)

const novoObj = {
    "mesa": 400
}
setup.push(novoObj)

console.log(setup);