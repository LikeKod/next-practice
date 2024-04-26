import {SortEnum, SortProps} from './Sort.props';
import SortIcon from './Sort.svg';
import cn from 'clsx';
import styles from './Sort.module.css';


export const Sort = ({sort, setSort, className, ...props}: SortProps): JSX.Element => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <span 
                onClick={() => setSort(SortEnum.Rating)}
                className={cn({
                    [styles.active]: sort == SortEnum.Rating
                })}
            >
                <SortIcon className={styles.sortIcon}/> Rating
            </span>
            <span 
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort == SortEnum.Price
                })}
            >
                <SortIcon className={styles.sortIcon}/> Price
            </span>
        </div>
    );
};