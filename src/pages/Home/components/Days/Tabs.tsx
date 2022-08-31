import React from 'react';
import styles from './Days.module.scss';

type Props = {}

export const Tabs = (props: Props) => {
  const tabs = [
    {
        value: 'На неделею',
    },
    {
        value: 'На 10 дней',
    },
    {
        value: 'На месяц',
    },
  ]

  return (
    <div className={styles.tabs}>
        <div className={styles.tabs__wrapper}>{
            tabs.map(({ value }) => <div className={styles.tab} key={value}>{value}</div>)
        }</div>
        <div className={styles.cancel}>Отменить</div>
    </div>
  )
}