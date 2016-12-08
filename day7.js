/* En skøyen alv har gjemt pakkene til nissen og julaften står i fare! Alven
etterlot seg et kart over med et rødt kryss midt på finnmarksvidda med tekst
'start here'. På baksiden av kartet er det instruksjoner som sier hvor du skal
gå fra krysset. Du har fått som oppgave å hjelpe nissen med å finne pakkene og
redde julaften.

Skattekartet har veldig mange steg, men du ser kjapt at det bare består av 4
forskjellige instruksjoner, å gå x antall meter nord (north), sør (south),
øst (east), eller vest (west). Du bestemmer deg for å lage et program som samler
disse stegene og returnerer antall meter nord og antall meter vest, hvor et
negativt tall betyr motsatt retning.

Eksempel:
walk 10 meters north
walk 10 meters south
walk 10 meters west
walk 10 meters east
walk 3 meters north
walk 2 meters east

gir resultatet:
3,-2

Skattekart: http://pastebin.com/BZrAMcN2 */

const fetch = require('node-fetch')
const URL = 'http://pastebin.com/raw/BZrAMcN2'

let x = 0
let y = 0

fetch(URL).then(function(res) {
  return res.text()
}).then(function(body) {
  // console.log(body)
  body = body.split('\r\n')
  for (let i = 0; i < body.length; i++) {
    line = body[i].split(' ')
    //console.log(line[1])
    switch (line[3]) {
      case 'north':
        x += parseInt(line[1])
        break
      case 'east':
        y -= parseInt(line[1])
        break
      case 'south':
        x -= parseInt(line[1])
        break
      case 'west':
        y += parseInt(line[1])
        break
    }
  }
  console.log(x + ',' + y)
})
