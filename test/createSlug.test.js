const{test, expect} = require("@jest/globals")
const createSlug = require("../utilities/createSlug")


test("dovrebbe restituire una stringa", ()=>{
    const text = {marco:"ciccio", maria:"ciccia"}
    const result = createSlug(text)

    expect(typeof result).toBe("string")
})


test("dovrebbe restituire una stringa in lowercase", ()=>{
    const text = "maRco-Se-la-Comanda"
    const result = createSlug(text)

    expect(result).toBe("marco-se-la-comanda")
})

test("dovrebbe ritornare una stringa con gli spazi sostituiti da -", ()=>{
    const text = "marco se la comanda"
    const result = createSlug(text)

    expect(result).toBe("marco-se-la-comanda")
})