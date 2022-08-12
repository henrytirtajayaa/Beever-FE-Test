let words = "beever";

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut : 
// b
// be
// bee
// beev
// beeve
// beever

// ANSWER HENRY TIRTAJAYA
// LOGIC:
// 1. Ambil variable words
// 2. Kemudian gunakan "for" loop untuk mengambil index dari panjang variable words (words.length)
// 3. Gunakan String Method "substring" untuk mengambil huruf dari index yang sudah di loop.

function getWords(words){
     // let i = 1; variable i dimulai dari 1 karena looping pertama diambil dari index ke [1]
     // i <= words.length; akan melakukan looping sampai sebanyak jumlah huruf pada variable words
     for(let i = 1;i <= words.length; i++){
          console.log(words.substring(0, [i]));
     }
}