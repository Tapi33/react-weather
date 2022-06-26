import React from 'react';
import s from './Popup.module.scss'
import {ThisDayItem} from "../../pages/home/components/ThisDayInfo/ThisDayItem";
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";

interface Props {
}

export const Popup = (props: Props) => {
    const items = [{
        icon_id: 'temp',
        name: 'Температура',
        value: '20° - ощущается как 17°'
    },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: '765 мм ртутного столба - нормальное'
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: 'Без осадков'
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер'
        }
    ]

    return (
        <>
            <div className={s.blur}/>
            <div className={s.popup}>
                <div className={s.this_day}>
                    <div className={s.top_block}>
                        <div className={s.this_temp}>20°</div>
                        <div className={s.this_day_name}>Сегодня</div>
                        <GlobalSvgSelector id={"sun"}/>
                    </div>
                    <div className={s.bottom_block}>
                        <div className={s.this_time}>Время: <span>21:55</span></div>
                        <div className={s.this_city}>Город: <span>Минск</span></div>
                    </div>
                </div>
                <div className={s.this_day_info_items}>
                    {items.map((item) => (
                        <ThisDayItem key={item.icon_id} item={item}/>
                    ))}
                </div>
                <div className={s.popup_exit}>
                    <GlobalSvgSelector id={'close'} />
                </div>
            </div>
        </>
    );
};

