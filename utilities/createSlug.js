module.exports = function (text) {

    let editText = text.toString().toLowerCase()
    let kebabString = editText.split(" ").join("-")


    return kebabString
}