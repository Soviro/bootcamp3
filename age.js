process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('What\'s your age?')

process.stdin.on('data', (age) => {

    if (age>0 && age<100) {
    console.log('Your year of birth is: ' + (2023-age)); 
} else {
    console.log('Age needs to be between 0 adn 100');
}
    process.exit()
})