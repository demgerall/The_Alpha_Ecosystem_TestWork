import React from 'react';
import classNames from 'classnames';

import { productType } from '@/entities';

import styles from './CardList.module.scss';

interface CardListProps {
    className?: string;
    children: Array<productType>;
    amount: number;
}

export const CardList = (props: CardListProps) => {
    const { className = '', children, amount, ...otherProps } = props;

    const products = children.filter((_, i) => i < amount);

    return (
        <div className={classNames(styles.card_list, [className])}>
            {products.map(
                ({
                    id,
                    title,
                    price,
                    description,
                    images,
                    category: { name: cat },
                }) => {
                    return <div key={id}>{id}</div>;
                },
            )}
        </div>
    );
};
