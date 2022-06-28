let friendsList = ['fay', 'joe', 'kay', 'josh']

function whoIsPaying() {
    let payPerson = friendsList[Math.floor(Math.random() * friendsList.length)]
    console.log(payPerson + " is paying for what we all bought");
}

function ioWhoIsPaying() {
    console.log("How much is the bill?");
    process.stdin.once('data', (chunk) => {
        whoIsPaying()
        console.log("The bill total is " + Number(chunk) + " naira");
        process.exit()
    })
}

// whoIsPaying()
ioWhoIsPaying()