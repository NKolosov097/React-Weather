import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Day } from './Days';
import styles from './Days.module.scss';

type Props = {
    day: Day;
}

export const Card = ({ day }: Props) => {
  const { _day, day__info, icon__id, temp__day, temp__night, info, } = day;

  return (
    <div className={styles.card}>
        <div className={styles.day}>{_day}</div>
        <div className={styles.day__info}>{day__info}</div>
        <div className={styles.img}><GlobalSvgSelector id={icon__id} /></div>
        <div className={styles.temp__day}>{temp__day}</div>
        <div className={styles.temp__night}>{temp__night}</div>
        <div className={styles.info}>{info}</div>
    </div>
  )
}