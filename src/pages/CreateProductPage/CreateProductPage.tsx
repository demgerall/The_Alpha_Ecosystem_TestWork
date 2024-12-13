import React from 'react';
import classNames from 'classnames';

import { Form } from '@/features';

import styles from './CreateProductPage.module.scss';

interface CreateProductPageProps {
    className?: string;
}

export const CreateProductPage = (props: CreateProductPageProps) => {
    const { className = '' } = props;

    return (
        <section className={classNames(styles.section, [className])}>
            <h1 className={styles.heading}>Create Product</h1>
            <Form className={styles.form} />
        </section>
    );
};
