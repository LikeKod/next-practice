import { Card } from "../Card/Card"
import { HhDataProps } from "./hhDate.props"

export const HhData = ({ count }: HhDataProps): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}>
                    All vacations
                </div>
                <div className={styles.countCalue}>
                    {count}
                </div>
            </Card>
        </div>
    )
}