import React, { FormHTMLAttributes } from 'react';
import styles from './style.module.scss';
import Input from 'components/Input';
import { Control, UseFormRegister } from 'react-hook-form/dist/types/form';
import { Controller } from 'react-hook-form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import Button from 'components/Button';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    register: UseFormRegister<any>;
    control: Control<any>;
    errors: FieldErrors<any>;
}

const CardDetailsForm: React.FC<IProps> = ({ register, control, errors, ...props }) => {
    const isNumber = (value: string) => {
        const matches = value.match(/\D/);
        return !matches;
    };

    return (
        <form className={styles.cardDetailsForm}
              {...props}
        >
            <div>
                <label htmlFor={'cardholderName'}>
                    Cardholder Name
                </label>
                <Input id={'cardholderName'}
                       placeholder={'e.g. Jane Appleseed'}
                       maxLength={26}
                       {...register('cardholderName', {
                           required: 'Can\'t be blank',
                       })}
                       error={!!errors?.cardholderName}
                />
                <div className={styles.error}>
                    {errors?.cardholderName?.message}
                </div>
            </div>
            <div>
                <label htmlFor={'cardNumber'}>
                    Card Number
                </label>
                <Controller control={control}
                            name={'cardNumber'}
                            rules={{
                                required: 'Can\'t be blank',
                                minLength: {
                                    value: 19,
                                    message: 'Wrong format, numbers only',
                                },
                            }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <>
                                    <Input id={'cardNumber'}
                                           placeholder={'e.g. 1234 5678 9123 0000'}
                                           maxLength={19}
                                           onChange={(e) => {
                                               const { value } = e.target;
                                               if (value !== '' && !isNumber(value.replace(/\W/gi, ''))) {
                                                   return;
                                               }
                                               const newValue = value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
                                               onChange(newValue);
                                           }}
                                           value={value}
                                           error={!!error}
                                    />
                                </>
                            )}
                />
                <div className={styles.error}>
                    {errors?.cardNumber?.message}
                </div>
            </div>
            <div className={styles.row}>
                <div>
                    <label htmlFor={'expireDate'}>
                        EXP. DATE (MM/YY)
                    </label>
                    <div className={styles.expireDateInputContainer}>
                        <Controller control={control}
                                    name={'expireDate.month'}
                                    rules={{
                                        required: 'Can\'t be blank',
                                        min: {
                                            value: 1,
                                            message: 'At least 1',
                                        },
                                        max: {
                                            value: 12,
                                            message: 'At most 12',
                                        },
                                    }}
                                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                                        <Input id={'expireDate'}
                                               placeholder={'MM'}
                                               maxLength={2}
                                               onChange={(e) => {
                                                   const { value } = e.target;
                                                   if (value !== '' && !isNumber(value)) {
                                                       return;
                                                   }
                                                   onChange(value);
                                               }}
                                               value={value}
                                               onBlur={(e) => {
                                                   const { value } = e.target;
                                                   const valueAsNumber = Number.parseInt(value);
                                                   if (value === '' || valueAsNumber === 0) {
                                                       return;
                                                   }
                                                   const padValue = value.padStart(2, '0');
                                                   onChange(padValue);
                                               }}
                                               error={!!error}
                                        />
                                    )}
                        />

                        <Controller control={control}
                                    name={'expireDate.year'}
                                    rules={{
                                        required: 'Can\'t be blank',
                                    }}
                                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                                        <Input placeholder={'YY'}
                                               maxLength={2}
                                               onChange={(e) => {
                                                   const { value } = e.target;
                                                   if (value !== '' && !isNumber(value)) {
                                                       return;
                                                   }
                                                   onChange(value);
                                               }}
                                               value={value}
                                               onBlur={(e) => {
                                                   const { value } = e.target;
                                                   const valueAsNumber = Number.parseInt(value);
                                                   if (value === '' || valueAsNumber === 0) {
                                                       return;
                                                   }
                                                   const padValue = value.padStart(2, '0');
                                                   onChange(padValue);
                                               }}
                                               error={!!error}
                                        />
                                    )}
                        />
                    </div>
                    <div className={styles.error}>
                        {(errors?.expireDate as any)?.month?.message || (errors?.expireDate as any)?.year?.message}
                    </div>
                </div>
                <div>
                    <label htmlFor={'CVC'}>
                        CVC
                    </label>
                    <Controller control={control}
                                name={'CVC'}
                                rules={{
                                    required: 'Can\'t be blank',
                                    minLength: {
                                        value: 3,
                                        message: 'Wrong format',
                                    },
                                }}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <Input id={'CVC'}
                                           placeholder={'e.g. 123'}
                                           maxLength={3}
                                           onChange={(e) => {
                                               const { value } = e.target;
                                               if (value !== '' && !isNumber(value)) {
                                                   return;
                                               }
                                               onChange(e);
                                           }}
                                           value={value}
                                           error={!!error}
                                    />
                                )}
                    />
                    <div className={styles.error}>
                        {errors?.CVC?.message}
                    </div>

                </div>
            </div>

            <div className={styles.buttonContainer}>
                <Button type={'submit'}>
                    Confirm
                </Button>
            </div>
        </form>
    );
};

export default CardDetailsForm;
