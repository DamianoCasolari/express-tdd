const { test, expect } = require("@jest/globals")
const model = require("../models/model")
const Model = require("../models/model")
const { read } = require("fs")

test("Model dovrebbe essere una classe", () => {
    expect(typeof model).toBe("function")
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
    const instanceOfModel = new Model("../db_test/fakeFile.json");
    const initialArray = instanceOfModel.read();
    const newArrayList = instanceOfModel.add("marco",42); 

    expect(Array.isArray(newArrayList)).toBe(true); 
    expect(newArrayList).toContainEqual({ name: "marco", age: 42 }); 
    expect(newArrayList).toHaveLength(initialArray.length + 1);
})