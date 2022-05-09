const tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
];

const titleCased = () => {
    // use the .map method on the tutorials to return a new array
    return tutorials.map(tutorial => {
        return makeStringTitleCase(tutorial)
    })
}


const makeStringTitleCase = function(entry) {

    const splitSentance = entry.split(" ")

    for (let i = 0; i < splitSentance.length; i++) {
        splitSentance[i] = splitSentance[i][0].toUpperCase() + splitSentance[i].substr(1)
    }

    return splitSentance.join(" ")

}

console.log(makeStringTitleCase(string))
console.log(titleCased())

// console.log(titleCased(tutorials))