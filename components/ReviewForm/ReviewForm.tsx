import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import cn from 'clsx';
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { TextArea } from "../TextArea/TextArea";

export const ReviewForm = ({ prductId, children, className, ...props }: ReviewFormProps): JSX.Element => {

    return (
        <>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input placeholder="Name" />
                <Input placeholder="Title review" className={styles.title} />
                <div className={styles.rating}>
                    <span>Rating:</span>
                    <Rating rating={0} />
                </div>
                <TextArea placeholder="Review contain" className={styles.description} />
                <div className={styles.submit}>
                    <Button appearance='primary'>Send</Button>
                    <span className={styles.info}>*Before public text will be examination</span>
                </div>
            </div>
            <div className={styles.success}>
                <div className={styles.successTitle}>Your review be send</div>
                <div>
                    Thanks for your review!
                </div>
                <CloseIcon className={styles.close}/>
            </div>

        </>
    );
};