import React from 'react';
import { Card } from './Card';
import styles from './Days.module.scss';
import { Tabs } from './Tabs';

type Props = {};

export interface Day {
    _day: string;
    day__info: string;
    icon__id: string;
    temp__day: string;
    temp__night: string;
    info: string;
  }

export const Days = (props: Props) => {
    const days: Day[] = [
        {
            _day: 'Сегодня',
            day__info: '28 авг',
            icon__id: 'sun',
            temp__day: '+18',
            temp__night: '+15',
            info: 'Облачно',
          },
          {
            _day: 'Завтра',
            day__info: '29 авг',
            icon__id: 'small_rain_sun',
            temp__day: '+18',
            temp__night: '+15',
            info: 'небольшой дождь и солнце',
          },
          {
            _day: 'Ср',
            day__info: '30 авг',
            icon__id: 'small_rain',
            temp__day: '+18',
            temp__night: '+15',
            info: 'небольшой дождь',
          },
          {
            _day: 'Чт',
            day__info: '28 авг',
            icon__id: 'mainly_cloudy',
            temp__day: '+18',
            temp__night: '+15',
            info: 'Облачно',
          },
          {
            _day: 'Пт',
            day__info: '28 авг',
            icon__id: 'rain',
            temp__day: '+18',
            temp__night: '+15',
            info: 'Облачно',
          },
          {
            _day: 'Сб',
            day__info: '28 авг',
            icon__id: 'sun',
            temp__day: '+18',
            temp__night: '+15',
            info: 'Облачно',
          },
          {
            _day: 'Вс',
            day__info: '28 авг',
            icon__id: 'sun',
            temp__day: '+18',
            temp__night: '+15',
            info: 'Облачно',
          },
    ]

  return (
    <>
        <Tabs />
        <div className={styles.days}>{
            days.map((day: Day) => <Card day={day} key={day._day} />)
        }</div>
    </>
  )
}