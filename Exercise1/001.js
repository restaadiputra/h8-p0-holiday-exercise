function soal1(param)
{   
  if (param > 0) {
    var arrayList = [];

    for (var i = 0; i < param; i++){
        if (param % 2 === 0) {
            if (i === param / 2 || i === param / 2 - 1) {
                arrayList.push('*')
            } else {
                arrayList.push('')
            }
        } else if (param % 2 === 1){
            if (i === (param - 1) / 2) {
                arrayList.push('*')
            } else {
                arrayList.push('')
            }
        }
    }
    return arrayList;
  } else {
    return 'invalid input'
  } 
}

/* OR */

function soal1(param)
{   
  if (param > 0) {
    var arrayList = [];

    for (var i = 0; i < param; i++) {      
        if (i === Math.ceil(param / 2 - 1) || i === (param / 2)) {
          arrayList.push('*');
      } else {
          arrayList.push('')
      }
    }
    return arrayList;
  } else {
    return 'invalid input'
  } 
}

// test case
console.log( soal1(5) ) 
/*
    output : 
    ['','','*','','']
*/

console.log( soal1(4)) // ['','*','*','']

console.log( soal1(7)) // ['','','','*','','','']

console.log( soal1(10)) // ['','','','','*','*','','','','']

console.log( soal1(0)) // invalid input 

console.log( soal1(1)) // ['*']