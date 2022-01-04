// Code your solutions in this file
const peoples = ["Ben", "Josh", "Matt"]

const writeCards = (listOfNames, emotions) => {
    let message = []
    for (let i = 0; i < listOfNames.length; i++) {
        const names = listOfNames[i];
        message[i] = `Thank you, ${names}, for the wonderful ${emotions} gift!`
    }
    return message
}

const countDown = (num) => {
    while (num >  0 - 1){
        console.log(num)
        num--
    }
 }

console.log(writeCards(peoples,"awesome"))
console.log(countDown(10))