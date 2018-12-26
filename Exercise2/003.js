function soal3(param)
{
    var data = {};
    var arrList = []

    // add each param first letter into an array list
    for (var i = 0; i < param.length; i++) {   
        if (arrList.indexOf(param[i][0]) === -1) {
            arrList.push(param[i][0])
        } 
    }

    arrList = arrList.sort(); // sort the array list
    
    // create a key with empty array as value into data
    // from an array list
    for (var i = 0; i < arrList.length; i++) {
        data[arrList[i]] = []
    }
    
    // loop for each word in param array and push it data 
    // according to each first letter that match with each key
    for(var i = 0; i < param.length; i++) {
        data[param[i][0]].push([param[i]]);
    }

    return data;
}

console.log(soal3(['Ayam','Kucing','Bebek','Sapi','Babi','Curut','Cacing','Monyet']));
/*
    {
        A:['Ayam'],
        B:['Bebek','Babi'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

console.log(soal3(['Anjing','Kuda','Anoa','Zebra','Lipan','Kudanil','Landak']))

/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/