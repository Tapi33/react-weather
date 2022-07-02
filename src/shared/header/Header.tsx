import React from 'react';
import s from "./Header.module.scss";
import Select from 'react-select'
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import {useTheme} from "../../hooks/useTheme";
import {Theme} from "../../context/ThemeContext";

interface Props {
}

const options = [
    {value: 'city-1', label: 'Минск'},
    {value: 'city-2', label: 'Молодечно'},
    {value: 'city-3', label: 'Вильнус'}
]


export const Header = (props: Props) => {
    const theme = useTheme();

    const customStyles = {
        control:(styles: any)=> ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' :'#4793FF33',
            width: '194px',
            borderRadius: '10px',
            height: '37px',
            zIndex: 100,
            border:'none'
        }),
        singleValue:(styles:any)=>({
            ...styles,
            color: theme.theme === Theme.DARK ? '#fff' : '#000',
        })
    }

    const changeTheme = () => {
        theme.changeTheme(theme.theme ===  Theme.LIGHT ?  Theme.DARK:Theme.LIGHT)
    }
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

