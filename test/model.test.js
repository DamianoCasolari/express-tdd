const { test, expect } = require("@jest/globals")
const Model = require("../models/model")
const fs = require("fs")
const path = require("path")

test("Model dovrebbe essere una classe", () => {
    expect(typeof Model).toBe("function")
})

test("L’istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell’istanza", () => {
    const istanceOfModel = () => new Model()

    expect(istanceOfModel).toThrowError("The path of the file is required")
})

test("L’istanza di model dovrebbe avere il metodo read", () => {
    const istanceOfModel = new Model("../db_test/fakeFile.json")

    expect(istanceOfModel).toHaveProperty("read")
})

test("L’istanza di model dovrebbe avere il metodo add", () => {
    const istanceOfModel = new Model("../db_test/fakeFile.json")

    expect(istanceOfModel).toHaveProperty("add")
})

test("read dovrebbe ritornare un array", () => {
    const istanceOfModel = new Model("../db_test/fakeFile.json")

expect(Array.isArray(istanceOfModel.read())).toBe(true)
})

test("read dovrebbe ritornare un errore in caso il file non sia un array", () => {
    const istanceOfModel = new Model("../db_test/fakeInvalidFile.json")
const isArray = ()=> istanceOfModel.read()

expect(isArray).toThrowError("The file is not an array")
})

test("add dovrebbe aggiungere un elemento all’array dei dati e ritornare tutta la lista", () => {

    const istanceOfModel = new Model(path.resolve(__dirname,"../db_test/fakeFile.json" ))
    const initialArray = istanceOfModel.read();
    const deepCopy = [...initialArray]
    const newArrayList = istanceOfModel.add("marco",42); 

    expect(Array.isArray(initialArray)).toBe(true); 
    expect(newArrayList).toContainEqual({ "name": "marco", "age": 42 }); 
    expect(newArrayList).toHaveLength(deepCopy.length + 1);
})