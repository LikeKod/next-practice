import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import cn from 'clsx';
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { TextArea } from "../TextArea/TextArea";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";

export const ReviewForm = ({ prductId, children, className, ...props }: ReviewFormProps): JSX.Element => {
    const {register, control, handleSubmit, formState: {errors}} = useForm<IReviewForm>();

    const onSubmit = (data: IReviewForm) => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit()}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input 
                    {...register('name', {required: {value: true, message: 'Write your name'}})} placeholder="Name" 
                    error={errors.name}
                />
                <Input 
                    {...register('title', {required: {value: true, message: 'Write title'}})} placeholder="Title review" 
                    error={errors.title}
                    className={styles.title} 
                />
                <div className={styles.rating}>
                    <span>Rating:</span>
                    <Controller 
                        control={control} 
                        name="rating"
                        render={({field}) => (
                            <Rating isEditable rating={field.value} ref={field.ref} setRating={field.onChange} />
                        )}    
                    />
                </div>
                <TextArea 
                    {...register('description', {required: {value: true, message: 'Write description'}})} placeholder="Review contain" className={styles.description} 
                    error={errors.description}
                />
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

        </form>
    );
};