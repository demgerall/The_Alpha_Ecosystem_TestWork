import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { ROUTES } from '@/shared/routes/routes';
import LOGO from '@/shared/assets/icons/logo.svg';

import styles from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header: React.FC = (props: HeaderProps) => {
    const { className = '', ...otherProps } = props;

    return (
        <>
            <header className={classNames(styles.header, [className])}>
                <Link to={ROUTES.HOME} draggable={false}>
                    <LOGO />
                    STORE
                </Link>
                <Link to={ROUTES.CREATE_PRODUCT} draggable={false}>
                    <p className={styles.link}>Create product</p>
                </Link>
            </header>
        </>
    );
};
