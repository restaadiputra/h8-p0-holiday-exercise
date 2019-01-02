/* 
    ================
    Row Sum Triangle
    ================

    [INSTRUCTION]
    diberikan sebuah segitiga yang berisi angka - angka ganjil 

    1 
    3 5 
    7 9 11
    13 15 17 19
    21 23 25 27 29
    31 33 35 37 39 41
    ...

    tugas kalian adalah dapat mengetahui jumlah angka per baris bila 
    baris nya disebutkan.

    [EXAMPLE]
    rowSumTriangle(4)
    dibaris 4 terdapat angka :
    13 + 15 + 17 + 19 = 64
    output: 64 

    rowSumTriangle(27)
    output : 19683


*/

/*     
    ALgorithm :
    Each first number on each row has different difference
    that its defferent has common different, thus we can say
    that Each first number is multilevel arithmetic sequence 

    To find the first number in each row based on which
    row is it using multilevel arithmetic sequence
 
    Formula for multilevel arithmetic sequence :
    Un = a/0! + (n-1)b/1! + (n-1)(n-2)c/2!
    where :
        Un = n-th term of the sequence
        a  = the 1st term of 1st sequence
        b  = the 1st term of 1st difference in seqence
        c  = the 1st term of 2nd difference in sequence
    
    Un = 1/0! + (n-1)2/1! + (n-1)(n-2)2/2!
       = 1/1 + (2n - 2)/1 + (n2 - 3n + 2)2/2
       = 1 + 2n - 2 + n2 - 3n + 2
       = n2 - n + 1
    
    
    Each row's length will increase by 1 so n-th row
    has n length of numbers and each number in each rows 
    has same common difference, thus we can say that 
    each row is basic arithmetic.  

    Because numbers on each row is basic arithmetic
    sequence with common difference 2, we can use basic
    sum of arithmetic sequence after we find the first
    number of each row.
    
    Formula for basic sum of arithmetic sequence
    Sn =  n/2 (2a + (n - 1)b)
    where :
        Sn = sum of n-th term of the sequence
        a  = the 1st term of the sequence
        b  = common difference
*/

function rowSumTriangle(row) {
    // find firstnumber of each row using formula
    var firstNumber = row * row - row + 1;
    
    // find sum n-th row 
    var sumNumber = (row / 2) * ((2 * firstNumber) + ((row - 1) * 2))
    return sumNumber;
}

console.log(rowSumTriangle(4)) // 64

console.log(rowSumTriangle(27)) // 19683