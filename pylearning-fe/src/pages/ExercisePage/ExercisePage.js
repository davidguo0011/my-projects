import React from 'react';
import styles from './ExercisePage.module.scss';
import MainContent from './MainContent/MainContent';
import TopNav from './TopNav/TopNav';
import SideNav from './SideNav/SideNav';

export default function ExercisePage() {
  return (
    <>
      <div className={styles.pageContainer}>
        <SideNav />
        <div className={styles.main}>
          <TopNav />
          <div className={styles.mainContentContainer}>
            <MainContent />
          </div>
        </div>
      </div>
    </>
  );
}
