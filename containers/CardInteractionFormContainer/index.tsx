import React from 'react';
import InteractiveCard from 'components/InteractiveCard';
import { CardDetails } from 'types/card';
import CardDetailsForm from 'components/CardDetailsForm';

const CardInteractionFormContainer: React.FC = () => {
    const cardDetails: CardDetails = {
        cardholderName: 'felicia leire',
        cardNumber: '9591 6489 6389 1011',
        expireDate: {
            month: '09',
            year: '26',
        },
        CVC: '123'
    };

    return (
        <>
            <InteractiveCard cardDetails={cardDetails} />
            <CardDetailsForm />
        </>
    );
};

export default CardInteractionFormContainer;
