import { Card } from "../Card/Card";
import { HhDataProps } from "./HhDate.props";
import styles from './HhDate.module.css';
import cn from 'clsx';
import RateIcon from './rate.svg';

export const HhData = ({ count, juniorSalary, middleSalary, seniorSelery }: HhDataProps): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}>
                    All vacations
                </div>
                <div className={styles.countValue}>
                    {count}
                </div>
            </Card>
            <Card className={styles.salary}>
                <div>
                    <div className={styles.title}>
                        Begner
                    </div>
                    <div className={styles.salaryValue}>
                        {juniorSalary}
                    </div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled} />
                        <RateIcon />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>
                        Middle
                    </div>
                    <div className={styles.salaryValue}>
                        {middleSalary}
                    </div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled} />
                        <RateIcon className={styles.filled}/>
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>
                        Professional
                    </div>
                    <div className={styles.salaryValue}>
                        {seniorSelery}
                    </div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled} />
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                    </div>
                </div>
            </Card>
        </div>
    )
}