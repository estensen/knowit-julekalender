// Kongen av Indonesia har som tradisjon å sende sine julehilsener kryptert til
// sine venner. I år skjedde det en glipp og kongen sendte meldingen til alle i
// hele verden med en email adresse, vi har også fått meldingen og trenger hjelp
// til å dekryptere den. Med meldingen fulgte også følgende instruksjoner på
// hvordan den kan dekrypteres:

// For å dekryptere meldingen må man først legge sammen parene i listen,
// ett par er første og siste element, andre og nest siste element og så videre.
// Når du har alle verdiene kan du oversette disse til bokstaver,
// hvor a = 1 og z = 26.
// Kryptert melding: http://pastebin.com/xfX3msCL

const fetch = require('node-fetch')
const URL = 'http://pastebin.com/raw/xfX3msCL'

fetch(URL)
  .then(function(res) {
    return res.text()
  }).then(function(body) {
    body = body.slice(1, body.length)
    arabic = body.split(', ')
    letters = []

    for (let i = 0; i < arabic.length / 2; i++) {
      letters.push(numberToLetter(romanToArabicNumerals(arabic[i])
        + romanToArabicNumerals(arabic[arabic.length - 1 - i])))
    }
    console.log(letters.join(''))
    // gladejulhelligejulenglerdalernediskjulhitdeflyvermedparadisgronthvordeserhvaforguderskjontlonnligiblantossdegarlonnligiblantossdegarjulefrydevigefrydhelligsangmedhimmelsklyddetvarenglersomhyrdenesadengangherrenikrybbenlaevigerenglenessangevigerenglenessangsaligfredhimmelskfredtonerjulenatthernedenglerbringertilstoreogsmabudomhamsomikrybbenlafryddeghversjelhanharfrelstfryddeghversjelhanharfrelst

  })

function romanToArabicNumerals (str) {
  let result = 0
  let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  for (let i = 0; i<= arabic.length; i++) {
    while (str.indexOf(roman[i]) === 0) {
      result += arabic[i]
      str = str.replace(roman[i], '')
    }
  }
  return result
}

function numberToLetter (n) {
  return String.fromCharCode(96 + n)
}
