import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import classNames from 'classnames';

import { FormState } from '@/features';

import styles from './Select.module.scss';
import { categoriesType } from '@/entities';

interface selectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    optionsVariants: Array<categoriesType>;
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

export const Select = (props: selectProps) => {
    const {
        className = '',
        optionsVariants,
        name,
        label,
        register,
        required = true,
        ...otherProps
    } = props;

    return (
        <div className={classNames(styles.selectBlock, [className])}>
            <label htmlFor={name}>{label}</label>
            <select
                id={name}
                className={classNames(styles.select)}
                {...register(name, { required })}
                {...otherProps}
            >
                <option value="" selected disabled className={styles.option}>
                    -- Choose category --
                </option>
                {optionsVariants.map(option => {
                    return <option value={option.id}> {option.name} </option>;
                })}
            </select>
        </div>
    );
};
