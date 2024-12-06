import React from 'react';
import classNames from 'classnames';

import styles from './ProductCard.module.scss';

interface ProductCardProps {
    className?: string;
    children: React.ReactNode;
}

export const ProductCard = (props: ProductCardProps) => {
    const { className = '', children, ...otherProps } = props;

    return (
        <div className={classNames(styles.product_card, [className])}>
            {children}
        </div>
    );
};
