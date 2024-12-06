import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Header.module.scss';
import { ROUTES } from '@/shared/routes/routes';

import LOGO from '@/shared/assets/images/logo.png';

interface HeaderProps {
    className?: string;
}

export const Header: React.FC = (props: HeaderProps) => {
    const { className = '', ...otherProps } = props;

    return (
        <>
            <header className={classNames(styles.header, [className])}>
                <Link to={ROUTES.HOME} draggable={false}>
                    <img
                        src={LOGO}
                        className={styles.logo_img}
                        draggable={false}
                        alt="Company logo"
                    />
                </Link>
                <Link to={ROUTES.CREATE_PRODUCT} draggable={false}>
                    <p className={styles.link}>Добавить продукт</p>
                </Link>
            </header>
        </>
    );
};
