let raceNumber = Math.floor(Math.random() * 1000);
let runnerRegistryEarly= true;
let runnerAge = 22
if (runnerRegistryEarly&&runnerAge>18) {
  raceNumber+=1000;
  console.log(`Number ${raceNumber} you will be racing at 9:30 am.`)
} else if (!runnerRegistryEarly&&runnerAge>18) {
  console.log(`Number ${raceNumber} you will be racing at 11:00 am.`)
}
if (runnerAge< 18) {
  console.log(`Number ${raceNumber} you will be racing at 12:30 am.`)
} else if (runnerAge===18) {
  console.log(`Number ${raceNumber} please visit the registration desk.`)
}
 