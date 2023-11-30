import React, { useState } from 'react';

const CurrencyConverter = ({ baseCurrency, onConversion }) => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [targetCurrency, setTargetCurrency] = useState('USD');

  // Example of hardcoded exchange rates - in a real-world scenario, you'd get these from an API
  const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    INR: 75,
    // Add more currencies as needed
  };

  const handleAmountChange = (e) => {
    const newAmount = e.target.value;
    setAmount(newAmount);
    convertCurrency(newAmount, targetCurrency);
  };

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    setTargetCurrency(newCurrency);
    convertCurrency(amount, newCurrency);
  };

  const convertCurrency = (amount, targetCurrency) => {
    const baseRate = exchangeRates[baseCurrency];
    const targetRate = exchangeRates[targetCurrency];
    const converted = (amount / baseRate) * targetRate;
    setConvertedAmount(converted);
    onConversion(converted, targetCurrency);
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder={`Enter amount in ${baseCurrency}`}
      />
      <select value={targetCurrency} onChange={handleCurrencyChange}>
        {Object.keys(exchangeRates).map((currencyCode) => (
          <option key={currencyCode} value={currencyCode}>
            {currencyCode}
          </option>
        ))}
      </select>
      <p>
        Converted Amount: {convertedAmount.toFixed(2)} {targetCurrency}
      </p>
    </div>
  );
};

export default CurrencyConverter;
