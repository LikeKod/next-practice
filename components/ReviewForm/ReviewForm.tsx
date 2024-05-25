import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import cn from 'clsx';
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { TextArea } from "../TextArea/TextArea";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import { API } from "../../app/api";
import axios from "axios";
import { useState } from "react";
import { Button } from "../Button/Button";

export const ReviewForm = ({ productId, isOpened, className, ...props }: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();


    const onSubmit = async (formData: IReviewForm) => {
        try {
            const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId });
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('Something is wrong');
            }
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <form onSubmit={handleSubmit()}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input
                    {...register('name', { required: { value: true, message: 'Write your name' } })} placeholder="Name"
                    error={errors.name}
                    tabIndex={isOpened ? 0 : -1}
                />
                <Input
                    {...register('title', { required: { value: true, message: 'Write title' } })} placeholder="Title review"
                    error={errors.title}
                    className={styles.title}
                    tabIndex={isOpened ? 0 : -1}
                />
                <div className={styles.rating}>
                    <span>Rating:</span>
                    <Controller
                        control={control}
                        name="rating"
                        rules={{ required: { value: true, message: 'Indicate rating' } }}
                        render={({ field }) => (
                            <Rating
                                isEditable
                                rating={field.value}
                                ref={field.ref}
                                setRating={field.onChange}
                                error={errors.rating}
                                tabIndex={isOpened ? 0 : -1}
                            />
                        )}
                    />
                </div>
                <TextArea
                    {...register('description', { required: { value: true, message: 'Write description' } })} placeholder="Review contain" className={styles.description}
                    error={errors.description}
                    tabIndex={isOpened ? 0 : -1}
                />
                <div className={styles.submit}>
                    <Button tabIndex={isOpened ? 0 : -1} appearance='primary'>Send</Button>
                    <span className={styles.info}>*Before public text will be examination</span>
                </div>
            </div>
            {isSuccess &&
                <div className={cn(styles.success, styles.panel)}>
                    <div className={styles.successTitle}>Your review be send</div>
                    <div>
                        Thanks for your review!
                    </div>
                    <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
                </div>
            }
            {error && <div className={cn(styles.error, styles.panel)}>
                Something broke... try refresh page!S
                <CloseIcon className={styles.close} onClick={() => setError(undefined)}/>
            </div>
            }
        </form>
    );
};