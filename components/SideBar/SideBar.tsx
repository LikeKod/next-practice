import Menu from '../menu/menu';
import {SideBarProps} from './SideBar.props';
import Logo from '../logo.svg';
import styles from './SideBar.module.css';
import cn from 'clsx';


export const SideBar = ({className, ...props}: SideBarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <Logo className={styles.logo}/>
            <Menu />
        </div>
    );
};