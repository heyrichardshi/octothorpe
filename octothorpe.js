// Onset (anlaut)
// Nucleus         \ Rhyme/Rime
// Coda (auslaut)  /

let fs = require('fs')

let elements = JSON.parse(fs.readFileSync('syllable.json'));

function getOnset(limit) {
    let onset = ''
    if (limit == 0) { return onset }
    let size = Object.keys(elements.onset).length
    do {
        let i = Math.floor(Math.random() * size)
        onset = elements.onset[i]
    } while (onset.length > limit)
    return onset
}

function getNucleus(limit) {
    let nucleus = ''
    if (limit == 0) { return nucleus }
    let size = Object.keys(elements.nucleus).length
    do {
        let i = Math.floor(Math.random() * size)
        nucleus = elements.nucleus[i]
    } while (nucleus.length > limit)
    return nucleus
}

function getCoda(limit) {
    let coda = ''
    if (limit == 0) { return coda }
    let size = Object.keys(elements.coda).length
    do {
        let i = Math.floor(Math.random() * size)
        coda = elements.coda[i]
    } while (coda.length > limit)
    return coda
}

function generateSyllable(limit) {
    let onset = getOnset(limit)
    limit -= onset.length
    let nucleus = getNucleus(limit)
    limit -= nucleus.length
    let coda = getCoda(limit)
    return onset + nucleus + coda
}

function generatePhrase(targetLen) {
    let phrase = ''
    while (phrase.length < targetLen) {
        phrase += generateSyllable(targetLen - phrase.length)
    }
    return phrase
}

console.log(generatePhrase(16))
