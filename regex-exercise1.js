// LATIHAN 1
function isUppercase(words){
    let regex1 = /[A-Z]/;
    if(regex1.test(words) == true){
        return 'Huruf pertama adalah huruf besar';
    } else {
        return 'Huruf pertama adalah huruf kecil';
    }
}
console.log(isUppercase("Haha"));
console.log(isUppercase("hihi"));