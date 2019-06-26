const fs = require('fs')
const chalk = require('chalk');

const addNote = (title,body)=>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)

    debugger
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.default.green.inverse.bold('New note added'))
    }
    else {
        console.log(chalk.default.red.inverse.bold('Note already exists'))
    }

}
const saveNotes = (notes)=> {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
}
const removeNote = (title)=>{
    const allNotes = loadNotes()
    const notesToKeep = allNotes.filter((note)=> note.title !== title)

    saveNotes(notesToKeep)
    if(notesToKeep.length === allNotes.length-1)
        console.log(chalk.default.green.inverse.bold('Note was removed'))

    else
        console.log(chalk.default.red.inverse.bold('Note was not found!'))

}
const listNotes = ()=>{
    const allNotes = loadNotes()
    allNotes.forEach((note)=>{
        console.log(note.title)
    })
}

const readNotes = (title)=>{
    const allNotes = loadNotes()
    const noteToFind = allNotes.find((note)=>note.title===title)

    if(noteToFind==null){
        console.log(chalk.default.inverse.red('No note found!'))
    }
    else{
        console.log(chalk.default.inverse.cyan.italic(noteToFind.title))
        console.log(chalk.default.italic.grey.inverse(noteToFind.body))
    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
};
