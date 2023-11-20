const fs = require("fs")
const path = require("path")

module.exports = class Model {
    constructor(filePath) {
        if (!filePath) {
            throw new Error("The path of the file is required")
        }
        this.filePath =  filePath;

    }
    read() {
        const fakeFile = require(this.filePath)
        if (!Array.isArray(fakeFile)) {
            throw new Error("The file is not an array")

        }
        return fakeFile
    }

    add(name, age) {
        let arrayElements = this.read()

        // let newElement = `{name: ${name}, age: ${age}}`
        const newElement = {name,age}

        arrayElements.push(newElement)

        fs.writeFileSync(this.filePath, JSON.stringify(arrayElements), "utf-8")

        return arrayElements;
    }
}