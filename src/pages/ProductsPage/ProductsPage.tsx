import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { CardList, getProducts, getProductsTotal } from '@/features';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/libs/hooks/hooks';
import { useAppSelector } from '@/shared/libs/hooks/hooks';

import ARROW_RIGHT from '@/shared/assets/icons/arrow_right.svg';
import DOUBLE_ARROW_RIGHT from '@/shared/assets/icons/double_arrow_right.svg';
import ARROW_LEFT from '@/shared/assets/icons/arrow_left.svg';
import DOUBLE_ARROW_LEFT from '@/shared/assets/icons/double_arrow_left.svg';
import HEART_UNPRESSED from '@/shared/assets/icons/heart_unpressed.svg';

import styles from './ProductsPage.module.scss';

interface ProductsPageProps {
    className?: string;
}

export const ProductsPage: React.FC = (props: ProductsPageProps) => {
    const { className = '' } = props;

    const dispatch = useAppDispatch();

    const [page, setPage] = useState(0);
    const [showFavourite, setShowFavorite] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        dispatch(getProducts(page));
        dispatch(getProductsTotal());
    }, [dispatch, page]);

    const { products, isLoading } = useAppSelector(({ products }) => products);
    const { total } = useAppSelector(({ total }) => total);
    const { favouriteProducts } = useAppSelector(
        ({ favouriteProducts }) => favouriteProducts,
    );

    const filteredProducts = showFavourite
        ? [...favouriteProducts].reverse()
        : products;

    const nextPageChanger = () => {
        if (page < Math.floor(total / 20)) {
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
        setPage(Math.floor(total / 20));
    };

    const toggleShowFavourite = () => {
        if (showFavourite) {
            setShowFavorite(false);
            setIsPressed(false);
        } else {
            setShowFavorite(true);
            setIsPressed(true);
        }
    };

    return (
        <section className={classNames(styles.section, [className])}>
            <div className={styles.pageHeader}>
                <h1 className={styles.heading}>
                    Products{' '}
                    <span>{`${total > 100 ? Math.floor(total / 100) * 100 + '+' : total}`}</span>{' '}
                </h1>
                <Button
                    buttonStyle={isPressed ? 'pressed' : 'bordered'}
                    onClick={() => toggleShowFavourite()}
                >
                    Show
                    <HEART_UNPRESSED />
                </Button>
            </div>

            {isLoading ? (
                <CardList />
            ) : (
                <CardList favouriteList={favouriteProducts}>
                    {filteredProducts}
                </CardList>
            )}

            {!showFavourite ? (
                <div className={styles.paginationBlock}>
                    <Button buttonStyle={'black'} onClick={firstPageChanger}>
                        <DOUBLE_ARROW_LEFT />
                    </Button>
                    <Button buttonStyle={'black'} onClick={prevPageChanger}>
                        <ARROW_LEFT />
                    </Button>
                    <p className={styles.pageNumber}>{page + 1}</p>
                    <Button buttonStyle={'black'} onClick={nextPageChanger}>
                        <ARROW_RIGHT />
                    </Button>
                    <Button buttonStyle={'black'} onClick={lastPageChanger}>
                        <DOUBLE_ARROW_RIGHT />
                    </Button>
                </div>
            ) : (
                ''
            )}
        </section>
    );
};
