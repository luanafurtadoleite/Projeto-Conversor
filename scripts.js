
const convertButton = document.querySelector(".convertbutton")
const currencySelect = document. querySelector("currency-select")

    function convertCurrency(){
                
        const inputCurrency = document.querySelector(".input-currencyvalue").value
        const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
        const currencyValueConverted = document.querySelector(".currency-value")

        const dolarToday = 4.8
        const euroToday = 5.9
        const bitcoin = 250.50
  
        if(currencySelect.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency", 
                currency: "USD"
            }).format(inputCurrency/dolarToday)
        }

        if(currencySelect.value == "euro"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", 
                currency: "EUR" 
            }).format(inputCurrency/euroToday)
        }

        if(currencySelect.value == "bitcoin"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
                style: "currency",
                currency: "USD"
            }).format(inputCurrency/bitcoin)
        }
        
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency)
    }

convertButton.addEventListener("click", convertCurrency)