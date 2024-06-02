import { SortEnum, SortProps } from './Sort.props';
import SortIcon from './Sort.svg';
import cn from 'clsx';
import styles from './Sort.module.css';


export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <div className={styles.sortName} id='sort'>Sort</div>
            <button
                id='rating'
                onClick={() => setSort(SortEnum.Rating)}
                className={cn({
                    [styles.active]: sort == SortEnum.Rating
                })}
                aria-selected={sort == SortEnum.Rating}
                aria-labelledby='sort rating'
            >
                <SortIcon className={styles.sortIcon} /> Rating
            </button>
            <button
                id='price'
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort == SortEnum.Price
                })}
                aria-selected={sort == SortEnum.Price}
                aria-labelledby='sort price'
            >
                <SortIcon className={styles.sortIcon} /> Price
            </button>
        </div>
    );
};