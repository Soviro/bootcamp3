process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('What\'s your age?')

process.stdin.on('data', (age) => {

    if (age>0 && age<100 && age!=2023) {
    console.log('Your year of birth is: ' + (2023-age)); 
}
    process.exit()
})