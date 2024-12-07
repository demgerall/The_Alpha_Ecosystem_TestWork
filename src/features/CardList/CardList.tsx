import React from 'react';
import classNames from 'classnames';

import { ProductCard, productType } from '@/entities';
import { CardPlaceholder } from '@/shared/ui/CardPlaceholder';

import styles from './CardList.module.scss';

interface CardListProps {
    className?: string;
    children?: Array<productType>;
}

export const CardList = (props: CardListProps) => {
    const { className = '', children, ...otherProps } = props;

    return (
        <ul className={classNames(styles.cardList, [className])}>
            {children
                ? children.map(product => {
                      return (
                          <li key={product.id} className={styles.cardItem}>
                              <ProductCard>{product}</ProductCard>
                          </li>
                      );
                  })
                : [...Array(20)].map(() => {
                      return (
                          <li className={styles.cardItemPlaceholder}>
                              <CardPlaceholder />
                          </li>
                      );
                  })}
        </ul>
    );
};
