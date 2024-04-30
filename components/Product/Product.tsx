import { Card } from "../Card/Card";
import { ProductProps } from "./Product.props";
import styles from './Product.module.css';
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
    return (
        <Card className={styles.product}>
            <div className={styles.logo}>
                <img src={process.env.NEXT_PUBLIC_DOMAIN+product.image} alt={product.title} />
            </div>
            <div className={styles.title}>
                {product.title}
            </div>
            <div className={styles.price}>
                {product.price}
            </div>
            <div className={styles.credit}>
                {product.credit}
            </div>
            <div className={styles.rating}>
                <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
                {product.categories.map(c => <Tag key={c} color="ghost">{c}</Tag>)}
            </div>
            <div className={styles.priceTitle}>
                Price
            </div>
            <div className={styles.creditTitle}>
                Credit
            </div>
            <div className={styles.rateTitle}>
                {product.reviewCount} reviews
            </div>
            <div className={styles.hr}><hr /></div>
            <div className={styles.description}>
                {product.description}
            </div>
            <div className={styles.feature}>
                feature
            </div>
            <div className={styles.advBlock}>
                <div className={styles.advantages}>
                   <div>Advantages</div>
                   <div>{product.advantages}</div>
                </div>
                <div className={styles.disadvantages}>
                   <div>Disdvantages</div>
                   <div>{product.disadvantages}</div>
                </div>
            </div>
            <div className={styles.hr}><hr /></div>
            <div className={styles.actions}>
                <Button appearance="primary">About</Button>
                <Button appearance="ghost" arrow={'right'}>Read reviews</Button>
            </div>
        </Card>
    );
};