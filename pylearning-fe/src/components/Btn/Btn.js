import React from 'react';
import styles from './Btn.module.scss';
export default function Btn({ onClick, content }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {content}
    </button>
  );
}
