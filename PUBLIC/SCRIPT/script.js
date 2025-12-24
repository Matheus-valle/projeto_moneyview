    function bitcoin() {
        console.log("Bitcoin rodando")
        fetch("https://economia.awesomeapi.com.br/json/last/BTC").then(
            function (resposta) {
                console.log(resposta)
            }
        )
    }
    function buscarDolar() {
        console.log("Buscando Dolar")
    }



function rodar_moedas() {


    setInterval(function () {
    bitcoin() 
    buscarDolar() 
    buscarLibra()
    buscarEuro()
    buscarYene()
    buscarMonero()
},
    100)




}