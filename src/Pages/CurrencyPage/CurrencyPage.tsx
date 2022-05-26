import { useParams } from 'react-router-dom';
import { useGetCurrencyRateQuery } from '../../store/reducers/currencyApi';
import './currency-page.scss';

const CurrencyPage = () => {
  const { name } = useParams();
  // @ts-ignore
  const { data, isFetching, isSuccess } = useGetCurrencyRateQuery(name);

  const currenciesData = Object.entries(isSuccess && data);
  const getRates = currenciesData[1];
  const getRate = getRates && getRates[1];

  // @ts-ignore
  const rateData = Object.entries(isSuccess && getRate);

  return (
    <div>
      {
            rateData && rateData.map((el: any) => (
              <div key={Math.random()}>
                <span>{`${el[0]}: `}</span>
                <span>{el[1]}</span>
              </div>
            ))
        }
    </div>
  );
};

export default CurrencyPage;
