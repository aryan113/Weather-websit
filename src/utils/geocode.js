
const request=require('request')


const geocode=(address,callback)=>{
     
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYXJ5YW4xMTMiLCJhIjoiY2tvbDU0NnZ2MHB0dTJ2cWZ3aGowNmxrciJ9.lpTHQatw08DcBlYaufkMQw'


    request({url,json:true},(error,{body}={})=>{
        if(error)
        {
            callback('Unable to connect to location services!', undefined)
        }
        else if(body.features.length===0)
        {
            callback('Unable to find location. Try another search.',undefined)
        }
        else{
            callback(undefined,{
                 latitude: body.features[0].center[1],
                 longitude: body.features[0].center[0],
                 location: body.features[0].place_name
            })
        } 
})

}


// const geocode=(address,callback)=>{
     
//     const geocodeurl='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYXJ5YW4xMTMiLCJhIjoiY2tvbDU0NnZ2MHB0dTJ2cWZ3aGowNmxrciJ9.lpTHQatw08DcBlYaufkMQw'


//     request({url:geocodeurl,json:true},(error,response)=>{
//         if(error)
//         {
//             callback('Unable to connect to location services!', undefined)
//         }
//         else if(response.body.features.length===0)
//         {
//             callback('Unable to find location. Try another search.',undefined)
//         }
//         else{
//             callback(undefined,{
//                  latitude: response.body.features[0].center[1],
//                  longitude: response.body.features[0].center[0],
//                  location: response.body.features[0].place_name
//             })
//         } 
// })

// }
module.exports=geocode