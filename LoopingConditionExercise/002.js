/*
    ===========
    Bar X dan O
    ===========

    program ini berfungsi mengenerate Persegi Panjang dengan Character O dan X

    [INSTRUCTION]
    diberikan 2 buah parameter untuk mengenerate Bar 
    - p => panjang
    - t => tinggi 

    character yang pertama kali di cetak adalah x , 
    lalu o dan setelah itu o kemudian kembali lagi ke x 

    [EXAMPLE]

    generateBarXO(4,3)
    output: 
    xoox
    ooxo
    oxoo
    

    generateBarXO(6,4)
    output: 
    xooxoo
    xooxoo
    xooxoo
    xooxoo

*/

function generateBarXO(p,t) {
    var orderStr = 'xoo';
    var start = 0;

    for(var i = 0; i < t; i ++) {
        var line = '';
        for(var j = 0; j < p; j++) {
            line += orderStr[start % orderStr.length]
            start++;
        }
        console.log(line);
    }
}

generateBarXO(4,3)
/* 
xoox
ooxo
oxoo
*/

generateBarXO(6,4)
/*
xooxoo
xooxoo
xooxoo
xooxoo
*/