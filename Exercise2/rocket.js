/*
    membuat bendera scotlandia

    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *

     petunjuk : 
    - input harus lebih dari 3 , jika tidak maka "invalid input"
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/

function scotlandFlag(param)
{
    if (param > 3 && param % 2 === 1) {  
        for (var i = 0; i < param; i++) {
            line = ''
            for (var j = 0; j < param; j++) {
                if (j === i || j === param - 1 - i) {
                    line += '*'
                } else {
                    line += ' '
                }
            }
            console.log(line)
        }
    } else {
        return 'invalid input'
    }
}

console.log(scotlandFlag(5))
/*
    '*   *'
    ' * * '
    '  *  '
    ' * * '
    '*   *'
*/

console.log(scotlandFlag(9))
/*
    '*       *'
    ' *     * '
    '  *   *  '
    '   * *   '
    '    *    '
    '   * *   '
    '  *   *  '
    ' *     * '
    '*       *'
*/