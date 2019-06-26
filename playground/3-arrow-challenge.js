
const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){
        console.log('done')
        return this.tasks.filter((task)=> task.completed === false)
    }
}
console.log(tasks.getTasksToDo())