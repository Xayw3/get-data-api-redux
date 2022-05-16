import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { shopItems, getItems } from '../../data/shopData';
import { shopItem } from '../../model/shopItem';
import { addInCart } from '../../store/reducers/CartSlice';
import ShopItem from '../ShopItem/ShopItem';
import './shop-items.scss';

const ShopItemsList = () => {
  const [shopList, setShopList] = useState<shopItem[]>([...shopItems]);
  const [countValue, setCountValue] = useState(0);

  const dispatch = useDispatch();

  return (
    <section className="shop">
      <div className="container">
        <ul className="shop-list">
          {
          shopList.map(({
            id, title, price, image, count,
          }) => (
            <ShopItem
              key={id}
              title={title}
              price={`${price}`}
              image={image}
              count={count}
              handleClick={() => { dispatch(addInCart({ ...getItems(id), count: countValue })); setCountValue(0); }}
              addCount={() => setCountValue(countValue + 1)}
              removeCount={() => setCountValue(countValue - 1)}
            />
          ))
      }
        </ul>
      </div>
    </section>
  );
};

export default ShopItemsList;
