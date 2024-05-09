import { TextAreaProps } from "./TextArea.props";
import cn from 'clsx';
import styles from './Input.module.css';
import { ForwardedRef, forwardRef } from "react";

export const TextArea = forwardRef(({ className, ...props}: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <textarea className={cn(className, styles.input)} ref={ref} {...props}/>
    );
});