import React from 'react';
import {Day} from "./Days";
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";
import s from './Days.module.scss'

interface Props{
    days:Day
}

export const Cart = ({days}:Props) => {
    const {day, day_info, icon_id,temp_day, temp_night, info} = days;
    return (
        <div className={s.cart}>
            <div className={s.day}>{day}</div>
            <div className={s.day_info}>{day_info}</div>
            <div className={s.img}>
                <GlobalSvgSelector id={icon_id} />
            </div>
            <div className={s.temp_day}>{temp_day}</div>
            <div className={s.temp_night}>{temp_night}</div>
            <div className={s.info}>{info}</div>
        </div>
    );
};


