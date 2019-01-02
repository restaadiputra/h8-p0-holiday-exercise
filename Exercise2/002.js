// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param)
{
    var arrayList = [];
    for (var i = 0; i < param.length/2; i++) {
        var arrayItem = []
        if (i === (param.length - 1)/2) {
            arrayItem.push(param[i]);
            arrayItem.push('Instruktur')
        } else {
            arrayItem.push(param[i]);
            arrayItem.push(param[(param.length - 1) - i]);
        }
        arrayList.push(arrayItem);
    }
    return arrayList;
}

console.log(soal2(['Aries','Dimas','Gatot',"Nurmantyo","Zainul","Majdi"]))
/*
    output: 
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/

console.log(soal2(['A','B','C','D','E']))//
// [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log(soal2(['Susan','Albert','Erithiana','Zaki','Sisijoan','Henry',"Nio"]))
// [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]