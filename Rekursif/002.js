/*
   ====================
   Palindrome Recursive
   ====================

   [INSTRUCTION]
   buatlah sebuah program untuk mendeteksi sebuah kata palindrome atau bukan 
   dengan menggunakan methode recursive
   - jika sebuah kata atau kalimat palindrome maka outputnya adalah : true
   - jika sebuah kata atau kalimat bukan palindrome maka outputnya adalah : false 

   [EXAMPLE]
   palindromeRecursive("kasur ini rusak") 
   output: true

   palindromeRecursive("nababan")
   output: true
   
   palindromeRecursive("makan")
   output: false
*/

function palindromeRecursive(str) {
    // if str is 0 or 1 letter length remaining
    if (str.length === 0 || str.length === 1) {
        return true;
    }
    
    // if first and last letter same, call fanction again with removed 
    // first and last str
    if (str[0] === str[str.length - 1]) {
        return palindromeRecursive( str.slice(1, str.length - 1) );
    }
    
    return false; // return false if once the letter is not same
}

console.log(palindromeRecursive("kasur ini rusak")) // true 

console.log(palindromeRecursive("nababan")) // true

console.log(palindromeRecursive("makan")) // false
