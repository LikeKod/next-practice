import { Htag, Tag } from '../../components'
import { TopPageComponentProps } from './TopPageComponent.props'
import styles from './TopPageComponent.module.css'

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='green' size='m'>{products.length}</Tag>}
                <span>Sort</span>
            </div>
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag='h2'>Vacation - {page.category}</Htag>
                {products && <Tag color='red' size='m'>hh.ru</Tag>}
                <span>Sort</span>
            </div>

        </div>
    );
};