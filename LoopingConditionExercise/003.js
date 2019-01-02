/*
    =========
    Triangel
    =========

    [INSTRUCTION]
    Buatlah sebuah program yang dapat mengenerate segitiga , dimana inputnya 
    adalah tinggi (t) nya.
    bila t = 1 maka outputnya : t is invalid
    
    [EXAMPLE]
    triangel(5)
    output:
        *    
       ***
      *****
     *******
    *********

    triangel(3)
    output:
        *    
       ***
      *****

*/

function triangel(t) {
    if(t > 1){
        for(var i = 0; i < t; i++) {
            var line = '';
            for(var j = 0; j < t + i; j++){
                if(j >= t - 1 - i) {
                    line += '*';
                } else {
                    line += ' ';
                }
            }
            console.log(line)
        }
    } else {
        console.log('t is invalid')
    }
}

triangel(3)
/*
      *    
     ***
    *****
*/

triangel(5)
/*
        *    
       ***
      *****
     *******
    *********
*/

triangel(1) // t is invalid