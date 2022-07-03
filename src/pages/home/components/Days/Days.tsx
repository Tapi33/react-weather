import React from 'react';
import s from './Days.module.scss'
import {Cart} from "./Cart";
import {Tabs} from "./Tabst";

interface Props {
}

export interface Day {
    day: string,
    day_info: string,
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string
}

export const Days = (props: Props) => {
    const days: Day[] = [
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            day: 'Завтра',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            day: 'Пт',
            day_info: '28 adu',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            day: 'Пн',
            day_info: '28 adu',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            day: 'Вт',
            day_info: '28 adu',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        }, {
            day: 'Ср',
            day_info: '28 adu',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            day: 'Чт',
            day_info: '28 adu',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },

    ]

    return (
        <>
            < Tabs/>
            <div className={s.days}>
                {days.map((day) => (
                    <Cart key={day.day} days={day}/>
                ))}
            </div>
        </>
    );
};

