function rocket(param)
{   
    var arrayList = []
    for(var i = 0; i < param; i++) {
        var arrayItem = []
        for(var j = 0; j < param; j++) {
            if (param % 2 === 0) {
                if (i === param / 2 || i === param / 2 - 1) {
                    if (j === param / 2 || j === param / 2 - 1) {
                        arrayItem.push('*')
                    } else {
                        arrayItem.push('')
                    }
                } else {
                    arrayItem.push('')
                }
            } else {
                if (i === (param - 1) / 2 ) {
                    if (j === (param - 1) / 2 ) {
                        arrayItem.push('*')
                    } else {
                        arrayItem.push('')
                    }
                } else {
                    arrayItem.push('')
                }
            }
        }
        arrayList.push(arrayItem)
    }
    return arrayList
}

console.log(rocket(5))
/*
    [
        ['','','','',''],
        ['','','','',''],
        ['','','*','',''],
        ['','','','',''],
        ['','','','','']
    ]
*/

console.log(rocket(3))
/*
    [
        ['','',''],
        ['','*',''],
        ['','',''],
      
    ]
*/

console.log(rocket(4))
/*
    [
        ['','','',''],
        ['','*','*',''],
        ['','*','*',''],
        ['','','',''],
        
    ]
*/

console.log(rocket(2))
/*
    [
        ['*','*'],
        ['*','*'],
    ]
*/

console.log(rocket(1))
/*
    [
        ['*']
    ]
*/