import React from 'react';
import styles from './SideNav.module.scss';
import LogoBtn from '../../../components/SideNav/LogoBtn/LogoBtn';
import ListItem from '../../../components/SideNav/ListItem/ListItem';
export default function SideNav() {
  return (
    <div className={styles.sideNav}>
      <LogoBtn />
      <div className={styles.listContainer}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
}
