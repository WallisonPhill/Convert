//Cotação do valor das moedas do dia. (12/11/24)
const USD = 5.75
const EUR = 6.12
const GBP = 7.38

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

//Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR": 
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP": 
      convertCurrency(amount.value, GBP, "£")
      break   
  }
}

//Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try {
    //Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result")
  }
  catch (error){
    console.log(error)

    //Remove a classe e esconde o resultado, caso dê erro.
    footer.classList.remove("show-result")
    alert("Não foi possível realizar a conversão, tente novamente mais tarde.")
  }
}

