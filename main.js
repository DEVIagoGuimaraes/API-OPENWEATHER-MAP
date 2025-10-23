const key = "bcae0ebe8c9f0664dda97d85d173bb22"



function pesquisarCidade() {
    let cidade = document.getElementById("cidade").value
    console.log(cidade);
    dadosAPI(cidade)
    
}

async function dadosAPI(cidade) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric&lang=pt_br`).then(response => response.json())
    console.log(dados)
    trocarDados(dados)
}

function trocarDados(dados) {

    document.getElementById("nome-cidade").innerHTML = "Tempo em: " + dados.name
    document.getElementById("img-icon").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`
    document.getElementById("temperatura").innerHTML = Math.floor(dados.main.temp) + " °C"
    document.getElementById("umidade").innerHTML = "Umidade relativa do ar: " + dados.main.humidity + "%"


    
}