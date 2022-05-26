import { useNavigate } from 'react-router-dom';
import { useGetAllCurrenciesQuery } from '../../store/reducers/currencyApi';
import './home-page.scss';

const HomePage = () => {
  const { data, isFetching, isSuccess } = useGetAllCurrenciesQuery();
  const navigate = useNavigate();

  const currenciesData = Object.entries(isSuccess && data);

  return (
    <div className="currencies">
      {
        currenciesData?.map((el) => (
          <button className="btn" key={Math.random()} onClick={() => navigate(`/currency/${el[0]}`)}>{el[0]}</button>
        ))
      }
    </div>
  );
};

export default HomePage;
