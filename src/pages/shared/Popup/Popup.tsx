import React from 'react';
import { GlobalSvgSelector } from '../../../assets/icons/global/GlobalSvgSelector';
import { Item } from '../../Home/components/ThisDayInfo/ThisDayInfo';
import { ThisDayInfoItem } from '../../Home/components/ThisDayInfo/ThisDayInfoItem';
import styles from './Popup.module.scss'

type Props = {}

export const Popup = (props: Props) => {
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
    <>
        <div className={styles.blur}></div>
        <div className={styles.popup}>
            <div className={styles.day}>
                <div className={styles.day__temp}>12°</div>
                <div className={styles.day__name}>Среда</div>
                <div className={styles.img}>
                    <GlobalSvgSelector id="sun" />
                </div>
                <div className={styles.day__time}>
                    Время: <span>21:54</span>
                </div>
                <div className={styles.day__city}>
                    Город: <span>Москва</span>
                </div>
            </div>
            <div className={styles.day__info}>
                <div className={styles.day__info__items}>{
                    items.map((item: Item) => <ThisDayInfoItem key={item.icon__id} item={item} />)
                }</div>
            </div>
            <div className={styles.close}>
                <GlobalSvgSelector id="close" />
            </div>
        </div>
    </>
  )
}