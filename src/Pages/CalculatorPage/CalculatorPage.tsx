import { useState } from 'react';
import { useGetAllCurrenciesQuery, useGetCurrencyCalculatorQuery } from '../../store/reducers/currencyApi';
import './calculator-page.scss';

const CalculatorPage = () => {
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('eur');
  const [inputValue, setInputValue] = useState('');
  const [currency, setCurrency] = useState<number>();

  const calc: any = `${from}/${to}`;

  const { data, isFetching, isSuccess } = useGetAllCurrenciesQuery();
  const calculator = useGetCurrencyCalculatorQuery(calc);

  const getRates = Object.entries(calculator.isSuccess && calculator.data);
  const getRate = getRates && getRates[1];

  console.log(inputValue);

  const currenciesData = Object.entries(isSuccess && data);

  const calculate = (a: any, b: any) => (a * b);

  const options = currenciesData.map((el: any) => (
    <option key={Math.random()} value={el[0]}>{el[0]}</option>
  ));

  return (
    <div>
      <select
        value={from}
        onChange={(e) => {
          setFrom(e.target.value);
        }}
      >
        {options}
      </select>
      <select
        value={to}
        onChange={(e) => {
          setTo(e.target.value);
        }}
      >
        {options}
      </select>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={() => setCurrency((calculate(Number(inputValue), calculator.isSuccess && Number(getRate[1]))))}
        >
          click

        </button>
        <p>{currency === undefined ? '' : currency.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CalculatorPage;
