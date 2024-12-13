import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    buttonStyle: 'black' | 'transparent' | 'bordered' | 'pressed';
    onClick: () => void;
    children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
    const {
        className = '',
        buttonStyle,
        onClick,
        children,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(
                styles.button,
                [className],
                buttonStyle === 'black' ? styles.black : '',
                buttonStyle === 'transparent' ? styles.transparent : '',
                buttonStyle === 'bordered' ? styles.bordered : '',
                buttonStyle === 'pressed' ? styles.pressed : '',
            )}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    );
};
