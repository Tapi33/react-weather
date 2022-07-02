import {Theme} from "../context/ThemeContext";

export function changeCssRootVariables(theme:Theme){
    const themeValue = ['body-background','components-background','card-background','card-box-shadow','text-color']
    const root = document.querySelector(':root') as HTMLElement;
    themeValue.forEach((item)=>{
        root.style.setProperty(`--${item}-default`, `var(--${item}-${theme})`)
    })
}