const https = require('https')
const url = 'https://api.darksky.net/forecast/921a31d3b62fb213ce8be32e10eb5888/40,-75'

const request = https.request(url, (response)=>{
    let data = ''
    response.on('data', (chunk)=>{ //is gonna fire when data comes in, setting a listener
        data = data + chunk.toString();

    })
    response.on('end',()=>{ //is gonna fire at the end
        const body = JSON.parse(data)
        console.log(body)
    })
})
request.on('error',(error)=>{
    console.log('An error',error)
})
request.end()