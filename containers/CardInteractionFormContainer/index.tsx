import React, { HTMLAttributes, useCallback, useMemo, useState } from 'react';
import InteractiveCard from 'components/InteractiveCard';
import { CardDetails } from 'types/card';
import { useForm } from 'react-hook-form';
import CardDetailsForm from 'components/CardDetailsForm';
import CardDetailsComplete from 'components/CardDetailsComplete';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const CardInteractionFormContainer: React.FC<IProps> = ({ ...props }) => {
    const { handleSubmit, register, control, watch, formState: { errors }, reset } = useForm();
    const [
        cardholderName, cardNumber, expireDateMonth, expireDateYear,
        CVC
    ] = watch([
        'cardholderName', 'cardNumber', 'expireDate.month', 'expireDate.year',
        'CVC'
    ]);
    const [complete, setComplete] = useState<boolean>(false);

    const onSubmit = useCallback((data) => {
        setComplete(true);
    }, []);

    const onContinue = useCallback(() => {
        reset();
        setComplete(false);
    }, [reset]);

    const cardDetails: CardDetails = useMemo(() => {
        return {
            cardholderName:
                cardholderName ? cardholderName : 'Jane Appleseed',
            cardNumber:
                cardNumber ? cardNumber : '0000 0000 0000 0000',
            expireDate: {
                month: expireDateMonth ? expireDateMonth : '00',
                year: expireDateYear ? expireDateYear : '00',
            },
            CVC: CVC ? CVC : '000',
        };
    }, [
        cardholderName, cardNumber, expireDateMonth, expireDateYear,
        CVC
    ]);

    return (
        <div {...props}>
            <InteractiveCard cardDetails={cardDetails} />
            {!complete ? (
                <CardDetailsForm register={register}
                                 control={control}
                                 errors={errors}
                                 onSubmit={handleSubmit(onSubmit)}
                />
            ) : (
                <CardDetailsComplete onContinue={onContinue} />
            )}
        </div>
    );
};

export default CardInteractionFormContainer;
