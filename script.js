function calcula(){
    let capital1 = parseInt(document.getElementById("capital").value);
    let pocentagem1 = parseInt(document.getElementById("porcentagem").value);
    let porcentagem2 = pocentagem1 / 100;
    let tempo1 = parseInt(document.getElementById("tempo").value);

    let juros1 = capital1 * porcentagem2 * tempo1;
    let montante1 = capital1 + juros1;
    let montante2 = montante1.toFixed(2)
    document.getElementById("montante").textContent= montante2
    document.getElementById("juros").textContent= juros1
}
