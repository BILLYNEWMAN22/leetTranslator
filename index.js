let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

function leetTranslator(string){
    let conversion = new Object()
    let convertedString = ""
    let string1 = string.toLowerCase()

    for (let i = 0; i < letters.length; i++){
        conversion[letters[i]] = leetChars[i]
    }

    for (x of string1) {
        for (key in conversion) {
            if (x === key) {
                convertedString += conversion[key]
            }
        }
    }
    return convertedString
}
leetTranslator("BILLY")
