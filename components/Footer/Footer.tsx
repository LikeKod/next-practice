import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'clsx';
import { format } from 'date-fns';


export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div>
                Lorem ipsum dolor sit {format(new Date(), 'yyyy')} amet consectetur adipisicing elit.
            </div>
            <a href='#' target='_blank'>
                Lorem, ipsum.
            </a>
            <a href='#' target='_blank'>
                Lorem, ipsum.
            </a>
        </footer>
    );
};