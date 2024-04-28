import Menu from '../menu/menu';
import {SideBarProps} from './SideBar.props';
import Logo from '../logo.svg';
import styles from './SideBar.module.css';
import cn from 'clsx';
import { Search } from '../Search/Search';


export const SideBar = ({className, ...props}: SideBarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <Logo className={styles.logo}/>
            <Search />
            <Menu />
        </div>
    );
};