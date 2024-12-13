import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { deleteProductById } from '@/features';
import { deleteProductFromFavourite, addProductToFavourite } from '@/entities';
import { productType } from '@/entities';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/libs/hooks/hooks';

import IMAGE_PLACEHOLDER from '@/shared/assets/images/img_placeholder.png';
import HEART_UNPRESSED from '@/shared/assets/icons/heart_unpressed.svg';
import HEART_PRESSED from '@/shared/assets/icons/heart_pressed.svg';
import DELETE from '@/shared/assets/icons/delete.svg';

import styles from './ProductCard.module.scss';

interface ProductCardProps {
    className?: string;
    favourite: boolean;
    children: productType;
}

export const ProductCard = (props: ProductCardProps) => {
    const { className = '', favourite, children, ...otherProps } = props;

    const { id, title, price, images, category } = children;

    const [loaded, setLoaded] = useState(false);
    const [isFavourite, setIsFavourite] = useState(favourite);

    const dispatch = useAppDispatch();

    const oldPriceChance = useMemo(() => {
        return Math.random() > 0.5;
    }, [price]);

    const toggleFavourite = () => {
        if (isFavourite === false) {
            setIsFavourite(true);
            dispatch(addProductToFavourite(children));
        } else {
            setIsFavourite(false);
            dispatch(deleteProductFromFavourite(id));
        }
    };

    const deleteCard = (id: number) => {
        dispatch(deleteProductById(id));
        dispatch(deleteProductFromFavourite(id));
    };

    return (
        <>
            <div className={styles.cardControl}>
                <Button
                    buttonStyle={'transparent'}
                    onClick={() => toggleFavourite()}
                >
                    {isFavourite ? <HEART_PRESSED /> : <HEART_UNPRESSED />}
                </Button>
                <Button
                    buttonStyle={'transparent'}
                    onClick={() => deleteCard(id)}
                >
                    <DELETE />
                </Button>
            </div>
            <Link to={`/products/${id}`} className={className} title={title}>
                <div>
                    {loaded ? (
                        ''
                    ) : (
                        <img
                            src={IMAGE_PLACEHOLDER}
                            className={styles.productImg}
                            alt="Image of product"
                            draggable={false}
                        />
                    )}
                    <img
                        src={
                            images[0].includes('[') || images[0].includes(']')
                                ? images[0]
                                      .replace(']', '')
                                      .replace('[', '')
                                      .replace('"', '')
                                : images[0]
                        }
                        className={styles.productImg}
                        alt="Image of product"
                        style={loaded ? {} : { display: 'none' }}
                        onLoad={() => setLoaded(true)}
                        draggable={false}
                    />
                </div>

                <div className={styles.productInfo}>
                    <div className={styles.productPrices}>
                        <p className={styles.productNewPrice}>{price + '$'}</p>
                        {oldPriceChance ? (
                            <p className={styles.productOldPrice}>
                                {(price * 1.2).toFixed(2) + '$'}
                            </p>
                        ) : (
                            ''
                        )}
                    </div>

                    <div className={styles.mainInfo}>
                        <p className={styles.productTitle}>
                            {title.length < 30
                                ? title
                                : title.slice(0, 30) + '...'}
                        </p>
                        <p className={styles.productCategory}>
                            {category.name}
                        </p>
                    </div>
                </div>
            </Link>
        </>
    );
};
