import { FC } from 'react';
import styles from './counter.module.scss';

type CountProps = {
    count: number,
    btnAdd: () => void,
    btnMinus: () => void,
}

const Counter: FC<CountProps> = ({
  count, btnAdd, btnMinus,
}) => (
  <div className={styles.counter}>
    <button className={styles.btn} onClick={btnMinus}>-</button>
    <span className="count">{count}</span>
    <button className={styles.btn} onClick={btnAdd}>+</button>
  </div>
);

export default Counter;
