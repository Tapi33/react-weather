import React from 'react';
import s from './Days.module.scss'

interface Props {
}

interface Tab {
    value: string,
    active:boolean
}


export const Tabs = (props: Props) => {
    const tabs: Tab[] = [
        {
            value: 'На неделю',
            active:true,
        },
        {
            value: 'На месяц',
            active:false,
        },
        {
            value: 'На 10 дней',
            active:false,
        },
    ];
    return (
        <div className={s.tabs}>
            <div className={s.tabs_wrapper}>
                {tabs.map((tab) => (
                    <div className={`${s.tab} ${tab.active ? `${s.active}`:''}`} key={tab.value}>{tab.value}</div>
                ))}
            </div>
            <div className={s.tab_cancel}>Отменить</div>
        </div>
    );
};

