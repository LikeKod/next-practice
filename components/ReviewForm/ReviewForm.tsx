import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import cn from 'clsx';
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { TextArea } from "../TextArea/TextArea";

export const ReviewForm = ({ prductId, children, className, ...props }: ReviewFormProps): JSX.Element => {

    return (
        <div className={cn(styles.reviewForm, className)} {...props}>
            <Input />
            <Input />
            <div className={styles.rating}>
                <span>Rating:</span>
                <Rating rating={0}/>
            </div>
            <TextArea className={styles.description}/>
            <div className={styles.submit}>
                <Button appearance='primary'>Send</Button>
                <span>*Before public text will be examination</span>
            </div>
        </div>
    );
};