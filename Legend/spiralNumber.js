function spiralNumber(param)
{
    // create an array and fill it with param * param array
    // initialize each array item with 0
    var arrayList = [];
    for(var y = 0; y < param; y++) {
        var arrayItem = [];
        for(var x = 0; x < param; x++) {
            arrayItem.push(0);
        }
        arrayList.push(arrayItem);
    }

    var move = 'right' // starting movement
    var x = 0; // starting x axis
    var y = 0; // starting y axis

    // loop to fill the array with number with rule :
    // move cycle : right -> down -> left -> up 
    // move right and left : 0 <= x < param
    // move down and up    : 0 <= y < param
    // arrayList[y][x] must be empty, in this case I set with zero as empty
    // if rule broken, go to next cycle

    for(var i = 0; i < param * param; i++) {
        if(move === 'right') {
            if (x >= 0 && x < param && arrayList[y][x] === 0) {
                arrayList[y][x] = i + 1;
                x++;
            } else {
                x--; // back to previous x
                y++; // switch y
                move = 'down';
                arrayList[y][x] = i + 1;
                y++
            }
        } else if(move === 'down') {
            if (y >= 0 && y < param && arrayList[y][x] === 0) {
                arrayList[y][x] = i + 1;
                y++;
            } else {
                y--; // back to previous y
                x--; // switch x
                move = 'left';
                arrayList[y][x] = i + 1;
                x--;
            }
        } else if(move === 'left') {
            if (x >= 0 && x < param && arrayList[y][x] === 0) {
                arrayList[y][x] = i + 1;
                x--;
            } else {
                x++; // back to previous x
                y--; // switch y
                move = 'up';
                arrayList[y][x] = i + 1;
                y--;
            }
        } else if(move === 'up') {
            if (y >= 0 && y < param && arrayList[y][x] === 0) {
                arrayList[y][x] = i + 1;
                y--;
            } else {
                y++; // back to previous y 
                x++; // switch x
                move = 'right';
                arrayList[y][x] = i + 1;
                x++
            }
        }
    }
    return arrayList
}

console.log(spiralNumber(3))
/*
    [
        [1,2,3],
        [8,9,4]
        [7,6,5]
    ]
*/

console.log(spiralNumber(4))
/*
    [
        [1,2,3,4],
        [12,13,14,5],
        [11,16,15,6],
        [10,9,8,7]
    ]
*/