import { useState, useEffect } from "react";
import axios from "axios";

function Main() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const API_KEY = "147b605935f84dafb9015f149b923d12";
  const API_URL = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`;

  // Cargar las monedas
  useEffect(() => {
    axios
      .get("https://openexchangerates.org/api/currencies.json")
      .then((response) => {
        setCurrencies(Object.entries(response.data));
      })
      .catch((error) => {
        console.error("Error al obtener la lista de monedas.");
      });
  }, []);

  // Función para convertir la moneda
  const convertCurrency = () => {
    if (!amount || isNaN(amount)) return;

    axios
      .get(API_URL)
      .then((response) => {
        const rates = response.data.rates;
        const rate = rates[toCurrency] / rates[fromCurrency];
        const conversionResult = (amount * rate).toFixed(2);
        setConvertedAmount(conversionResult);
      })
      .catch((error) => {
        console.error("Error al realizar la conversión.");
      });
  };

  return (
    <main className="main">
      <div className="input-container">
        <input
          type="number"
          id="amount"
          placeholder="Cantidad"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        
        <label id="label-from">De: </label>
        <select
          id="from"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map(([code, name]) => (
            <option key={code} value={code}>
              {name} ({code})
            </option>
          ))}
        </select>

        <label id="label-to">A: </label>
        <select
          id="to"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map(([code, name]) => (
            <option key={code} value={code}>
              {name} ({code})
            </option>
          ))}
        </select>
      </div>

      <div className="button_container">
        <button onClick={convertCurrency}>Convertir</button>
      </div>

      {convertedAmount && (
        <div className="result">
          <p>
            {amount} {fromCurrency} equivale a {convertedAmount} {toCurrency}
          </p>
        </div>
      )}
    </main>
  );
}

export default Main;
