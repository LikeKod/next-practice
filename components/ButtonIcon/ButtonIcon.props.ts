import { ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import arrow from './Arrow.svg';
import close from './Close.svg';
import menu from './Menu.svg';

export const icons = {
    arrow,
    close,
    menu
};

export type IconName = keyof typeof icons;


export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconName;
    appearance: 'primary' | 'white';
}