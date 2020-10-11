const fs = require('fs')

fs.open('testing.txt', 'w', (err, file)=>{
    if(err){
      return console.error(err)      
    }
    console.log('Saved!')
})