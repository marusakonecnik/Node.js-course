/*const square = function(x){
    return x*x
} */
/*const square = (x) => {
    return x*x
} */
//const square =(x) => x*x
//console.log(square(15))

const event = {
    name: 'Birthday Party',
    guestlist: ['Andrew','Jen','Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestlist.forEach((guest)=> {
            console.log(guest + ' is attentding '+ this.name)
        })
    }
}
    event.printGuestList()