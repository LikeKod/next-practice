import { Advantages, HhData, Htag, Product, Sort, Tag } from '../../components';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';
import { useEffect, useReducer } from 'react';
import { sortReducer } from './sort.reducer';
import { useScrollY } from '../../hooks/useScrollY';
import { useReducedMotion } from 'framer-motion';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    const [{products: sortProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});
    const shouldReduceMotion = useReducedMotion();

    const setSort = (sort: SortEnum) => {
        dispatchSort({type: sort});
    };

    useEffect(() => {
        dispatchSort({type: 'reset', initialState: products});
    }, [products]);
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='green' size='m' aria-label={products.length + 'Element'}>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort}/>
            </div>
            <div role='list'>
                {sortProducts && sortProducts.map(p => (<Product layout={shouldReduceMotion ? false : true} product={p} role='listitem' key={p._id}/>))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag='h2'>Vacation - {page.category}</Htag>
                <Tag color='red' size='m'>hh.ru</Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh &&
                <HhData {...page.hh} />
            }
            {page.advantages && page.advantages.length > 0 && <>
                <Htag tag='h2'>Advantages</Htag>
                <Advantages advantages={page.advantages}/>
            </>}
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            <Htag tag='h2'>Skils</Htag>
            {page.tags.map(t => <Tag color='primary' key={t}>{t}</Tag>)}
        </div>
    );
};