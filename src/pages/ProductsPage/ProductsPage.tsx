import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { CardList, getProducts } from '@/features';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/libs/hooks/hooks';
import { useAppSelector } from '@/shared/libs/hooks/hooks';

import ARROW_RIGHT from '@/shared/assets/icons/arrow_right.svg';
import DOUBLE_ARROW_RIGHT from '@/shared/assets/icons/double_arrow_right.svg';
import ARROW_LEFT from '@/shared/assets/icons/arrow_left.svg';
import DOUBLE_ARROW_LEFT from '@/shared/assets/icons/double_arrow_left.svg';

import styles from './ProductsPage.module.scss';

interface ProductsPageProps {
    className?: string;
}

export const ProductsPage: React.FC = (props: ProductsPageProps) => {
    const { className = '', ...otherProps } = props;

    const dispatch = useAppDispatch();
    const [page, setPage] = useState(0);

    useEffect(() => {
        dispatch(getProducts(page));
    }, [dispatch, page]);

    const { products, isLoading } = useAppSelector(({ products }) => products);

    const nextPageChanger = () => {
        if (page < 100) {
            setPage(page + 1);
        }
    };
    const prevPageChanger = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };
    const firstPageChanger = () => {
        setPage(0);
    };
    const lastPageChanger = () => {
        setPage(100);
    };

    return (
        <section className={classNames(styles.section, [className])}>
            <h1 className={styles.heading}>Products</h1>
            {isLoading ? (
                <CardList />
            ) : products.length ? (
                <CardList>{products}</CardList>
            ) : (
                <div className={styles.noProducts}>No products :/</div>
            )}
            <div className={styles.paginationBlock}>
                <Button onClick={firstPageChanger}>
                    <DOUBLE_ARROW_LEFT />
                </Button>
                <Button onClick={prevPageChanger}>
                    <ARROW_LEFT />
                </Button>
                {}
                <Button onClick={nextPageChanger}>
                    <ARROW_RIGHT />
                </Button>
                <Button onClick={lastPageChanger}>
                    <DOUBLE_ARROW_RIGHT />
                </Button>
            </div>
        </section>
    );
};
