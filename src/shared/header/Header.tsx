import React, {useEffect, useState} from 'react';
import s from "./Header.module.scss";
import Select from 'react-select'
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";

interface Props {
}

const options = [
    {value: 'city-1', label: 'Минск'},
    {value: 'city-2', label: 'Молодечно'},
    {value: 'city-3', label: 'Вильнус'}
]

const customStyles = {
    control:(styles: any)=> ({
        ...styles,
        backgroundColor: 0 ? '#4f4f4f' :'#4793FF33',
        width: '194px',
        borderRadius: '10px',
        height: '37px',
        zIndex: 100,
        border:'none'
    }),
    singleValue:(styles:any)=>({
        ...styles,
        color: 0 ? '#fff' : '#000'
    })
}


export const Header = (props: Props) => {

    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        console.log(theme)
    }
    useEffect(()=>{
        const themeValue = ['body-background','components-background','card-background','card-box-shadow','text-color']
        const root = document.querySelector(':root') as HTMLElement;
        themeValue.forEach((item)=>{
            root.style.setProperty(`--${item}-default`, `var(--${item}-${theme})`)
        })
    }, [theme])
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id={'header-logo'}/></div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id={'change-theme'}/>
                </div>
                <Select
                    defaultValue={options[0]}
                    styles={customStyles}
                    options={options}/>
            </div>
        </header>
    );
};

