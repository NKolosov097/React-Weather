import React from 'react';
import { IndicatorSvgSelector } from '../../../../assets/icons/Indicators/IndicatorSvgSelector';
import { Item } from './ThisDayInfo';
import styles from './ThisDayInfo.module.scss';

type Props = {
    item: Item,
}

export const ThisDayInfoItem = ({ item }: Props) => {
  const { icon__id, name, value } = item;

  return (
    <div className={styles.item}>
        <div className={styles.indicator}>
            <IndicatorSvgSelector id={icon__id} />
        </div>
        <div className={styles.indicator__name}>{name}</div>
        <div className={styles.indicator__value}>{value}</div>
    </div>
  )
}