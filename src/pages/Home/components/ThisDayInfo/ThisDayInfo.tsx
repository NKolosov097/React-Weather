import React from 'react';
import styles from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayInfoItem } from './ThisDayInfoItem';

type Props = {}

export interface Item {
  icon__id: string,
      name: string,
      value: string,
}

export const ThisDayInfo = (props: Props) => {
  const items = [
    {
      icon__id: 'temperature',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      icon__id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon__id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon__id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ]

  return (
    <div className={styles.this__day__info}>
      <div className={styles.this__day__info__items}>{
        items.map((item: Item) => <ThisDayInfoItem key={item.icon__id} item={item} />)
      }</div>
      <img className={styles.cloud__img} src={cloud} alt='cloud' />
    </div>
  )
}