
const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    
    const url='http://api.weatherstack.com/current?access_key=c9cc57d90add7009425c1998c0d7c98c&%20query=' + latitude + ','+ longitude + '&units=m'
    
    request({url, json:true},(error,{body}={})=>{
        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if(body.error){
            callback('Unable to find location. Try another search.',undefined)
        }else{

            callback(undefined, body.current.weather_descriptions+ ' It is currently ' +
                     body.current.temperature + ' degrees out. There is a ' +
                     body.current.precip + '% chance of rain.')
        }
    })
}


// const forecast=(latitude,longitude,callback)=>{
    
//     const url='http://api.weatherstack.com/current?access_key=c9cc57d90add7009425c1998c0d7c98c&%20query=' + latitude + ','+ longitude + '&units=m'
    
//     request({url:url, json:true},(error,response)=>{
//         if(error){
//             callback('Unable to connect to location services!', undefined)
//         }else if(response.body.error){
//             callback('Unable to find location. Try another search.',undefined)
//         }else{

//             callback(undefined, response.body.current.weather_descriptions+ ' It is currently ' +
//                      response.body.current.temperature + ' degrees out. There is a ' +
//                      response.body.current.precip + '% chance of rain.')
//         }
//     })
// }

module.exports=forecast