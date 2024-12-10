import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

import { productType } from '@/entities';
import { useAppDispatch, useAppSelector } from '@/shared/libs/hooks/hooks';
import IMAGE_PLACEHOLDER from '@/shared/assets/images/img_placeholder.png';

import styles from './ProductItemPage.module.scss';
import { getProductById } from '@/features';

interface ProductItemPageProps {
    className?: string;
}

export const ProductItemPage = (props: ProductItemPageProps) => {
    const { className = '' } = props;

    const [mainImageIndex, setMainImageIndex] = useState(0);
    let { id } = useParams();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProductById(id ? +id : 0));
    }, [dispatch, id]);

    const { searchProduct } = useAppSelector(({ products }) => products);

    return (
        <section className={classNames(styles.section, [className])}>
            <div className={styles.imagesBlock}>
                <div className={styles.restImages}>
                    {searchProduct?.images.map((image, index) => {
                        return index !== mainImageIndex ? (
                            <img
                                src={image}
                                alt=""
                                draggable={false}
                                onClick={() => {
                                    setMainImageIndex(index);
                                }}
                            />
                        ) : (
                            ''
                        );
                    })}
                </div>
                <div className={styles.mainImage}>
                    <img
                        src={searchProduct?.images[mainImageIndex]}
                        alt=""
                        draggable={false}
                    />
                </div>
            </div>
            <div className={styles.infoBlock}>
                <div className={styles.mainInfo}>
                    <h2 className={styles.productName}>
                        {searchProduct?.title}
                    </h2>
                    <div className={styles.categoryBlock}>
                        Category:
                        <Link
                            to={`/category/${searchProduct?.category.id}`}
                            className={styles.productCategory}
                        >
                            {searchProduct?.category.name}
                        </Link>
                    </div>
                    <div className={styles.descriptionBlock}>
                        <h3>Description:</h3>
                        <p className={styles.productDescription}>
                            {searchProduct?.description}
                        </p>
                    </div>
                    <div className={styles.priceBlock}>
                        <p className={styles.newPrice}>
                            <span>Price: </span>
                            {searchProduct?.price}$
                        </p>
                        {searchProduct?.oldPrice ? (
                            <p className={styles.oldPrice}>
                                {searchProduct.oldPrice}
                            </p>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                <div className={styles.dataBlock}>
                    <p className={styles.productCreated}>
                        {`Created At: ${searchProduct?.creationAt?.toString()}`}
                    </p>
                    <p className={styles.productUpdated}>
                        {`Updated At: ${searchProduct?.updatedAt?.toString()}`}
                    </p>
                </div>
            </div>
        </section>
    );
};
