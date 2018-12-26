function soal3(param1)
{
    var start = 1;
    var arrayList = [];
    for (var i = 0; i < param1; i++) {
        var arrayItem = [];
        for (var j = 0; j < param1; j++) {
            if(i % 2 === 0) {
                arrayItem.push(start)
            } else {
                arrayItem.unshift(start);
            }
            start++;
        }
        arrayList.push(arrayItem);
    }
    return arrayList;
}

console.log(soal3(3))
/*
    [
        [1,2,3],
        [6,5,4],
        [7,8,9]
    ]

*/

console.log(soal3(2))
/*
    [
        [1,2],
        [4,3]
    ]

*/

console.log(soal3(4))
/*
    [
        [1,2,3,4],
        [8,7,6,5],
        [9,10,11,12],
        [16,15,15,13]
    ]

*/
