import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import classNames from 'classnames';

import { createProduct, getCategories } from '@/features';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Textarea } from '@/shared/ui/Textarea';
import { useAppDispatch, useAppSelector } from '@/shared/libs/hooks/hooks';

import styles from './Form.module.scss';
import { Select } from '@/shared/ui/Select';
import { productType } from '@/entities';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    className?: string;
}

export interface FormState {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
}

export const Form = (props: FormProps) => {
    const { className = '', ...otherProps } = props;

    const { register, handleSubmit } = useForm<FormState>({
        defaultValues: {
            title: '',
            categoryId: 1,
            price: 0,
            description: '',
        },
    });

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const { categories, isLoading } = useAppSelector(
        ({ categories }) => categories,
    );

    const onSubmitHandler: SubmitHandler<FormState> = data => {
        const images: string[] = [
            data.image1,
            data.image2,
            data.image3,
            data.image4,
        ];

        const createResponse = {
            title: data.title,
            price: +data.price,
            description: data.description,
            categoryId: +data.categoryId,
            images: images.filter(image => image !== ''),
        };

        dispatch(createProduct(createResponse));
        console.log(createResponse);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className={classNames(styles.form, [className])}
            {...otherProps}
        >
            <div className={styles.imageRefsBlock}>
                <Input
                    name="image1"
                    label="Product image link #1: "
                    type="text"
                    register={register}
                />
                <Input
                    name="image2"
                    label="Product image link #2: "
                    type="text"
                    register={register}
                    required={false}
                />
                <Input
                    name="image3"
                    label="Product image link #3: "
                    type="text"
                    register={register}
                    required={false}
                />
                <Input
                    name="image4"
                    label="Product image link #4: "
                    type="text"
                    register={register}
                    required={false}
                />
            </div>
            <Input
                name="title"
                label="Product name: "
                type="text"
                maxLength={50}
                placeholder="Name"
                register={register}
            />
            <Select
                name="categoryId"
                label="Product category: "
                register={register}
                optionsVariants={categories}
                autoFocus={false}
            />
            <Input
                name="price"
                label="Product price: "
                type="number"
                min={0}
                placeholder="Price $"
                register={register}
            />
            <Textarea
                rows={7}
                spellCheck={true}
                name="description"
                label="Product description: "
                placeholder="Description"
                register={register}
            />
            <div className={styles.formControl}>
                <Button buttonStyle="black" type="submit" onClick={() => {}}>
                    Create
                </Button>
                <Button buttonStyle="bordered" type="reset" onClick={() => {}}>
                    Cancel
                </Button>
            </div>
        </form>
    );
};
