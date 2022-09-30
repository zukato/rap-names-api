const express = require('express')
const app=express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bannett',
        'birthLocation': 'Chicago, Illinois, USA'
     },
     'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
     }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperNameParam', (request, response)=>{
    const rapperName = request.params.rapperNameParam.toLowerCase()

    if(rappers[rapperName]){ /* = if there is a rapperName in rappers, then... | cannot use dot notation because there are spaces in names */
        console.log(rappers[rapperName])
        console.log(rappers[rapperName].birthName)    
        response.json(rappers[rapperName]) /* respond with the object inside rapperName */
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Better Go Catch It!`)
})