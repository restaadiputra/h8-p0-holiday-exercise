/*
    wajib pseudocode. 

    Jawaban pseudocode disini 
    FUNCTION "soal2" with parameter "param"
        IF "param" EQUAL to 0 then
            return 'invalid input'
        ELSE then
            CREATE "arrayList" as an empty array
            STORE "listChar" with 'abcdefghijklmnopqrstuvwxyz'
            STORE "start" with 0 

            STORE "i" with 0
            FOR "i" LESS THAN "param"
                CREATE "arrayItem" as empty array

                STORE "j" with 0
                FOR "j" LESS THAN "param"
                    PUSH "listChar" with index of "start" MOD by the length of "listChar" into "arrayItem" 
                    "start" add by 1    
                    
                    "j" add by 1
                END FOR

                PUSH "arrayItem" into "arrayList"
                
                "i" add by 1
            END FOR

            RETURN "arrayList"
        END IF
    FUNCTION END
    
*/

function soal2(param)
{
    if (param === 0) {
        return 'invalid input'
    } else {
        var arrayList = [];
        var listChar = 'abcdefghijklmnopqrstuvwxyz';
        var start = 0;
        
        for (var i = 0; i < param; i++) {
            var arrayItem = [];
            for (var j = 0; j < param; j++) {
                arrayItem.push(listChar[(start % listChar.length)]);
                start++;
            }
            arrayList.push(arrayItem);
        }
        return arrayList;
    }
}

console.log(soal2(8))
/*
    [
        ['a','b','c','d','e','f','g','h']
        ['i','j','k','l','m','n','o','p']
        ['q','r','s','t','u','v','w','x']
        ['y','z','a','b','c','d','e','f']
        ['g','h','i','j','k','l','m','n']
        ['o','p','q','r','s','t','u','v']
        ['w','x','y','z','a','b','c','d']
        ['e','f','g','h','i','j','k','l']
    ]
*/

console.log(soal2(2))
/*
    [
        ['a','b'],
        ['c','d']
    ]
*/

console.log(soal2(0)) // invalid input