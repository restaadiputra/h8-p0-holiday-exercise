function rocket(param)
{
    var arrayList = [];
    for (var i = 0; i < param; i++) {
        var arrayItem = [];
        for (var j = 0; j < param; j++) {
            arrayItem.push([i,j])
        }
        arrayList.push(arrayItem);
    }
    return arrayList;
}

console.log(rocket(3))

/*
    [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]]
    ]
*/