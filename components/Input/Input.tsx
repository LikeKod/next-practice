import { InputProps } from "./Input.props";
import cn from 'clsx';
import styles from './Input.module.css';

export const Input = ({ className, ...props}: InputProps): JSX.Element => {
    return (
        <input className={cn(className, styles.input)} {...props}/>
    );
};