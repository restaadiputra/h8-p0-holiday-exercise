/*
    analisa sendiri dengan apa yang diminta soal melalui test case. 
    wajib menggunakan pseudocode

    PSEUDOCODE HERE : 

    FUNCTION "soal1" with parameter "param"
        IF param EQUAL to 0 then
            return 'invalid input'
        ELSE then
            CREATE "arrayList" as an empty array
            STORE "listChar" with '!@#'

            STORE "i" with 0
            FOR "i" LESS THAN "param"
                PUSH "listChar" with index of "i" MOD by the length of "listChar" into "arrayList"     

                "i" add by 1
            END FOR

            RETURN "arrayList"
        END IF
    FUNCTION END


*/
function soal1(param)
{
    if (param === 0) {
        return 'invalid input'
    } else {
        var arrayList = [];
        var listChar = '!@#';

        for (var i = 0; i < param; i++) {
            arrayList.push(listChar[(i % listChar.length)])
        }
        return arrayList;
    }
}

console.log(soal1(3))
// output : ['!','@','#']

console.log(soal1(6));
// output : ['!','@','#','!','@','#']

console.log(soal1(4))
// output : ['!','@','#','!']

console.log(soal1(0)) // invalid input