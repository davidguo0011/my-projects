import React, { useState, useRef } from 'react';
import styles from './ListItem.module.scss';
import { IoIosArrowDropdown, IoIosArrowDropright } from 'react-icons/io';
import SubItem from './SubItem/SubItem';

export default function ListItem() {
  const [show, setShow] = useState(false);
  const dummyList = [
    'python',
    'quiz 2',
    'quiz 3',
    'quiz 4 lorem lasdlakwjdlas djaiw s dhahwdka skaldakjbskjda',
    'quiz 5',
    'quiz 6',
    'quiz 7',
  ];
  //   const height = show ? dummyList.length * 40 : 0;

  return (
    <div className={styles.listItem}>
      <div className={styles.main}>
        <div className={styles.sumNum}>
          <h4>0/5</h4>
        </div>
        <div className={styles.title}>
          <p>Control Structures</p>
        </div>
        <button
          className={styles.expand}
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? <IoIosArrowDropdown /> : <IoIosArrowDropright />}
        </button>
      </div>
      <div className={[styles.subItem, show && styles.show].join(' ')}>
        <ul>
          {dummyList.map((listItem) => (
            <SubItem listItem={listItem} key={listItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}
