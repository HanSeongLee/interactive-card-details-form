import React from 'react';
import styles from './style.module.scss';
import { CardDetails } from 'types/card';
import CardLogo from '/public/img/card-logo.svg';

interface IProps {
    cardDetails: CardDetails;
}

const InteractiveCard: React.FC<IProps> = ({ cardDetails }) => {
    const {
        cardholderName, cardNumber, expireDate, CVC,
    } = cardDetails;

    return (
        <div className={styles.interactiveCard}>
            <div className={styles.cardBack}>
                <div className={styles.card}>
                    <img className={styles.image}
                         src={'/img/bg-card-back.png'}
                         alt={''}
                    />
                    <div className={styles.signatureBox}>
                        {CVC}
                    </div>
                </div>
            </div>
            <div className={styles.cardFront}>
                <div className={styles.card}>
                    <img className={styles.image}
                         src={'/img/bg-card-front.png'}
                         alt={''}
                    />

                    <div className={styles.overlay}>
                        <CardLogo className={styles.logo} />

                        <div>
                            <div className={styles.cardNumber}>
                                {cardNumber}
                            </div>
                            <div className={styles.bottom}>
                                <div className={styles.cardholderName}>
                                    {cardholderName}
                                </div>
                                <div className={styles.expireDate}>
                                    {expireDate?.month}/{expireDate.year}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveCard
