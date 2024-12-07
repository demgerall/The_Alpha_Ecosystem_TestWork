import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { productType } from './types/types';
import IMAGE_PLACEHOLDER from '@/shared/assets/images/img_placeholder.png';

import styles from './ProductCard.module.scss';

interface ProductCardProps {
    className?: string;
    children: productType;
}

export const ProductCard = (props: ProductCardProps) => {
    const { className = '', children, ...otherProps } = props;

    const { id, title, price, images, category } = children;

    const [loaded, setLoaded] = useState(false);

    return (
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
                        images[0].includes('[')
                            ? images[0].slice(1, images[0].length - 1)
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
                    {Math.random() > 0.5 ? (
                        <p className={styles.productOldPrice}>
                            {(price * 0.8).toFixed(2) + '$'}
                        </p>
                    ) : (
                        ''
                    )}
                </div>

                <div className={styles.mainInfo}>
                    <p className={styles.productTitle}>
                        {title.length < 30 ? title : title.slice(0, 30) + '...'}
                    </p>
                    <p className={styles.productCategory}>{category.name}</p>
                </div>
            </div>
        </Link>
    );
};
