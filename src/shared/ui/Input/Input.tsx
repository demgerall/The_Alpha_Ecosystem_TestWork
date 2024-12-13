import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import classNames from 'classnames';

import { FormState } from '@/features';

import styles from './Input.module.scss';

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    name:
        | 'title'
        | 'image1'
        | 'image2'
        | 'image3'
        | 'image4'
        | 'price'
        | 'categoryId'
        | 'description';
    label: string;
    register: UseFormRegister<FormState>;
    required?: boolean;
}

export const Input = (props: inputProps) => {
    const {
        className = '',
        name,
        label,
        register,
        required = true,
        ...otherProps
    } = props;

    return (
        <div className={classNames(styles.inputBlock, [className])}>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                className={classNames(styles.input)}
                {...register(name, { required })}
                {...otherProps}
            />
        </div>
    );
};
