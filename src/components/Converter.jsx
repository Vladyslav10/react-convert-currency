import React, { useEffect, useState } from "react";
import ConverterService from '../API/ConverterService';
import { useFetching } from '../hooks/useFetching';
import CurrencyInput from './CurrencyInput';
import './Converter.css';

const Converter = () => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("UAH");

  const[rates, setRates] = useState([]);
  
  const [fetchGetCurrency, Error] = useFetching( async() => {
    const response = await ConverterService.getCurrency();
    setRates(response.data.conversion_rates);
  });

  useEffect(()=> {
    fetchGetCurrency();
  }, []);

  useEffect(()=> {
    if(!!rates) {
      amountFirstChange(1); 
    };
  }, [rates]);

  function fixNumbeer(number) {
    return number.toFixed(2);
  }

  function amountFirstChange (amount1) {
    setAmount2(fixNumbeer(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }

  function currencyFirstChange (currency1) {
    setAmount2(fixNumbeer(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  }

  function amountSecondChange (amount2) {
    setAmount1(fixNumbeer(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);
  }

  function currencySecondChange (currency2) {
    setAmount1(fixNumbeer(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  }

  return (
    <div id="converter" className="converter">
      <h1 className="converter__title">Конвертер валют</h1>
      <div className="converter__group">
        <CurrencyInput 
            defaultValue={currency1} 
            options={Object.keys(rates)} 
            amount={amount1} 
            setAmount={amountFirstChange}
            setCurrency={currencyFirstChange}
        />
        <CurrencyInput 
            defaultValue={currency2} 
            options={Object.keys(rates)} 
            amount={amount2} 
            setAmount={amountSecondChange}
            setCurrency={currencySecondChange}
        />
      </div>
    </div>
  );
}

export default Converter;