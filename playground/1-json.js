const fs = require('fs')

const JSONdata = fs.readFileSync('1-json.json').toString()
const person = JSON.parse(JSONdata)
person.name = 'Marusa'
person.age = '21'
const newData = JSON.stringify(person)
fs.writeFileSync('1-json.json',newData)

