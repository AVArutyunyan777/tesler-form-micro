import React from 'react';
import styles from './AppContent.module.css';
import {BlockName} from '../BlockName/BlockName';

export const AppContent: React.FC = () => {
  return (
      <div className={styles.content}>
          <div className={styles.content__block}>
              <BlockName name={'Список задач'} />
          </div>
      </div>
  )
}