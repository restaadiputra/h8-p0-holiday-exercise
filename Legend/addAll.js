/*

    diberikan sebuah array angka dimana , angka - angka tersebut adalah 
    increment dari angka sebelumnya sebesar 1 . 
    tugas kalian adalah menjumlahkan seluruh angka tersebut dengan syarat: 
    - Tidak boleh memakai perulangan 
    - Tidak boleh memakai function magic apapun kecuali .length pada array
    - Tidak boleh memakai rekursif 
*/


function addAll(param)
{
    // formula of sum of arithmetic sequence
    // jumlah ke n dari deret aritmatika
    // Sn = n/2(2a + (n-1)b)

    return param.length / 2 * (2 * param[0] + (param.length - 1) * (param[1] - param[0]))
}

console.log(addAll([1,2,3,4,5]));
// 15

console.log(addAll([5,6,7,8,9,10]));
// 45

console.log(addAll([2,3,4,5,6]));
// 20

console.log(addAll([8,7,6,5,4,3,2])); 
// 35