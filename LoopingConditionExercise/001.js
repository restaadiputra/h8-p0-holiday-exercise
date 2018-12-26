/*
    ============
    Generate Bar 
    ============

    Buatlah Program untuk mengenerate Bar ( persegi Panjang ) berdasarkan 
    - p => panjang 
    - t => tinggi 

*/

function generateBar(p,t) {
    if (p > 0 && t > 0 && p > t) {
        for (var i = 0; i < t; i++) {
            var line = '';
            for (var j = 0; j < p; j++) {
                if (i === 0 || i === t - 1) {
                    line += 'o'
                } else if (j === 0 || j === p - 1) {
                    line += 'o'
                } else {
                    line += ' '
                }
            }
            console.log(line)
        }
    } else {
        return 'invalid value'
    }
}

generateBar(4,3)//
/*
    oooo
    o  o
    oooo
*/

generateBar(10,4) // 
/*
    oooooooooo
    o        o
    o        o
    oooooooooo
*/

generateBar(4,5) // panjang harus lebih besar daripada tinggi 