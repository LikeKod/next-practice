import { TextAreaProps } from "./TextArea.props";
import cn from 'clsx';
import styles from './Input.module.css';

export const TextArea = ({ className, ...props}: TextAreaProps): JSX.Element => {
    return (
        <textarea className={cn(className, styles.input)} {...props}/>
    );
};