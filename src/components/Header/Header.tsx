import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { shopItem } from '../../model/shopItem';
import { RootState } from '../../store';
import './header.scss';

const Header = () => {
  const items = useSelector((state: RootState) => state.cart.itemsInCart);

  // eslint-disable-next-line no-return-assign
  const totalCount = items.reduce((acc, item:shopItem) => acc += item.count, 0);

  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <NavLink
            className="logo"
            to="/"
          >
            Logo
          </NavLink>
          <div className="header__wrapper">
            <div className="cart">
              <span className="cart-counter">{totalCount}</span>
              <NavLink
                className="cart"
                to="/cart"
              >
                <img className="cart-img" src="/images/cart.svg" alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
