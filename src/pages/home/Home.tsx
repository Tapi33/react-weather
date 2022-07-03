import React, {useEffect} from 'react';
import s from './Home.module.scss'
import {ThisDay} from "./components/ThisDay/ThisDay";
import {ThisDayInfo} from "./components/ThisDayInfo/ThisDayInfo";
import {Days} from "./components/Days/Days";
import {useCustomDispatch, useCustomSelector} from "../../hooks/store";
import {fetchCurrentWeather} from "../../store/thunks/fetchCurrentWeather";

interface Props {
}

export const Home = (props: Props) => {
    const dispatch = useCustomDispatch();

    const {weather} = useCustomSelector((state) => {
       return state.currentWeatherSliceReducer
    })

    useEffect(() => {
        dispatch(fetchCurrentWeather('minsk'))
    }, [])
    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay weather={weather}/>
                <ThisDayInfo/>
            </div>
            <Days/>
        </div>
    );
};

