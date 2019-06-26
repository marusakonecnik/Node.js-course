const request = require('request')
const forecast = (lattitude,longitude,callback)=>{
    const url = 'https://api.darksky.net/forecast/921a31d3b62fb213ce8be32e10eb5888/'+lattitude+','+longitude+'?units=si'
    request({url,json:true},(error,{body})=>{
        if(error) {
            callback('Unable to connect', undefined)

        }else if(body.error){
            callback('Location not found',undefined)
        }
        else{
            callback(undefined,{
                describe: body.currently.summary,
                temperature: body.currently.temperature,
                windSpeed: body.currently.windSpeed

            })
        }
    })

}
module.exports = forecast