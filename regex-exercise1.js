// LATIHAN 1
// function isUppercase(words){
    // let regex1 = /[[A-Z][a-z0-9_-]/;
    //     if(regex1.test(words) == true){
        //         return 'Huruf pertama adalah huruf besar';
        //     } else {
            //         return 'Huruf pertama adalah huruf kecil';
            //     }
            // }
            // console.log(isUppercase("Haha"));
            // console.log(isUppercase("hihi"));
// console.log(isUppercase("hii"));

function validation(){
    let userInput = document.getElementById("validasiHuruf").value;
    let showResult = document.querySelector("#result");
    
    //buat validasi regex
    let karakterRegex = /^[A-Z]/;
    
    if (karakterRegex.test(userInput)) {
      showResult.innerHTML = `Huruf pertama adalah huruf <b>besar</b>`;
      
    } else {
      showResult.innerHTML = `Huruf pertama adalah huruf <b>kecil</b>`;
    }
    document.getElementById("validasiHuruf").value = "";
}