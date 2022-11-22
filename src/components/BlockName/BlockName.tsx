import React from 'react';
import styles from './BlockName.module.css';

interface BlockNameComponent {
  name: string
}

export const BlockName: React.FC<BlockNameComponent> = (props: BlockNameComponent) => {
  return (
      <div className={styles.block__container}>
        <h1 className={styles.block__header}>{props.name}</h1>
      </div>
  )
}

