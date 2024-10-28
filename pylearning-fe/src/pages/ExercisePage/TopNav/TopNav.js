import React from 'react';
import styles from './TopNav.module.scss';
import { BsRobot } from 'react-icons/bs';
export default function TopNav() {
  return (
    <div className={styles.topNav}>
      <button className={styles.btn}>
        <BsRobot />
        Premium
      </button>
      <h4>
        [ENGG1001] Programming for Engineers (st Lucia & external).Semester1,
        2023
      </h4>
      <button className={[styles.btn, styles.hidden].join(' ')}></button>
    </div>
  );
}
