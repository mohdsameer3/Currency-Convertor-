// Currency data (ISO 4217 codes and exchange rates)
const currencyData = [
  { code: "USD", rate: 1 },
  { code: "EUR", rate: 0.85 },
  { code: "GBP", rate: 0.72 },
  { code: "JPY", rate: 110.5 },
  { code: "CAD", rate: 1.25 },
  { code: "AUD", rate: 1.38 },
  { code: "CHF", rate: 0.91 },
  { code: "CNY", rate: 6.37 },
  { code: "HKD", rate: 7.76 },
  { code: "NZD", rate: 1.41 },
  { code: "SEK", rate: 8.52 },
  { code: "KRW", rate: 1108.5 },
  { code: "MXN", rate: 19.56 },
  { code: "INR", rate: 73.5 },
  { code: "BRL", rate: 4.85 },
  { code: "RUB", rate: 57.3 },
  { code: "ZAR", rate: 14.3 },
  { code: "TRY", rate: 7.88 },
  { code: "DKK", rate: 6.32 },
  { code: "NOK", rate: 8.65 },
  { code: "THB", rate: 30.1 },
  { code: "MYR", rate: 4.05 },
  { code: "PHP", rate: 46.9 },
  { code: "IDR", rate: 13970 },
  { code: "AED", rate: 3.67 },
];

const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const convertBtn = document.getElementById("convert-btn");
const resultDiv = document.getElementById("result");

// Populate currency options
currencyData.forEach((currency) => {
  const fromOption = document.createElement("option");
  fromOption.value = currency.code;
  fromOption.textContent = `${currency.code} - ${currency.code}`;
  fromCurrency.appendChild(fromOption);

  const toOption = document.createElement("option");
  toOption.value = currency.code;
  toOption.textContent = `${currency.code} - ${currency.code}`;
  toCurrency.appendChild(toOption);
});

// Set Indian Rupee (INR) as the default "From" currency
fromCurrency.value = "INR";

convertBtn.addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCode = fromCurrency.value;
  const toCode = toCurrency.value;

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }

  const fromRate = currencyData.find((c) => c.code === fromCode).rate;
  const toRate = currencyData.find((c) => c.code === toCode).rate;
  const convertedAmount = (amount / fromRate) * toRate;

  resultDiv.textContent = `${amount.toFixed(
    2
  )} ${fromCode} = ${convertedAmount.toFixed(2)} ${toCode}`;
});
