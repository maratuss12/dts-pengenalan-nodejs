const fs = require('fs')

fs.unlink('myTest3.txt', function(err){
    if(err){
        console.error(err)
    }

    console.log('Success !')
})