const fs = require('fs')

fs.rename('testing.txt', 'myTest2.txt', function(err){
    if(err){
        console.error(err)
    }

    console.log('Success !')
})