import React from 'react';
import classNames from 'classnames';

import { CardList } from '@/features';
import { useAppSelector } from '@/shared/libs/hooks/hooks';

import styles from './ProductsPage.module.scss';

interface ProductsPageProps {
    className?: string;
}

export const ProductsPage: React.FC = (props: ProductsPageProps) => {
    const { className = '', ...otherProps } = props;

    const { list } = useAppSelector(({ products }) => products);

    return (
        <>
            <main className={classNames(styles.main, [className])}>
                <h1 className={styles.heading}>Товары</h1>
                <CardList amount={20}>{list}</CardList>
            </main>
        </>
    );
};
