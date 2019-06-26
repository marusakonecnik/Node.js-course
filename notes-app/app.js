
const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes');
// Customize yargs version
yargs.version('1.1.0')
//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:
    {
         title: {
             describe: 'Note title',
             demandOption: true,
             type: 'string'
         },

         body: {
             describe: 'Content',
             demandOption: true,
             type: 'string'
         }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})
//Create remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe:'Title of removed note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing all te notes',
    handler(){
        console.log(chalk.default.blue.inverse.bold("My notes"))
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading te notes',
    builder: {
        title: {
            describe:'Title of note we want to read',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
       notes.readNotes(argv.title)
    }
})
yargs.parse()
