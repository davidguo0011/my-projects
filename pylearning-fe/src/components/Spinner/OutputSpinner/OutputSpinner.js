import React from 'react';
import styles from './OutputSpinner.module.scss';
export default function OutputSpinner() {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>;
    </div>
  );
}
