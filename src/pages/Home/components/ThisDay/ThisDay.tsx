import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';
import styles from './ThisDay.module.scss';

type Props = {
  weather: Weather;
}

export const ThisDay = ({weather}: Props) => {
  return (
    <div className={styles.this__day}>
      <div className={styles.top__block}>
        <div className={styles.top__block__wrapper}>
          <div className={styles.this__temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={styles.this__day__name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sunny" />
      </div>
      <div className={styles.bottom__block}>
        <div className={styles.this__time}>
          Время: <span>21:54</span>
        </div>
        <div className={styles.this__city}>
          Город: <span>Москва</span>
        </div>
      </div>
    </div>
  )
}