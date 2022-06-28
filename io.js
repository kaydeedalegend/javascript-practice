function askForname() {
    console.log("Enter your name");

    process.stdin.once('data', (chunk) => {
        let name = chunk.toString()
        console.log("Hello there " + name)
        process.exit()
    })
}

askForname()