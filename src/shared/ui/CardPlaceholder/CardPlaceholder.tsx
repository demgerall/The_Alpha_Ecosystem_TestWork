import React from 'react';
import classNames from 'classnames';

import styles from './CardPlaceholder.module.scss';

export const CardPlaceholder = () => {
    return (
        <div className={styles.cardPlaceholder}>
            <div className={styles.preloader}>
                <div
                    className={classNames(styles.circle, styles.circleOne)}
                ></div>
                <div
                    className={classNames(styles.circle, styles.circleTwo)}
                ></div>
                <div
                    className={classNames(styles.circle, styles.circleThree)}
                ></div>
            </div>
        </div>
    );
};
