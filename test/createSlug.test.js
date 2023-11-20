const { test, expect } = require("@jest/globals")
const createSlug = require("../utilities/createSlug")


test("dovrebbe restituire una stringa", () => {
    const text = "Hello Hell"
    const result = createSlug(text)

    expect(typeof result).toBe("string")
})

test("dovrebbe restituire una stringa in lowercase", () => {
    const text = "maRco-Se-la-Comanda"
    const result = createSlug(text)

    expect(result).toBe("marco-se-la-comanda")
})

test("dovrebbe ritornare una stringa con gli spazi sostituiti da -", () => {
    const text = "marco se la comanda"
    const result = createSlug(text)
    expect(result).toBe("marco-se-la-comanda")
})

test("dovrebbe incrementare di 1 lo slug quando esiste già -", () => {
    const text = "ciao mondo"
    const result = createSlug(text)

    expect(result).toMatch(/^ciao-mondo-\d+$/)
})

test("dovrebbe lanciare un errore in caso di titolo non presente o formato errato", () => {

    const result = () => createSlug({ marco: "ciccio", maria: "ciccia" })
    expect(result).toThrowError("The slug is required and must be a string")
})

test("dovrebbe lanciare un errore se manca l’array dei post", () => {
    const posts = require("../db/emptyPosts.json")

    const testFunction = () => {
        if (!Array.isArray(posts) || posts.length <= 1) {
            throw new Error("posts is missing or not an array");
        }
    };
    expect(testFunction).toThrowError("posts is missing or not an array")
})