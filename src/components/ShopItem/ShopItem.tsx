import { FC, useState } from 'react';
import Counter from '../Counter/Counter';
import './shop-item.scss';

type ShopItemProps = {
    title?: string,
    price?: string,
    image?: string,
    count: number,
    handleClick?: () => void,
    addCount: () => void,
    removeCount: () => void,
}

const ShopItem:FC<ShopItemProps> = ({
  title, price, image, count, handleClick, addCount, removeCount,
}) => {
  const [countValue, setCountValue] = useState(count);
  console.log(countValue);

  return (
    <li className="product-item">
      <img src={image} alt={title} />
      <h3 className="product-title">{title}</h3>
      <span className="product-price">{price}</span>
      <div className="btns-wrapper">
        <Counter
        // @ts-ignore
          btnAdd={() => { setCountValue(countValue + 1); addCount(); }}
          btnMinus={() => { setCountValue(countValue - 1); removeCount(); }}
          count={countValue}
        />
        <button onClick={() => { setCountValue(0); handleClick(); }}>Add to cart</button>
      </div>
    </li>
  );
};

export default ShopItem;
