import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import classNames from 'classnames';

import { FormState } from '@/features';

import styles from './Textarea.module.scss';

interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    name: 'title' | 'images' | 'price' | 'categoryId' | 'description';
    label: string;
    register: UseFormRegister<FormState>;
    required?: boolean;
}

export const Textarea = (props: TextareaProps) => {
    const {
        className = '',
        name,
        label,
        register,
        required = true,
        ...otherProps
    } = props;

    return (
        <div className={classNames(styles.textareaBlock, [className])}>
            <label htmlFor={name}>{label}</label>
            <textarea
                id={name}
                className={classNames(styles.textarea)}
                {...register(name, { required })}
                {...otherProps}
            />
        </div>
    );
};
