import React from 'react';
import styles from './Output.module.scss';
import OutputSpinner from '../../../components/Spinner/OutputSpinner/OutputSpinner';
export default function Output({ output, outputLoading }) {
  return (
    <div className={styles.output}>
      <div className={styles.header}>
        <h4>Output</h4>
      </div>
      <div className={styles.contentWrapper}>
        {outputLoading && <OutputSpinner />}
        {!outputLoading && (
          <>
            {output.result && <p>{atob(output.result)}</p>}
            {output.error && (
              <p className={styles.error}>{atob(output.error)}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
