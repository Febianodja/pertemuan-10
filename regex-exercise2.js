// LATIHAN 2

function validationNoHp(){
    let numberInput = document.getElementById("validasiNomer").value;
    let showResult = document.querySelector("#result");
    let numberRegex = /^\d{10,12}$/;
    
    if (numberRegex.test(numberInput)) {
      showResult.innerHTML = `${numberInput} sudah sesuai`;
    } else {
      showResult.innerHTML = `Silahkan input diantara 10 - 12 angka`;
    }
    document.getElementById("validasiNomer").value = "";
}