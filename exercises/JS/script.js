function createExchangeRates(rates) {
    const div = document.createElement("div");
    const str = JSON.stringify(rates);
    div.innerText = str;
    return div;
}

function generateExchangeRates() {

    const currency = document.getElementById("currency").value;
    const startDate = document.getElementById("datepickerStart").value;
    const endDate = document.getElementById("datepickerEnd").value;
    const exchangeRatesDiv = document.getElementById("exchangeRates-div");
    const config = {
        header: {'Access-Control-Allow-Origin': 'http://localhost:63342', 'Content-Type': 'application/json'}
    };

    exchangeRatesDiv.innerHTML = "";

    axios.get(`http://api.nbp.pl/api/exchangerates/rates/A/${currency}/${startDate}/${endDate}/`, config).then(response => {

        const exchangeRates = createExchangeRates(response.data.rates);

        exchangeRatesDiv.append(exchangeRates);
    })
}



