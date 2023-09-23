const messages = {
    arr1: ['What do you want to do?', 'What do you want to eat?', 'What’s on your mind?', 'Do you have a minute?', 'What’s happening this weekend?'],
    arr2: ['No worries.', 'Long time no see!', 'Be right back.', 'Thanks a million.', 'It doesn’t matter.', 'Don’t stress.']
}


function generateRandomMessage() {
    
    for (let message in messages) {
        let randomIndex = Math.floor(Math.random() * messages[message].length)
        let randomMessage = messages[message][randomIndex]
        console.log(randomMessage)
    }
}

generateRandomMessage()