// LATIHAN 3

function searchSentence(){
    let sentence = document.getElementById("sentences").value;
    let showResult = document.querySelector("#result");
    let rgxSentence = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/;
    
    if (rgxSentence.test(sentence)) {
      showResult.innerHTML = `<b>Hasil pencarian:<br></b> ${sentence}`;
    } else {
      showResult.innerHTML = `Hasil pencarian tidak ditemukan`;
    }
    document.getElementById("sentences").value = "";
}