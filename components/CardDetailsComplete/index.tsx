import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import Button from 'components/Button';
import CompleteIcon from '/public/icons/icon-complete.svg';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    onContinue: () => void;
}

const CardDetailsComplete: React.FC<IProps> = ({ onContinue, ...props }) => {
    return (
        <div className={styles.cardDetailsComplete}
             {...props}
        >
            <CompleteIcon className={styles.icon} />
            <div className={styles.title}>
                Thank you!
            </div>
            <div className={styles.description}>
                We’ve added your card details
            </div>

            <div className={styles.buttonContainer}>
                <Button type={'button'}
                        onClick={onContinue}
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default CardDetailsComplete;
