/*setTimeout(()=>{
    console.log('Two seconds are up')
},2000)

const names=['Andrew','Jen','Jess']
const shortNames = names.filter((name)=>{
    return name.length <= 4
})

const geocode = (address,callback)=>{
    setTimeout(()=>{
        const data={
            lattitude:0,
            longitude:0
        }
        callback(data)
    },2000)
}

geocode('Philadelphia ',(data)=>{
    console.log(data)
}) */


const add = (num1,num2,callback)=>{
    setTimeout(()=>{
        console.log('two seconds are up')
        const sum = num1 + num2
        callback(sum)
    },2000)

}
add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})



