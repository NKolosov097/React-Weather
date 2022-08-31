import React, { useEffect } from 'react';
import styles from './Home.module.scss';
import { ThisDay } from './components/ThisDay/ThisDay'
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import { Days } from './components/Days/Days';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { selectCurrentWeatherData } from '../../store/selectors';

type Props = {}

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();

  const { weather, isLoading, response } = useCustomSelector(selectCurrentWeatherData)

  useEffect(()=> {
    dispatch(fetchCurrentWeather(''))
  })
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  )
}