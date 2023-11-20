module.exports = function (text) {
    const users = require("../db/posts.json")

    // should throw an error in case of missing or invalid title 
    if(!text || typeof text != "string"){
        throw new Error("The slug is required and must be a string")
    }

    // should return a string and lowercase 
    let editText = text.toString().toLowerCase()

    // should return a string with spaces replaced by - 
    let kebabString = editText.replaceAll(" ", "-")


    // should increment the slug by 1 when it already exists 
    const userWithSameSlug = users.find((user) => user.slug == kebabString)
    if (userWithSameSlug) {
        let index = 0
        const arrayIndexes = users.map((user) => index++)
        let maxIndex = Math.max(...arrayIndexes)
        kebabString = kebabString + "-" + (maxIndex + 1)
    }



    return kebabString
}