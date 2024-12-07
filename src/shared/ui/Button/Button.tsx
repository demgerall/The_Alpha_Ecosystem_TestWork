import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    onClick: () => void;
    children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
    const { className = '', onClick, children, ...otherProps } = props;

    return (
        <button
            className={classNames(styles.button, [className])}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
