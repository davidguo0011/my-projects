import React, { useState } from 'react';
import styles from './SubItem.module.scss';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
export default function SubItem({ listItem }) {
  const [check, setCheck] = useState(false);
  return (
    <li className={styles.subItemContainer}>
      <button className={styles.btn}>
        <div
          className={styles.checkbox}
          onClick={() => {
            setCheck(!check);
          }}
        >
          {!check ? <ImCheckboxUnchecked /> : <ImCheckboxChecked />}
        </div>
        <div className={styles.content}>{listItem}</div>
      </button>
    </li>
  );
}
