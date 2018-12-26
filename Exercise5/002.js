function soal2(param)
{
    if(param % 2 === 1) {
        var arrayList = [];
        for (var i = 0; i < param / 2; i++) {
            var arrayItem = []
            for (var j = 0; j < param; j++) {
                if ( j <= (param - 1) / 2 + i && 
                j >= (param - 1) / 2 - i ) {
                    arrayItem.push('*')
                } else {
                    arrayItem.push('')
                }
            }
            arrayList.push(arrayItem)
        }
        return arrayList;
    } else {
        return 'invalid input'
    }
}

console.log(soal2(5))
/*

  [
      ['','','*','',''],
      ['','*','*','*',''],
      ['*','*','*','*','*']
  ]
*/

console.log(soal2(3))
/*
  [
      ['','*',''],
      ['*','*','*']
  ]
*/

console.log(soal2(4)) // invalid input
console.log(soal2(2)) // invalid input
console.log(soal2(6)) // invalid input

