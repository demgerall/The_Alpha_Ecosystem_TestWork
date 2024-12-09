import React from 'react';
import classNames from 'classnames';

import { ProductCard, productType } from '@/entities';
import { CardPlaceholder } from '@/shared/ui/CardPlaceholder';

import styles from './CardList.module.scss';

interface CardListProps {
    className?: string;
    favouriteList?: Array<productType>;
    children?: Array<productType>;
}

export const CardList = (props: CardListProps) => {
    const { className = '', favouriteList = [], children } = props;

    const isFavourite = (id: number) => {
        return favouriteList.some(item => {
            return item.id === id;
        });
    };

    return (
        <ul className={classNames(styles.cardList, [className])}>
            {children
                ? children.map(product => {
                      return (
                          <li key={product.id} className={styles.cardItem}>
                              <ProductCard favourite={isFavourite(product.id)}>
                                  {product}
                              </ProductCard>
                          </li>
                      );
                  })
                : [...Array(20)].map(index => {
                      return (
                          <li
                              key={index}
                              className={styles.cardItemPlaceholder}
                          >
                              <CardPlaceholder />
                          </li>
                      );
                  })}
        </ul>
    );
};
