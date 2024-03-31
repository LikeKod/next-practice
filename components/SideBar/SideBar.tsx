import Menu from '../menu/menu';
import {SideBarProps} from './SideBar.props';


export const SideBar = ({...props}: SideBarProps): JSX.Element => {
    return (
        <div {...props}>
            <Menu />
        </div>
    );
};